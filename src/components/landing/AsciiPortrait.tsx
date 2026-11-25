'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useId, useMemo, useRef } from 'react';

import {
  ASCII_PHOTO_DARK_URI,
  ASCII_PHOTO_LIGHT_URI,
  ASCII_SVG_CHARS,
  ASCII_SVG_DARK_CELLS,
  ASCII_SVG_GRID_SIZE,
  ASCII_SVG_LIGHT_CELLS,
  ASCII_SVG_VIEWBOX_SIZE,
  type AsciiSvgCell,
} from './asciiPortraitData';

interface AsciiPortraitProps {
  src?: string;
  alt: string;
  className?: string;
  cellSize?: number;
  sizes?: string;
}

const BAND_COUNT = 6;
const HOVER_RADIUS = 56; // in 240x240 SVG viewBox units
const HOVER_VIOLET = { r: 139, g: 92, b: 246 }; // #8B5CF6
const FONT_SIZE = +((ASCII_SVG_VIEWBOX_SIZE / ASCII_SVG_GRID_SIZE) * 1.18).toFixed(2);
const CHAR_COUNT = ASCII_SVG_CHARS.length;

function clamp(val: number, min: number, max: number): number {
  return val < min ? min : val > max ? max : val;
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function groupByWaveBand(cells: readonly AsciiSvgCell[]) {
  const bands: Array<Array<{ index: number; cell: AsciiSvgCell }>> = Array.from(
    { length: BAND_COUNT },
    () => [],
  );
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const phaseIdx = (cell[0] + cell[1]) % BAND_COUNT;
    bands[phaseIdx].push({ index: i, cell });
  }
  return bands;
}

/**
 * Zero-flash Pure SVG interactive ASCII-art portrait.
 * Renders pre-computed light and dark ASCII glyph layers immediately on SSR
 * with GPU wave bands and 60fps localized pointer hover ripples + violet shimmer.
 */
