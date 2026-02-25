'use client';

import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import React, { useState } from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container className="sticky top-4 z-50 rounded-full border border-white/10 bg-background/40 py-2 shadow-lg backdrop-blur-md !max-w-[702px]">
        <div className="flex items-center justify-between px-4">
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="text-sm font-medium transition-all duration-300 ease-in-out hover:text-primary hover:underline hover:decoration-2 hover:underline-offset-4"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>

          {/* Right side: X DM button + Theme toggle */}
          <div className="flex items-center gap-4 pl-4 md:pl-6">
            <a
              href="https://x.com/sultanxdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 size-10 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-accent hover:text-accent-foreground active:scale-95"
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
            <div className="h-5 w-px bg-white/10" />
            <ThemeToggleButton variant="circle" start="top-right" blur />
          </div>
        </div>
      </Container>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-[702px] md:hidden">
          <div className="rounded-2xl border border-white/10 bg-background/80 p-4 shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-3">
              {navbarConfig.navItems.map((item) => (
                <Link
                  className="text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-foreground/10 hover:text-primary"
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
