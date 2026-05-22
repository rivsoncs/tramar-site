'use client';

import { useEffect, useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { CaruaSymbol, RendaSymbol, InteiraSymbol } from './SubBrandSymbols';

type StudioKey = 'carua' | 'renda' | 'inteira';

const studioConfig: Record<StudioKey, { brand: string; numeral: string }> = {
  carua:   { brand: '#3D2B1F', numeral: 'I'   },
  renda:   { brand: '#4A6B8A', numeral: 'II'  },
  inteira: { brand: '#1A1F26', numeral: 'III' },
};

export function BookingModal() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [visible,  setVisible]  = useState(false);
  const t  = useTranslations('booking');
  const tp = useTranslations('products');
  const ts = useTranslations('studios');

  const open = useCallback(() => {
    setIsOpen(true);
    // dois rAF garantem que o DOM montou antes de disparar a transição CSS
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setIsOpen(false), 220);
  }, []);

  useEffect(() => {
    const handler = () => open();
    window.addEventListener('open-booking', handler);
    return () => window.removeEventListener('open-booking', handler);
  }, [open]);

  // Fecha com Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    // Trava o scroll do body enquanto o modal está aberto
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const studios: StudioKey[] = ['carua', 'renda', 'inteira'];

  return (
    /* ── Backdrop ── */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(26,31,38,0.65)',
        backdropFilter: 'blur(4px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 200ms ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      {/* ── Cartão do modal ── */}
      <div
        className="w-full max-w-md overflow-hidden rounded-lg"
        style={{
          backgroundColor: '#FAF8F5',
          maxHeight: '90vh',
          overflowY: 'auto',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
          transition: 'transform 220ms cubic-bezier(0.2,0,0.2,1)',
          boxShadow: '0 24px 64px rgba(26,31,38,0.35)',
        }}
      >
        {/* Cabeçalho escuro */}
        <div
          className="flex justify-between items-start px-6 py-4 sticky top-0 z-10"
          style={{ backgroundColor: '#1A1F26' }}
        >
          <div>
            <h2
              id="booking-modal-title"
              className="font-display font-light"
              style={{ fontSize: '18px', letterSpacing: '0.04em', color: '#F0E9DC', lineHeight: 1.1 }}
            >
              {t('title')}
            </h2>
            <p
              className="font-body mt-1"
              style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,233,220,0.45)' }}
            >
              {t('subtitle')}
            </p>
          </div>
          <button
            onClick={close}
            aria-label={t('close')}
            style={{
              width: '32px', height: '32px', flexShrink: 0, marginLeft: '12px',
              background: 'rgba(240,233,220,0.08)', borderRadius: '50%',
              border: 'none', cursor: 'pointer', color: 'rgba(240,233,220,0.65)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5">

          {/* ── Banner "Em breve" ── */}
          <div
            className="flex items-start gap-3 rounded px-4 py-3 mb-5"
            style={{ backgroundColor: 'rgba(196,154,107,0.10)', border: '1px solid rgba(196,154,107,0.28)' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C49A6B" strokeWidth="1.6" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '2px' }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <circle cx="12" cy="16" r="0.6" fill="#C49A6B" />
            </svg>
            <div>
              <p
                className="font-body mb-1"
                style={{ fontSize: '9.5px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C49A6B', fontWeight: 500 }}
              >
                {t('comingSoon')}
              </p>
              <p
                className="font-body"
                style={{ fontSize: '12px', lineHeight: '1.68', color: 'rgba(26,31,38,0.70)' }}
              >
                {t('comingSoonText')}
              </p>
            </div>
          </div>

          {/* ── Linhas de estúdio ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {studios.map((key) => {
              const cfg = studioConfig[key];
              return (
                <div
                  key={key}
                  className="flex items-center justify-between gap-3 rounded px-4 py-3"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid rgba(168,156,138,0.20)',
                    borderLeft: `3px solid ${cfg.brand}`,
                  }}
                >
                  {/* Símbolo + texto */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div style={{ flexShrink: 0, opacity: 0.65 }}>
                      {key === 'carua'   && <CaruaSymbol   className="w-8 h-8" strokeColor={cfg.brand} />}
                      {key === 'renda'   && <RendaSymbol   className="w-8 h-8" strokeColor={cfg.brand} />}
                      {key === 'inteira' && <InteiraSymbol className="w-8 h-8" strokeColor={cfg.brand} />}
                    </div>
                    <div className="min-w-0">
                      <p
                        className="font-body"
                        style={{ fontSize: '8px', letterSpacing: '0.16em', textTransform: 'uppercase', color: cfg.brand, opacity: 0.55, marginBottom: '2px' }}
                      >
                        Studio {cfg.numeral}
                      </p>
                      <p
                        className="font-display font-light truncate"
                        style={{ fontSize: '15px', color: cfg.brand, lineHeight: 1.1 }}
                      >
                        {tp(`${key}.name` as Parameters<typeof tp>[0])}
                      </p>
                      <p
                        className="font-body mt-0.5"
                        style={{ fontSize: '10px', color: 'rgba(26,31,38,0.45)' }}
                      >
                        {ts(`${key}.guests` as Parameters<typeof ts>[0])}
                      </p>
                    </div>
                  </div>

                  {/* Chip "Datas indisponíveis" */}
                  <span
                    className="font-body flex-shrink-0"
                    style={{
                      fontSize: '8px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'rgba(26,31,38,0.38)',
                      border: '1px solid rgba(26,31,38,0.14)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('datesUnavailable')}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── Rodapé: notificação ── */}
          <div
            className="mt-5 pt-5"
            style={{ borderTop: '1px solid rgba(26,31,38,0.08)' }}
          >
            <p
              className="font-body mb-1"
              style={{ fontSize: '12px', fontWeight: 500, color: '#1A1F26' }}
            >
              {t('notifyTitle')}
            </p>
            <p
              className="font-body mb-4"
              style={{ fontSize: '11.5px', lineHeight: '1.65', color: 'rgba(26,31,38,0.58)' }}
            >
              {t('notifyText')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/tramar.muroalto/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body flex items-center justify-center gap-2"
                style={{
                  padding: '11px 16px',
                  backgroundColor: '#1A1F26',
                  color: '#F0E9DC',
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  fontWeight: 500,
                  transition: 'background-color 200ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3D2B1F')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1A1F26')}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
                {t('instagramCta')}
              </a>

              {/* E-mail */}
              <a
                href="mailto:contato@tramarmuroalto.com.br"
                className="font-body flex items-center justify-center gap-2"
                style={{
                  padding: '11px 16px',
                  backgroundColor: 'transparent',
                  color: '#1A1F26',
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  border: '1px solid rgba(26,31,38,0.22)',
                  fontWeight: 500,
                  transition: 'border-color 200ms, background-color 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(26,31,38,0.6)'; e.currentTarget.style.backgroundColor = 'rgba(26,31,38,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,31,38,0.22)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                {t('emailCta')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
