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
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 h-16"
      style={{
        background: scrolled ? 'rgba(240,233,220,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'background 300ms ease, backdrop-filter 300ms ease, transform 200ms ease',
      }}
    >
      {/* Logo — sempre positivo (texto escuro, fundo transparente)
          O layout split do hero tem coluna esquerda clara, logo nunca fica sobre fundo escuro */}
      <div style={{ flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand-assets/logos/tramar-muroalto-horizontal.svg"
          alt="Tramar Muro Alto"
          className="h-7 md:h-8 w-auto"
          style={{ display: 'block' }}
        />
      </div>

      <LanguageToggle variant="header" dark={!scrolled} />
    </header>
  );
}
