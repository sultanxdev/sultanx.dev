import { about, aboutSkills } from '@/config/About';
import { socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import AsciiPortrait from './AsciiPortrait';

export default function About() {
  return (
    <Container id="about" className="mt-6 scroll-mt-24 sm:mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-5 grid grid-cols-1 gap-y-3.5 md:mt-8 md:flex md:flex-row md:items-stretch md:gap-6">
        {/* Left column on md+: Animated Canvas2D ASCII Portrait + Quick Links */}
        <div className="contents md:flex md:w-60 md:shrink-0 md:flex-col md:gap-2.5">
          <AsciiPortrait
            src="/assets/logo.png"
            alt={about.name}
            sizes="(max-width: 767px) 100vw, 240px"
            className="col-start-1 row-start-1 h-auto w-full rounded-xl border-[1.5px] md:h-60 md:w-60 md:rounded-md md:border-2"
          />
          <div className="col-start-1 row-start-5 flex w-full items-center justify-between gap-2 rounded-lg border border-black/10 bg-black/[0.02] px-2.5 py-1.5 md:rounded-md md:px-2 md:py-1.5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-center gap-1">
              {socialLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target={
                        link.href.startsWith('mailto:') ? undefined : '_blank'
                      }
                      aria-label={link.name}
                      className="text-secondary hover:text-foreground inline-flex size-6 items-center justify-center rounded transition-colors hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-50"
                    >
                      <span className="size-3.5">{link.icon}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{link.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
            <Link
              href={about.websiteHref}
              target="_blank"
              className="border-border bg-background text-foreground md:text-secondary rounded-md border px-2.5 py-1 text-xs font-semibold whitespace-nowrap transition-colors hover:border-violet-500/45 hover:text-violet-600 md:rounded md:border-0 md:bg-transparent md:px-1.5 md:py-0.5 md:hover:bg-black/5 dark:text-zinc-200 dark:hover:bg-[#1f1f26] dark:hover:text-violet-400 dark:md:text-zinc-400 dark:md:hover:bg-white/10"
            >
              {about.websiteLabel} ↗
            </Link>
          </div>
        </div>

        {/* Right column on md+: Bio & Core Stack */}
        <div className="contents md:flex md:min-w-0 md:flex-1 md:flex-col md:justify-between md:gap-4">
          <div className="contents md:block">
            <div className="col-start-1 row-start-2 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                  {about.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500/25 bg-green-500/10 px-2 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400">
                  <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
                  {about.status}
                </span>
              </div>
              <p className="text-foreground/80 mt-1 flex flex-wrap items-baseline gap-x-1.5 text-sm font-semibold md:mt-0.5">
                <span>{about.role} at</span>
                <Link
                  href={about.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-company-link"
                >
                  <span>Parsona</span>
                  <span className="about-company-arrow" aria-hidden="true">
                    &#8599;
                  </span>
                </Link>
              </p>
            </div>

            <p className="text-secondary col-start-1 row-start-3 text-[0.93rem] leading-[1.6] md:mt-3 md:text-[0.95rem] md:leading-relaxed">
              {about.description.split('co-building').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="whitespace-nowrap">co-building</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="col-start-1 row-start-4 min-w-0">
            <p className="text-secondary text-xs font-bold tracking-wider uppercase">
              Core Stack
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {aboutSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`skill-inner-shadow ${
                    skill.name === 'Prisma' ? 'hidden md:inline-flex' : 'inline-flex'
                  } items-center gap-1.5 rounded-md border border-black/10 bg-black/[0.02] px-2.5 py-1 text-xs font-semibold text-neutral-800 transition-transform duration-150 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-200`}
                >
                  <span className="size-3.5 shrink-0">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