export default function AsciiPortrait({ alt, className = '' }: AsciiPortraitProps) {
  const uid = useId().replace(/:/g, '');
  const svgRef = useRef<SVGSVGElement | null>(null);
  const lightGlyphRefs = useRef<Array<SVGTextElement | null>>([]);
  const darkGlyphRefs = useRef<Array<SVGTextElement | null>>([]);

  const lightBands = useMemo(() => groupByWaveBand(ASCII_SVG_LIGHT_CELLS), []);
  const darkBands = useMemo(() => groupByWaveBand(ASCII_SVG_DARK_CELLS), []);

  const lightRgb = useMemo(
    () => ASCII_SVG_LIGHT_CELLS.map((c) => hexToRgb(c[5])),
    [],
  );
  const darkRgb = useMemo(
    () => ASCII_SVG_DARK_CELLS.map((c) => hexToRgb(c[5])),
    [],
  );

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;
    let isDark = document.documentElement.classList.contains('dark');

    const pointer = {
      x: -999,
      y: -999,
      active: false,
      strength: 0,
    };

    const touchedIndices = new Set<number>();
    let rafId: number | null = null;
    const startTime = performance.now();

    const resetTouched = (
      cells: readonly AsciiSvgCell[],
      refs: Array<SVGTextElement | null>,
    ) => {
      for (const idx of touchedIndices) {
        const el = refs[idx];
        const cell = cells[idx];
        if (!el || !cell) continue;
        const baseCharIdx = Math.min(CHAR_COUNT - 1, Math.floor(cell[4] * CHAR_COUNT));
        el.textContent = ASCII_SVG_CHARS[baseCharIdx];
        el.setAttribute('fill', cell[5]);
        el.removeAttribute('transform');
      }
      touchedIndices.clear();
    };

    const renderHoverFrame = (now: number) => {
      const cells = isDark ? ASCII_SVG_DARK_CELLS : ASCII_SVG_LIGHT_CELLS;
      const rgbs = isDark ? darkRgb : lightRgb;
      const refs = isDark ? darkGlyphRefs.current : lightGlyphRefs.current;

      pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.16;

      if (pointer.strength <= 0.015 || prefersReducedMotion) {
        pointer.strength = 0;
        resetTouched(cells, refs);
        rafId = null;
        return;
      }

      const t = (now - startTime) / 1000;
      const nextTouched = new Set<number>();

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const dx = cell[2] - pointer.x;
        const dy = cell[3] - pointer.y;
        if (Math.abs(dx) > HOVER_RADIUS || Math.abs(dy) > HOVER_RADIUS) continue;

        const dist = Math.hypot(dx, dy);
        if (dist >= HOVER_RADIUS) continue;

        const el = refs[i];
        if (!el) continue;

        nextTouched.add(i);

        const falloff = (1 - dist / HOVER_RADIUS) * pointer.strength;
        const push = Math.sin(dist * 0.16 - t * 4.5) * falloff;
        const shiftX = dist > 0.5 ? (dx / dist) * push * 2.2 : 0;
        const shiftY = dist > 0.5 ? (dy / dist) * push * 2.2 : 0;

        const boostedTone = clamp(cell[4] + falloff * 0.24, 0, 1);
        const charIdx = Math.min(CHAR_COUNT - 1, Math.floor(boostedTone * CHAR_COUNT));
        const ch = ASCII_SVG_CHARS[charIdx];
        if (el.textContent !== ch) {
          el.textContent = ch;
        }

        const violetMix = Math.min(1, falloff * (isDark ? 0.72 : 0.78));
        const [br, bg, bb] = rgbs[i];
        const r = Math.round(br * (1 - violetMix) + HOVER_VIOLET.r * violetMix);
        const g = Math.round(bg * (1 - violetMix) + HOVER_VIOLET.g * violetMix);
        const b = Math.round(bb * (1 - violetMix) + HOVER_VIOLET.b * violetMix);

        el.setAttribute('fill', `rgb(${r},${g},${b})`);
        el.setAttribute('transform', `translate(${shiftX.toFixed(2)} ${shiftY.toFixed(2)})`);
      }

      for (const prevIdx of touchedIndices) {
        if (!nextTouched.has(prevIdx)) {
          const el = refs[prevIdx];
          const cell = cells[prevIdx];
          if (el && cell) {
            const baseCharIdx = Math.min(
              CHAR_COUNT - 1,
              Math.floor(cell[4] * CHAR_COUNT),
            );
            el.textContent = ASCII_SVG_CHARS[baseCharIdx];
            el.setAttribute('fill', cell[5]);
            el.removeAttribute('transform');
          }
        }
      }

      touchedIndices.clear();
      for (const idx of nextTouched) touchedIndices.add(idx);

      rafId = requestAnimationFrame(renderHoverFrame);
    };

    const ensureLoop = () => {
      if (rafId === null && !prefersReducedMotion) {
        rafId = requestAnimationFrame(renderHoverFrame);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = svg.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointer.x = ((e.clientX - rect.left) / rect.width) * ASCII_SVG_VIEWBOX_SIZE;
      pointer.y = ((e.clientY - rect.top) / rect.height) * ASCII_SVG_VIEWBOX_SIZE;
      pointer.active = true;
      ensureLoop();
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      ensureLoop();
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        resetTouched(ASCII_SVG_LIGHT_CELLS, lightGlyphRefs.current);
        resetTouched(ASCII_SVG_DARK_CELLS, darkGlyphRefs.current);
      }
    };

    const themeObserver = new MutationObserver(() => {
      const nextDark = document.documentElement.classList.contains('dark');
      if (nextDark !== isDark) {
        resetTouched(
          isDark ? ASCII_SVG_DARK_CELLS : ASCII_SVG_LIGHT_CELLS,
          isDark ? darkGlyphRefs.current : lightGlyphRefs.current,
        );
        isDark = nextDark;
      }
    });

    svg.addEventListener('pointermove', handlePointerMove);
    svg.addEventListener('pointerleave', handlePointerLeave);
    motionQuery.addEventListener('change', handleMotionChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      svg.removeEventListener('pointermove', handlePointerMove);
      svg.removeEventListener('pointerleave', handlePointerLeave);
      motionQuery.removeEventListener('change', handleMotionChange);
      themeObserver.disconnect();
    };
  }, [darkRgb, lightRgb]);

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'border-secondary relative aspect-square size-60 max-w-full shrink-0 overflow-hidden rounded-md border-2 bg-white transition-colors duration-200 hover:border-violet-500/45 dark:border-white/15 dark:bg-[#0b0b0d] dark:hover:border-violet-400/45',
        className,
      )}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${ASCII_SVG_VIEWBOX_SIZE} ${ASCII_SVG_VIEWBOX_SIZE}`}
        className="block size-full select-none"
        aria-hidden="true"
      >
        {/* Light theme layer */}
        <g className="dark:hidden">
          <rect
            width={ASCII_SVG_VIEWBOX_SIZE}
            height={ASCII_SVG_VIEWBOX_SIZE}
            fill="#ffffff"
          />
          <image
            href={ASCII_PHOTO_LIGHT_URI}
            width={ASCII_SVG_VIEWBOX_SIZE}
            height={ASCII_SVG_VIEWBOX_SIZE}
            preserveAspectRatio="xMidYMid slice"
            opacity={0.38}
          />
          <g
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
            fontWeight="700"
            fontSize={FONT_SIZE}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {lightBands.map((band, bandIdx) => (
              <g
                key={`${uid}-l-${bandIdx}`}
                className="ascii-wave-band"
                style={{ animationDelay: `${-(bandIdx * 0.53).toFixed(2)}s` }}
              >
                {band.map(({ index, cell }) => {
                  const charIdx = Math.min(
                    CHAR_COUNT - 1,
                    Math.floor(cell[4] * CHAR_COUNT),
                  );
                  return (
                    <text
                      key={index}
                      ref={(el) => {
                        lightGlyphRefs.current[index] = el;
                      }}
                      x={cell[2]}
                      y={cell[3]}
                      fill={cell[5]}
                      fillOpacity={cell[6]}
                    >
                      {ASCII_SVG_CHARS[charIdx]}
                    </text>
                  );
                })}
              </g>
            ))}
          </g>
        </g>

        {/* Dark theme layer (monochrome grayscale) */}
        <g className="hidden dark:block">
          <rect
            width={ASCII_SVG_VIEWBOX_SIZE}
            height={ASCII_SVG_VIEWBOX_SIZE}
            fill="#0b0b0d"
          />
          <image
            href={ASCII_PHOTO_DARK_URI}
            width={ASCII_SVG_VIEWBOX_SIZE}
            height={ASCII_SVG_VIEWBOX_SIZE}
            preserveAspectRatio="xMidYMid slice"
            opacity={0.28}
          />
          <g
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
            fontWeight="700"
            fontSize={FONT_SIZE}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {darkBands.map((band, bandIdx) => (
              <g
                key={`${uid}-d-${bandIdx}`}
                className="ascii-wave-band"
                style={{ animationDelay: `${-(bandIdx * 0.53).toFixed(2)}s` }}
              >
                {band.map(({ index, cell }) => {
                  const charIdx = Math.min(
                    CHAR_COUNT - 1,
                    Math.floor(cell[4] * CHAR_COUNT),
                  );
                  return (
                    <text
                      key={index}
                      ref={(el) => {
                        darkGlyphRefs.current[index] = el;
                      }}
                      x={cell[2]}
                      y={cell[3]}
                      fill={cell[5]}
                      fillOpacity={cell[6]}
                    >
                      {ASCII_SVG_CHARS[charIdx]}
                    </text>
                  );
                })}
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
