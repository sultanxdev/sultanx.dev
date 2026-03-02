'use client';

import { footerConfig } from '@/config/Footer';
import React from 'react';

import { TextHoverEffect } from '../ui/text-hover-effect';
import Container from './Container';
import { VisitorCounter } from './VisitorCounter';

export default function Footer() {
  return (
    <footer>
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

      {/* Large hover-effect text at the bottom */}
      <Container className="pb-8">
        <div className="relative h-[10rem] sm:h-[12rem] md:h-[16rem]">
          <div className="absolute inset-0 flex items-center justify-center">
            <TextHoverEffect text="SULTAN" duration={0.3} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
