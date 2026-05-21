'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CaruaSymbol, RendaSymbol, InteiraSymbol } from './SubBrandSymbols';

type StudioKey = 'carua' | 'renda' | 'inteira';

const studioConfig = {
  carua: {
    bgSelected:   '#3D2B1F',
    bgUnselected: '#FAF8F5',
    textSelected: '#F0E9DC',
    textUnselected:'#3D2B1F',
    borderSelected:'#3D2B1F',
    symbolStroke:  '#C49A6B',
    btnBg:        'bg-[#3D2B1F] text-[#F0E9DC] hover:bg-[#2C1E16]',
    accentBar:    '#C49A6B',
  },
  renda: {
    bgSelected:   '#4A6B8A',
    bgUnselected: '#FAF8F5',
    textSelected: '#F0E9DC',
    textUnselected:'#4A6B8A',
    borderSelected:'#4A6B8A',
    symbolStroke:  '#F0E9DC',
    btnBg:        'bg-[#4A6B8A] text-[#F0E9DC] hover:bg-[#344E66]',
    accentBar:    '#4A6B8A',
  },
  inteira: {
    bgSelected:   '#1A1F26',
    bgUnselected: '#FAF8F5',
    textSelected: '#F0E9DC',
    textUnselected:'#1A1F26',
    borderSelected:'#1A1F26',
    symbolStroke:  '#F0E9DC',
    btnBg:        'bg-[#F0E9DC] text-[#1A1F26] hover:bg-[#E2D8C5]',
    accentBar:    '#F0E9DC',
  },
};

const airbnbLinks: Record<StudioKey, string> = {
  carua:   'https://www.airbnb.com',
  renda:   'https://www.airbnb.com',
  inteira: 'https://www.airbnb.com',
};

export function StudiosSection() {
  const t = useTranslations('studios');
  const tp = useTranslations('products');
  const [selected, setSelected] = useState<StudioKey>('carua');

  const studios: StudioKey[] = ['carua', 'renda', 'inteira'];

  return (
    <section
      id="estudio-selector"
      aria-labelledby="studios-heading"
      className="py-20 md:py-24 px-6 md:px-12 lg:px-16 bg-branco-cal"
    >
      {/* Cabeçalho */}
      <div className="max-w-xl mx-auto text-center mb-12 space-y-3">
        <span
          className="overline text-areia-molhada block"
          aria-hidden="true"
        >
          {t('sectionLabel')}
        </span>
        <h2
          id="studios-heading"
          className="font-display font-light text-tinta-grauna"
          style={{
            fontSize: 'clamp(24px, 2.8vw, 38px)',
            letterSpacing: '-0.01em',
            lineHeight: '1.06',
            fontStyle: 'italic',
          }}
        >
          {t('title')}
        </h2>
        <p
          className="font-body text-areia-molhada mx-auto"
          style={{ fontSize: '13px', lineHeight: '1.65', maxWidth: '420px' }}
        >
          {t('subtitle')}
        </p>
      </div>

      {/* Cards interativos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {studios.map((key) => {
          const cfg = studioConfig[key];
          const isSelected = selected === key;

          return (
            <button
              key={key}
              onClick={() => setSelected(key)}
              aria-pressed={isSelected}
              aria-label={tp(`${key}.name` as Parameters<typeof tp>[0])}
              className="text-left rounded-sm transition-all duration-300 flex flex-col justify-between focus-visible:outline-offset-4"
              style={{
                backgroundColor: isSelected ? cfg.bgSelected : cfg.bgUnselected,
                color: isSelected ? cfg.textSelected : cfg.textUnselected,
                border: `1px solid ${isSelected ? cfg.borderSelected : '#A89C8A33'}`,
                transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                boxShadow: isSelected
                  ? '0 1px 2px rgba(26,31,38,0.06), 0 12px 24px rgba(26,31,38,0.14)'
                  : '0 1px 2px rgba(26,31,38,0.04)',
              }}
            >
              {/* Faixa de acento superior */}
              <div
                className="h-0.5 w-full rounded-t-sm"
                style={{
                  backgroundColor: isSelected ? cfg.accentBar : 'transparent',
                  opacity: isSelected ? 0.8 : 0,
                  transition: 'opacity 300ms',
                }}
                aria-hidden="true"
              />

              <div className="p-7 flex flex-col gap-6 flex-1">
                {/* Símbolo + badge */}
                <div className="flex justify-between items-start">
                  {key === 'carua'   && <CaruaSymbol   className="w-10 h-10" strokeColor={isSelected ? cfg.symbolStroke : cfg.borderSelected} />}
                  {key === 'renda'   && <RendaSymbol   className="w-10 h-10" strokeColor={isSelected ? cfg.symbolStroke : cfg.borderSelected} />}
                  {key === 'inteira' && <InteiraSymbol className="w-10 h-10" strokeColor={isSelected ? cfg.symbolStroke : cfg.borderSelected} />}

                  <span
                    className="text-[8.5px] font-body font-medium uppercase tracking-widest mt-0.5"
                    style={{ opacity: 0.5 }}
                  >
                    {t(`${key}.guests` as Parameters<typeof t>[0])}
                  </span>
                </div>

                {/* Nome + badge de estúdio */}
                <div className="space-y-1">
                  <p
                    className="font-body"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      opacity: 0.55,
                    }}
                  >
                    {t(`${key}.badge` as Parameters<typeof t>[0])}
                  </p>
                  <h3
                    className="font-display font-light"
                    style={{
                      fontSize: 'clamp(20px, 2vw, 26px)',
                      lineHeight: '1.06',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tp(`${key}.name` as Parameters<typeof tp>[0])}
                  </h3>
                </div>

                {/* Tagline */}
                <p
                  className="font-body flex-1"
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.7',
                    opacity: 0.82,
                  }}
                >
                  {tp(`${key}.tagline` as Parameters<typeof tp>[0])}
                </p>

                {/* Detalhes de ofício */}
                <div
                  className="space-y-1 pt-4"
                  style={{ borderTop: `1px solid ${isSelected ? 'rgba(255,255,255,0.14)' : 'rgba(26,31,38,0.08)'}` }}
                >
                  <p
                    className="font-body"
                    style={{
                      fontSize: '8.5px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      opacity: 0.45,
                    }}
                  >
                    {t('craftLabel')}
                  </p>
                  <p
                    className="font-body"
                    style={{ fontSize: '11px', lineHeight: '1.65', fontStyle: 'italic', opacity: 0.78 }}
                  >
                    {t(`${key}.details` as Parameters<typeof t>[0])}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <a
                  href={airbnbLinks[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`block w-full py-3 text-center rounded-sm font-body font-medium transition-colors duration-200 ${cfg.btnBg}`}
                  style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
                  aria-label={`${t('cta')} — ${tp(`${key}.name` as Parameters<typeof tp>[0])}`}
                >
                  {t('cta')}
                </a>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
