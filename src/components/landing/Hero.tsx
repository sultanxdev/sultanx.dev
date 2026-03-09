'use client';

import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState, useCallback, useRef, useEffect } from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import LightPillar from './LightPillar';

const CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function ScrambleText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  const scramble = useCallback(() => {
    frameRef.current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      setDisplay(
        text
          .split('')
          .map((char, i) =>
            i < frameRef.current
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join(''),
      );
      if (frameRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 28);
  }, [text]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(text);
  }, [text]);

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    [],
  );

  return (
    <span
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className={`cursor-default font-mono ${className}`}
      style={{ minWidth: `${text.length}ch`, display: 'inline-block' }}
    >
      {display}
    </span>
  );
}

/* Typing cursor blink */
function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-primary align-middle" />
  );
}

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <strong
            key={part.key}
            className="text-foreground font-medium whitespace-pre-wrap"
          >
            {part.text}
          </strong>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <div className="relative w-full">
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-screen max-w-[100vw] h-[600px] overflow-hidden -z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
        <LightPillar
          topColor="#37fb72"
          bottomColor="#e4ece4"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={1.9}
          pillarHeight={0.4}
          noiseIntensity={0.4}
          pillarRotation={27}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>
      <Container className="mx-auto max-w-5xl relative z-10">
        {/* Availability badge */}
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for opportunities
        </span>
      </div>

      {/* Avatar + name row */}
      <div className="mb-8 flex items-center gap-5">
        <Image
          src={avatar}
          alt="hero"
          width={100}
          height={100}
          className="size-20 shrink-0 rounded-2xl bg-blue-300 ring-2 ring-border/60 shadow-md transition-all duration-300 hover:ring-primary/40 dark:bg-yellow-300"
          priority
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            {'Hi, I\u2019m '}
            <ScrambleText text={name} className="text-primary" />
            <Cursor />
          </h1>
          <p className="text-muted-foreground mt-1.5 text-lg">
            {title}
          </p>
        </div>
      </div>

      {/* Bio with inline tech skills */}
      <div className="mb-8 flex max-w-2xl flex-wrap items-center gap-x-1.5 gap-y-2 text-base leading-relaxed text-neutral-500 whitespace-pre-wrap md:text-lg">
        {renderDescription()}
      </div>

      {/* CTA Buttons */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as 'outline' | 'default'}
              className={cn(
                'group gap-2 transition-all duration-200',
                button.variant === 'default' &&
                'bg-foreground text-background hover:opacity-90',
              )}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
              {button.variant === 'default' ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              )}
            </Button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-1">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg p-2.5 transition-all duration-200 hover:scale-110"
              >
                <span className="size-5 block">{link.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      </Container>
    </div>
  );
}
