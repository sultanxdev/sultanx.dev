'use client';

import { footerConfig } from '@/config/Footer';
import React from 'react';

import { TextHoverEffect } from '../ui/text-hover-effect';
import Container from './Container';
import { VisitorCounter } from './VisitorCounter';

export default function Footer() {
  return (
    <footer className="mb-0 pb-0">
      <Container className="py-16">
        {/* Visitor counter */}
        <div className="mb-8">
          <VisitorCounter />
        </div>

        <div className="border-border border-t pt-10">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p className="text-muted-foreground text-xs">
              {footerConfig.text}{' '}
              <strong className="text-foreground font-medium">
                {footerConfig.developer}
              </strong>
            </p>
            <div className="text-muted-foreground/50 flex items-center gap-5 text-xs">
              {footerConfig.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={
                    link.href.startsWith('mailto')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <span>
                &copy; {new Date().getFullYear()}. {footerConfig.copyright}
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Large hover-effect text constrained to container with zero bottom gap */}
      <Container className="pb-0 mb-0">
        <div className="w-full flex items-end justify-center select-none overflow-hidden -mb-1">
          <TextHoverEffect text="SULTAN" duration={0.5} />
        </div>
      </Container>
    </footer>
  );
}
