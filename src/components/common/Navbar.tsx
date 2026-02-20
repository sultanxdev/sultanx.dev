import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';

import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-4 z-50 rounded-full border border-white/10 bg-background/40 py-2 shadow-lg backdrop-blur-md !max-w-[702px]">
      <div className="flex items-center justify-between gap-12 px-4">
        <div className="flex items-center gap-6">
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
        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
