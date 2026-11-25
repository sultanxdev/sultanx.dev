'use client';

import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import AsciiPortrait from './AsciiPortrait';

export default function Hero() {
  const { name, heading, title, availability, status, avatar, bio, skills } =
    heroConfig;

  return (
    <Container className="pt-1 sm:pt-4">
      <div className="border-border/60 border-b pb-5 sm:pb-11">
        <div className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-x-3.5 gap-y-3.5 text-left sm:flex sm:flex-row sm:items-start sm:gap-8">
          {/* Left track on sm+ (Portrait + Actions); CSS contents on mobile for custom grid flow */}
          <div className="contents sm:flex sm:w-[196px] sm:shrink-0 sm:flex-col sm:gap-2">
            <AsciiPortrait
              src={avatar}
              alt={name}
              cellSize={3.4}
              sizes="(max-width: 639px) 88px, 196px"
              className="col-start-1 row-start-2 size-[88px] rounded-[14px] border-[1.5px] border-black/15 shadow-md sm:size-[196px] dark:border-white/15"
            />

            <div className="col-span-2 row-start-4 flex w-full flex-col items-stretch gap-2">
              <div
                aria-label="Social links"
                className="flex w-full items-center justify-between gap-1 rounded-lg border border-black/10 bg-black/[0.02] px-2.5 py-1.5 sm:px-2 dark:border-white/10 dark:bg-white/[0.03]"
              >
                {socialLinks.map((link) => (
                  <Tooltip key={link.name} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        target={
                          link.href.startsWith('mailto:') ? undefined : '_blank'
                        }
                        aria-label={link.name}
                        className="text-secondary hover:text-foreground inline-flex h-8 flex-1 items-center justify-center rounded-md transition-colors hover:bg-black/5 sm:h-7 dark:hover:bg-white/10"
                      >
                        <span className="block size-3.5">{link.icon}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              <Link
                href="/contact"
                className="bg-foreground text-background inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[0.85rem] font-semibold whitespace-nowrap transition-opacity hover:opacity-90 sm:px-3.5 sm:py-2"
              >
                <span>Get in touch</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right column on sm+; places Badge on row 1, Identity beside Portrait on row 2, Body on row 3 on mobile */}
          <div className="contents sm:flex sm:min-w-0 sm:flex-1 sm:flex-col sm:justify-start">
            <span className="col-span-2 row-start-1 mb-0 inline-flex items-center gap-1.5 justify-self-start rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-emerald-700 sm:mb-3 sm:self-start sm:px-3 dark:text-emerald-400">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              {availability}
            </span>

            <div className="col-start-2 row-start-2 flex min-w-0 flex-col items-start">
              <h1 className="text-foreground text-[clamp(1.38rem,5.5vw,1.72rem)] leading-[1.1] font-extrabold tracking-[-0.035em] sm:text-[2.45rem] sm:leading-[1.06]">
                {heading}
              </h1>

              <p className="text-secondary mt-1.5 flex flex-wrap items-center gap-1.5 text-[0.85rem] font-medium sm:mt-2 sm:gap-2 sm:text-[0.95rem]">
                <strong className="text-foreground font-semibold">
                  {title}
                </strong>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500/25 bg-green-500/10 px-2 py-0.5 text-[11px] font-semibold text-green-700 sm:text-xs dark:text-green-400">
                  <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
                  {status}
                </span>
              </p>
            </div>

            <div className="col-span-2 row-start-3 min-w-0 sm:mt-3.5">
              <p className="text-secondary text-[0.92rem] leading-[1.6] sm:text-[0.95rem] sm:leading-[1.65]">
                {bio}
              </p>

              <div className="mt-4 w-full sm:mt-4.5" aria-label="Core technologies">
                <p className="text-secondary text-xs font-bold tracking-wider uppercase">
                  Core Technologies
                </p>
                <div className="mt-2 flex flex-nowrap justify-start gap-1 overflow-x-auto [scrollbar-width:none] sm:flex-wrap sm:gap-1.5 sm:overflow-visible [&::-webkit-scrollbar]:hidden">
                  {skills.map((skill) => {
                    const SkillComponent =
                      skillComponents[
                        skill.component as keyof typeof skillComponents
                      ];
                    return (
                      <Link
                        key={skill.name}
                        href={skill.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skill-inner-shadow inline-flex shrink-0 items-center gap-1 rounded-md border border-black/10 bg-black/[0.02] px-1.5 py-1 text-[10.5px] font-semibold text-neutral-800 transition-transform duration-150 hover:-translate-y-0.5 sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-xs dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-200"
                      >
                        {SkillComponent && (
                          <span className="size-3 shrink-0 sm:size-3.5">
                            <SkillComponent />
                          </span>
                        )}
                        <span>{skill.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
