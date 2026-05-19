'use client';

import { useEffect, useState } from 'react';
import { BrandLogoReduzida } from './BrandLogo';
import { LanguageToggle } from './LanguageToggle';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY) {
          // scrolling down
          setHidden(true);
        } else {
          // scrolling up
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 h-16 transition-transform duration-200"
      style={{
        backdropFilter: scrolled ? 'blur(4px)' : 'none',
        background: scrolled
          ? 'rgba(240,233,220,0.92)'
          : 'transparent',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      {/* Logo reduzida à esquerda */}
      <div style={{ width: '80px', flexShrink: 0 }}>
        <BrandLogoReduzida
          color="#1A1F26"
          className="w-full h-auto"
        />
      </div>

      <LanguageToggle variant="header" />
    </header>
  );
}
