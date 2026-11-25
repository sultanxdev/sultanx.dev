'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface AsciiPortraitProps {
  src: string;
  alt: string;
  className?: string;
  cellSize?: number;
  sizes?: string;
}

interface CellDescriptor {
  x: number;
  y: number;
  cx: number;
  cy: number;
  tone: number;
  drawn: boolean;
  r: number;
  g: number;
  b: number;
}

interface CachedGrid {
  cols: number;
  rows: number;
  cellH: number;
  cells: CellDescriptor[];
}

const ASCII_CONFIG = {
  chars: ' .:-=+*#%@',
  cellSize: 4,
  coverage: 94,
  photoUnderlay: 0.38,
  brightness: 0,
  contrast: 45,
  saturation: 95,
  grayscale: 28,
  edgeEmphasis: 26,
  tintHex: '#8B5CF6',
  tintOpacity: 0.1,
  animIntensity: 20,
  animSpeed: 36,
} as const;

const TINT_RGB = { r: 139, g: 92, b: 246 }; // #8B5CF6

const BAYER_4X4 = [
  [0 / 16, 8 / 16, 2 / 16, 10 / 16],
  [12 / 16, 4 / 16, 14 / 16, 6 / 16],
  [3 / 16, 11 / 16, 1 / 16, 9 / 16],
  [15 / 16, 7 / 16, 13 / 16, 5 / 16],
];

function clamp(val: number, min: number, max: number): number {
  return val < min ? min : val > max ? max : val;
}

/**
 * Interactive Canvas2D ASCII-art portrait with cached image processing,
 * devicePixelRatio scaling, prefers-reduced-motion support, and an
 * original Next.js Image fallback if Canvas2D or image processing fails.
 */
