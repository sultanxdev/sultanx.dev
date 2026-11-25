'use client';

import { navbarConfig } from '@/config/Navbar';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="container mx-auto max-w-3xl px-4">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between rounded-xl border border-border/80 bg-background/85 px-4 py-2 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-background/75 dark:border-white/10 dark:bg-background/80"
        >
          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 md:flex">
            {navbarConfig.navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-200',
                    active
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 rounded-md focus:outline-none md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>

          {/* Right side: X DM button + Theme toggle */}
          <div className="flex items-center gap-3 pl-4 md:pl-6">
            <a
              href="https://x.com/sultanxdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent/70 hover:text-foreground active:scale-95"
              aria-label="DM me on X"
            >
              <span className="text-xs font-bold">DM</span>
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <div className="h-5 w-px bg-border" />
            <ThemeToggleButton variant="circle" start="top-right" blur />
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="mt-2 md:hidden">
            <div className="rounded-xl border border-border/80 bg-background/95 p-3 shadow-xl backdrop-blur-xl dark:border-white/10">
              <div className="flex flex-col gap-1">
                {navbarConfig.navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
                        active
                          ? 'bg-accent text-foreground'
                          : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
