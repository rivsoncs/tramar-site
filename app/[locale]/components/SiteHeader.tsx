'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const t = useTranslations('nav');
  const ta = useTranslations();

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

  const navLinks = [
    { href: '#studios',   label: t('studios')   },
    { href: '#resort',    label: t('resort')     },
    { href: '#amenities', label: t('amenities')  },
    { href: '#faq',       label: t('faq')        },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 200ms ease',
      }}
    >
      {/* ── Faixa editorial — some com scroll ── */}
      <div
        aria-hidden="true"
        style={{
          backgroundColor: '#1A1F26',
          overflow: 'hidden',
          maxHeight: scrolled ? 0 : '30px',
          opacity: scrolled ? 0 : 1,
          transition: 'max-height 300ms ease, opacity 200ms ease',
        }}
      >
        <p
          className="font-body text-center"
          style={{
            fontSize: '8px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#F0E9DC',
            opacity: 0.72,
            padding: '7px 24px',
          }}
        >
          {ta('announcement')}
        </p>
      </div>

      {/* ── Linha principal ── */}
      <div
        className="flex justify-between items-center px-6 md:px-8"
        style={{
          height: '64px',
          background: scrolled ? 'rgba(240,233,220,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'background 300ms ease, backdrop-filter 300ms ease',
        }}
      >
        {/* Wordmark */}
        <div style={{ flexShrink: 0, lineHeight: 1 }}>
          <div
            className="font-display font-light"
            style={{ fontSize: '22px', letterSpacing: '0.10em', color: '#1A1F26', lineHeight: 1 }}
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

        {/* Navegação — apenas desktop */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-body"
              style={{
                fontSize: '9px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1A1F26',
                opacity: 0.60,
                textDecoration: 'none',
                transition: 'opacity 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.60')}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Direita: botão Reservar + PT/EN */}
        <div className="flex items-center gap-3">
          <button
            className="hidden md:inline-block font-body"
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            style={{
              fontSize: '9px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: '#F0E9DC',
              backgroundColor: '#1A1F26',
              padding: '8px 18px',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3D2B1F')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1A1F26')}
          >
            {t('reservar')}
          </button>
          <LanguageToggle variant="header" dark={!scrolled} />
        </div>
      </div>
    </header>
  );
}