export default function AsciiPortrait({
  src,
  alt,
  className = '',
  cellSize = ASCII_CONFIG.cellSize,
  sizes = '240px',
}: AsciiPortraitProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const frameEl = frameRef.current;
    const canvas = canvasRef.current;
    if (!frameEl || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const sampleCanvas = document.createElement('canvas');
    const sampleCtx = sampleCanvas.getContext('2d', {
      willReadFrequently: true,
    });
    const photoCanvas = document.createElement('canvas');
    const photoCtx = photoCanvas.getContext('2d');
    if (!sampleCtx || !photoCtx) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;
    let isDark = document.documentElement.classList.contains('dark');
    let sourceImage: HTMLImageElement | null = null;
    let cachedGrid: CachedGrid | null = null;
    let cssWidth = 240;
    let cssHeight = 240;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId: number | null = null;
    let disposed = false;
    const startTime = performance.now();

    const pointer = { x: -999, y: -999, active: false, strength: 0 };

    const syncCanvasSize = () => {
      const rect = frameEl.getBoundingClientRect();
      cssWidth = Math.max(32, Math.round(rect.width) || 240);
      cssHeight = Math.max(32, Math.round(rect.height) || 240);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      const targetW = Math.round(cssWidth * dpr);
      const targetH = Math.round(cssHeight * dpr);
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }
    };

    const buildCellCache = () => {
      if (!sourceImage || !sourceImage.naturalWidth) {
        cachedGrid = null;
        return;
      }

      syncCanvasSize();

      const activeCellSize = Math.max(2, cellSize);
      const cols = Math.max(8, Math.floor(cssWidth / activeCellSize));
      const rows = Math.max(8, Math.floor(cssHeight / activeCellSize));

      sampleCanvas.width = cols;
      sampleCanvas.height = rows;

      // Match object-cover framing
      const imgAspect = sourceImage.naturalWidth / sourceImage.naturalHeight;
      const boxAspect = cssWidth / cssHeight;
      let sx = 0;
      let sy = 0;
      let sw = sourceImage.naturalWidth;
      let sh = sourceImage.naturalHeight;
      if (imgAspect > boxAspect) {
        sw = sourceImage.naturalHeight * boxAspect;
        sx = (sourceImage.naturalWidth - sw) * 0.5;
      } else if (imgAspect < boxAspect) {
        sh = sourceImage.naturalWidth / boxAspect;
        sy = (sourceImage.naturalHeight - sh) * 0.5;
      }

      sampleCtx.clearRect(0, 0, cols, rows);
      sampleCtx.drawImage(sourceImage, sx, sy, sw, sh, 0, 0, cols, rows);

      const photoW = Math.round(cssWidth * dpr);
      const photoH = Math.round(cssHeight * dpr);
      if (photoCanvas.width !== photoW || photoCanvas.height !== photoH) {
        photoCanvas.width = photoW;
        photoCanvas.height = photoH;
      }
      photoCtx.clearRect(0, 0, photoW, photoH);
      photoCtx.drawImage(sourceImage, sx, sy, sw, sh, 0, 0, photoW, photoH);

      if (isDark) {
        // Desaturate base layer completely in dark mode so no color bleeds through
        try {
          const pData = photoCtx.getImageData(0, 0, photoW, photoH);
          const px = pData.data;
          for (let i = 0; i < px.length; i += 4) {
            const g = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2];
            const m = clamp((g - 128) * 1.08 + 122, 0, 255);
            px[i] = m;
            px[i + 1] = m;
            px[i + 2] = m;
          }
          photoCtx.putImageData(pData, 0, 0);
        } catch {
          // Graceful fallback if getImageData fails
        }
      }

      let imageData: ImageData;
      try {
        imageData = sampleCtx.getImageData(0, 0, cols, rows);
      } catch {
        setCanvasReady(false);
        cachedGrid = null;
        return;
      }

      const data = imageData.data;
      const count = cols * rows;
      const lumRaw = new Float32Array(count);
      const rgbAdjusted = new Uint8ClampedArray(count * 3);

      const brightShift = (ASCII_CONFIG.brightness / 100) * 255;
      const cVal = clamp(ASCII_CONFIG.contrast, -100, 100) * 2.55;
      const contrastFactor = (259 * (cVal + 255)) / (255 * (259 - cVal));
      const satFactor = ASCII_CONFIG.saturation / 100;
      const grayMix = clamp(ASCII_CONFIG.grayscale / 100, 0, 1);
      const tintMix = ASCII_CONFIG.tintOpacity;

      for (let i = 0; i < count; i++) {
        const idx = i * 4;
        let r = data[idx] + brightShift;
        let g = data[idx + 1] + brightShift;
        let b = data[idx + 2] + brightShift;

        r = contrastFactor * (r - 128) + 128;
        g = contrastFactor * (g - 128) + 128;
        b = contrastFactor * (b - 128) + 128;

        const lumPre = 0.299 * r + 0.587 * g + 0.114 * b;
        r = lumPre + (r - lumPre) * satFactor;
        g = lumPre + (g - lumPre) * satFactor;
        b = lumPre + (b - lumPre) * satFactor;

        const cr = clamp(r, 0, 255);
        const cg = clamp(g, 0, 255);
        const cb = clamp(b, 0, 255);
        const gray = 0.299 * cr + 0.587 * cg + 0.114 * cb;

        const colorR = cr * (1 - grayMix) + gray * grayMix;
        const colorG = cg * (1 - grayMix) + gray * grayMix;
        const colorB = cb * (1 - grayMix) + gray * grayMix;

        if (isDark) {
          // Pure monochrome silver/slate in dark mode (zero color on image)
          const mono = clamp(gray * 1.06 + 16, 28, 248);
          rgbAdjusted[i * 3] = mono;
          rgbAdjusted[i * 3 + 1] = mono;
          rgbAdjusted[i * 3 + 2] = mono;
        } else {
          const darkness = 1 - gray / 255;
          const inkScale = 0.52 + (1 - darkness) * 0.42;
          rgbAdjusted[i * 3] = clamp(
            colorR * inkScale * (1 - tintMix) + TINT_RGB.r * tintMix,
            0,
            255,
          );
          rgbAdjusted[i * 3 + 1] = clamp(
            colorG * inkScale * (1 - tintMix) + TINT_RGB.g * tintMix,
            0,
            255,
          );
          rgbAdjusted[i * 3 + 2] = clamp(
            colorB * inkScale * (1 - tintMix) + TINT_RGB.b * tintMix,
            0,
            255,
          );
        }

        lumRaw[i] = clamp(gray / 255, 0, 1);
      }

      // Edge magnitude keeps facial features sharp
      const edges = new Float32Array(count);
      const edgeWeight = ASCII_CONFIG.edgeEmphasis / 100;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const l = lumRaw[y * cols + Math.max(0, x - 1)];
          const r = lumRaw[y * cols + Math.min(cols - 1, x + 1)];
          const u = lumRaw[Math.max(0, y - 1) * cols + x];
          const d = lumRaw[Math.min(rows - 1, y + 1) * cols + x];
          edges[idx] = Math.min(1, Math.hypot(r - l, d - u) * 1.8);
        }
      }

      const cells: CellDescriptor[] = new Array(count);
      const coverageNorm = ASCII_CONFIG.coverage / 100;
      const cellW = cssWidth / cols;
      const cellH = cssHeight / rows;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const lum = lumRaw[idx];
          const edge = edges[idx];
          const darkness = 1 - lum;
          const importance = isDark
            ? clamp(lum * 0.8 + edge * 0.5, 0, 1)
            : clamp(darkness * 0.85 + edge * 0.55, 0, 1);
          const bayer = BAYER_4X4[y & 3][x & 3];
          const drawn = importance + coverageNorm * 0.72 > bayer + 0.16;
          const tone = isDark
            ? clamp(lum + edge * edgeWeight * 0.75, 0, 1)
            : clamp(darkness + edge * edgeWeight * 0.85, 0, 1);

          cells[idx] = {
            x,
            y,
            cx: (x + 0.5) * cellW,
            cy: (y + 0.5) * cellH,
            tone,
            drawn,
            r: rgbAdjusted[idx * 3],
            g: rgbAdjusted[idx * 3 + 1],
            b: rgbAdjusted[idx * 3 + 2],
          };
        }
      }

      cachedGrid = { cols, rows, cellH, cells };
      setCanvasReady(true);
    };

    const renderFrame = (now: number) => {
      if (!cachedGrid) return;

      const { cols, rows, cellH, cells } = cachedGrid;
      const speedFactor = ASCII_CONFIG.animSpeed / 50;
      const t = ((now - startTime) / 1000) * speedFactor;
      const intensity = prefersReducedMotion
        ? 0
        : ASCII_CONFIG.animIntensity / 100;

      pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.12;

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = isDark ? '#0b0b0d' : '#ffffff';
      ctx.fillRect(0, 0, cssWidth, cssHeight);

      if (photoCanvas.width > 0) {
        ctx.save();
        ctx.globalAlpha = isDark ? 0.28 : ASCII_CONFIG.photoUnderlay;
        ctx.drawImage(photoCanvas, 0, 0, cssWidth, cssHeight);
        ctx.restore();
      }

      const chars = ASCII_CONFIG.chars;
      const charCount = chars.length;
      const fontPx = Math.max(3, +(cellH * 1.18).toFixed(2));
      ctx.font = `700 ${fontPx}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        if (!cell.drawn) continue;

        let waveOffset = 0;
        let xShift = 0;
        let yShift = 0;
        let violetBoost = 0;

        if (intensity > 0) {
          const nx = cell.x / cols;
          const ny = cell.y / rows;
          const phase = nx * 4.5 + ny * 3.0 - t * 2.2;
          const wave = Math.sin(phase);
          waveOffset = wave * 0.16 * intensity;
          yShift = wave * 0.85 * intensity;
          violetBoost = Math.max(0, wave) * 0.35 * intensity;
        }

        // Hover triggers subtle ASCII wave & violet shimmer (no raw photo reveal)
        const hoverRadius = Math.min(76, Math.max(28, cssWidth * 0.45));
        if (pointer.strength > 0.01 && !prefersReducedMotion) {
          const dx = cell.cx - pointer.x;
          const dy = cell.cy - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < hoverRadius) {
            const falloff = (1 - dist / hoverRadius) * pointer.strength;
            const push = Math.sin(dist * 0.16 - t * 4.0) * falloff;
            waveOffset += falloff * 0.15;
            violetBoost = Math.min(1, violetBoost + falloff * 0.45);
            if (dist > 0.5) {
              xShift += (dx / dist) * push * 1.4;
              yShift += (dy / dist) * push * 1.4;
            }
          }
        }

        const modulatedTone = clamp(cell.tone + waveOffset, 0, 1);
        const charIdx = Math.min(
          charCount - 1,
          Math.floor(modulatedTone * charCount),
        );
        const ch = chars[charIdx];
        if (ch === ' ') continue;

        const shimmerTarget = isDark ? { r: 248, g: 248, b: 250 } : TINT_RGB;
        const r = Math.round(
          cell.r * (1 - violetBoost) + shimmerTarget.r * violetBoost,
        );
        const g = Math.round(
          cell.g * (1 - violetBoost) + shimmerTarget.g * violetBoost,
        );
        const b = Math.round(
          cell.b * (1 - violetBoost) + shimmerTarget.b * violetBoost,
        );
        const alpha = clamp(0.45 + modulatedTone * 0.55, 0.25, 0.98);

        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fillText(ch, cell.cx + xShift, cell.cy + yShift);
      }

      ctx.restore();
    };

    const tick = (now: number) => {
      if (disposed) return;
      renderFrame(now);
      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    const startLoop = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      renderFrame(performance.now());
      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      if (disposed) return;
      sourceImage = img;
      buildCellCache();
      startLoop();
    };
    img.onerror = () => {
      if (!disposed) setCanvasReady(false);
    };
    img.src = src;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = frameEl.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const handlePointerLeave = () => {
      pointer.active = false;
    };

    frameEl.addEventListener('pointermove', handlePointerMove);
    frameEl.addEventListener('pointerleave', handlePointerLeave);

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
          if (sourceImage) {
            buildCellCache();
            renderFrame(performance.now());
          }
        })
        : null;
    resizeObserver?.observe(frameEl);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      startLoop();
    };
    motionQuery.addEventListener('change', handleMotionChange);

    const themeObserver = new MutationObserver(() => {
      const nextDark = document.documentElement.classList.contains('dark');
      if (nextDark !== isDark) {
        isDark = nextDark;
        if (sourceImage) {
          buildCellCache();
          renderFrame(performance.now());
        }
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      disposed = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      frameEl.removeEventListener('pointermove', handlePointerMove);
      frameEl.removeEventListener('pointerleave', handlePointerLeave);
      resizeObserver?.disconnect();
      motionQuery.removeEventListener('change', handleMotionChange);
      themeObserver.disconnect();
    };
  }, [src, cellSize]);

  return (
    <div
      ref={frameRef}
      role="img"
      aria-label={alt}
      className={cn(
        'border-secondary relative aspect-square size-60 max-w-full shrink-0 overflow-hidden rounded-md border-2 bg-white transition-colors duration-200 hover:border-violet-500/45 dark:border-white/15 dark:bg-[#121214] dark:hover:border-violet-400/45',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority
        className={`object-cover transition-opacity duration-200 ${canvasReady ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
      />
      <canvas
        ref={canvasRef}
        width={240}
        height={240}
        className="absolute inset-0 z-10 block size-full"
      />
    </div>
  );
}
