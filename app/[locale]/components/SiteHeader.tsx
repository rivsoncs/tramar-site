'use client';

import { useEffect, useRef, useState } from 'react';
import { LanguageToggle } from './LanguageToggle';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prev = lastScrollYRef.current;

      if (currentScrollY < 40) {
        setScrolled(false);
        setHidden(false);
      } else {
        setScrolled(true);
        if (currentScrollY > 100) {
          setHidden(currentScrollY > prev);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8"
      style={{
        height: '64px',
        background: scrolled ? 'rgba(240,233,220,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'background 300ms ease, backdrop-filter 300ms ease, transform 200ms ease',
      }}
    >
      {/* Wordmark — T itálico em Fraunces, subtítulo em DM Sans */}
      <div style={{ flexShrink: 0, lineHeight: 1 }}>
        <div
          className="font-display font-light"
          style={{
            fontSize: '22px',
            letterSpacing: '0.10em',
            color: '#1A1F26',
            lineHeight: 1,
          }}
          aria-label="Tramar Muro Alto"
        >
          <em style={{ fontStyle: 'italic', marginRight: '1px' }}>T</em>ramar
        </div>
        <div
          className="font-body"
          style={{
            fontSize: '7.5px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: '#1A1F26',
            opacity: 0.55,
            marginTop: '3px',
          }}
        >
          muro alto · pe
        </div>
      </div>

      <LanguageToggle variant="header" dark={!scrolled} />
    </header>
  );
}
