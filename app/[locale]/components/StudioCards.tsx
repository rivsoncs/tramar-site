'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { CaruaSymbol, RendaSymbol, InteiraSymbol } from './SubBrandSymbols';
import { photos } from '@/lib/photo-manifest';

type StudioKey = 'carua' | 'renda' | 'inteira';

const config = {
  carua: {
    brand:          '#3D2B1F',
    accent:         '#C49A6B',
    symbolStroke:   '#C49A6B',
    overlaySelected:'rgba(61,43,31,0.72)',
    overlayIdle:    'rgba(61,43,31,0.48)',
    patternClass:   'pattern-trama-dark',
    numeral:        'I',
  },
  renda: {
    brand:          '#4A6B8A',
    accent:         '#F0E9DC',
    symbolStroke:   '#F0E9DC',
    overlaySelected:'rgba(74,107,138,0.75)',
    overlayIdle:    'rgba(74,107,138,0.50)',
    patternClass:   'pattern-renda-dark',
    numeral:        'II',
  },
  inteira: {
    brand:          '#1A1F26',
    accent:         '#C49A6B',
    symbolStroke:   '#F0E9DC',
    overlaySelected:'rgba(26,31,38,0.80)',
    overlayIdle:    'rgba(26,31,38,0.55)',
    patternClass:   'pattern-rede-dark',
    numeral:        'III',
  },
};

const imageMap: Record<StudioKey, { url: string; alt: string }> = {
  carua:   photos.flats.carua.interior,
  renda:   photos.flats.renda.interior,
  inteira: { url: photos.resort.areaExterna.url, alt: photos.resort.areaExterna.alt },
};

export function StudioCards() {
  const t  = useTranslations('products');
  const ts = useTranslations('studios');
  const [selected, setSelected] = useState<StudioKey | null>(null);

  const studios: StudioKey[] = ['carua', 'renda', 'inteira'];

  return (
    <section id="studios" aria-labelledby="studio-cards-heading" className="bg-branco-cal">

      {/* Cabeçalho */}
      <div className="px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12">
        <span className="overline text-areia-molhada block mb-4">
          {t('sectionLabel')}
        </span>
        <h2
          id="studio-cards-heading"
          className="font-display font-light text-tinta-grauna"
          style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.012em', lineHeight: '1.02', fontVariationSettings: '"SOFT" 30, "opsz" 144' }}
        >
          {t('title')}
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {studios.map((key) => {
          const cfg  = config[key];
          const img  = imageMap[key];
          const isSel = selected === key;

          return (
            <article
              key={key}
              className="flex flex-col cursor-pointer group"
              style={{ minHeight: '560px', backgroundColor: isSel ? cfg.brand : '#F0E9DC' }}
              onClick={() => setSelected(isSel ? null : key)}
              aria-label={t(`${key}.name` as Parameters<typeof t>[0])}
              role="button"
              aria-pressed={isSel}
            >
              {/* ── Zona de foto ── */}
              <div className="relative overflow-hidden flex-shrink-0" style={{ height: '240px' }}>

                {/* Foto */}
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="img-tramar"
                  style={{ objectFit: 'cover', transition: 'transform 600ms cubic-bezier(0.2,0,0.2,1)' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay cor de assinatura */}
                <div
                  className="absolute inset-0 transition-colors duration-300"
                  style={{ backgroundColor: isSel ? cfg.overlaySelected : cfg.overlayIdle }}
                  aria-hidden="true"
                />

                {/* Padrão têxtil */}
                <div
                  className={`absolute inset-0 ${cfg.patternClass} pointer-events-none`}
                  aria-hidden="true"
                />

                {/* Símbolo SVG central */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-2">
                  <div
                    style={{
                      opacity: isSel ? 0.92 : 0.70,
                      transform: isSel ? 'scale(1.08)' : 'scale(1)',
                      transition: 'opacity 300ms, transform 300ms',
                    }}
                  >
                    {key === 'carua'   && <CaruaSymbol   className="w-14 h-14" strokeColor={cfg.symbolStroke} />}
                    {key === 'renda'   && <RendaSymbol   className="w-14 h-14" strokeColor={cfg.symbolStroke} />}
                    {key === 'inteira' && <InteiraSymbol className="w-14 h-14" strokeColor={cfg.symbolStroke} />}
                  </div>
                  {/* T R A M A R micro-overline sobre foto */}
                  <span
                    className="font-body font-medium"
                    style={{
                      fontSize: '8px',
                      letterSpacing: '0.4em',
                      textTransform: 'uppercase',
                      color: '#F0E9DC',
                      opacity: isSel ? 0.80 : 0.55,
                      transition: 'opacity 300ms',
                    }}
                  >
                    T R A M A R
                  </span>
                </div>

                {/* Barra de acento no rodapé da foto */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{
                    backgroundColor: cfg.accent,
                    opacity: isSel ? 0.9 : 0.4,
                    transition: 'opacity 300ms',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* ── Corpo do card ── */}
              <div
                className={`relative flex flex-col flex-1 overflow-hidden transition-colors duration-300`}
                style={{ backgroundColor: isSel ? cfg.brand : '#F0E9DC' }}
              >
                {/* Padrão sutil no corpo quando selecionado */}
                {isSel && (
                  <div
                    className={`absolute inset-0 ${cfg.patternClass} pointer-events-none`}
                    style={{ opacity: 0.4 }}
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 flex flex-col flex-1 px-8 pt-7 pb-10 md:px-10">

                  {/* Numeral editorial */}
                  <p
                    className="font-body mb-4"
                    style={{
                      color: isSel ? cfg.accent : cfg.brand,
                      fontSize: '10px',
                      letterSpacing: '0.28em',
                      opacity: isSel ? 0.6 : 0.4,
                      textTransform: 'uppercase',
                    }}
                  >
                    {cfg.numeral}
                  </p>

                  {/* Badge de sub-marca */}
                  <p
                    className="font-body mb-1"
                    style={{
                      fontSize: '8.5px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: isSel ? cfg.accent : cfg.brand,
                      opacity: 0.65,
                    }}
                  >
                    {ts(`${key}.badge` as Parameters<typeof ts>[0])}
                  </p>

                  {/* Nome do estúdio */}
                  <h3
                    className="font-display font-light mb-5"
                    style={{
                      fontSize: 'clamp(22px, 2vw, 28px)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.04',
                      color: isSel ? '#F0E9DC' : cfg.brand,
                    }}
                  >
                    {t(`${key}.name` as Parameters<typeof t>[0])}
                  </h3>

                  {/* Traço separador */}
                  <div
                    className="w-8 h-px mb-5"
                    style={{ backgroundColor: isSel ? cfg.accent : cfg.brand, opacity: 0.3 }}
                    aria-hidden="true"
                  />

                  {/* Tagline */}
                  <p
                    className="font-body flex-1 mb-5"
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.7',
                      color: isSel ? '#F0E9DC' : cfg.brand,
                      opacity: isSel ? 0.82 : 0.78,
                      maxWidth: '260px',
                    }}
                  >
                    {t(`${key}.tagline` as Parameters<typeof t>[0])}
                  </p>

                  {/* Detalhes de ofício — visíveis sempre, mais proeminentes quando selecionado */}
                  <div
                    className="mb-6"
                    style={{
                      borderTop: `1px solid ${isSel ? 'rgba(255,255,255,0.12)' : `${cfg.brand}22`}`,
                      paddingTop: '16px',
                    }}
                  >
                    <p
                      className="font-body mb-1"
                      style={{
                        fontSize: '8px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: isSel ? cfg.accent : cfg.brand,
                        opacity: 0.50,
                      }}
                    >
                      {ts('craftLabel')}
                    </p>
                    <p
                      className="font-body"
                      style={{
                        fontSize: '11px',
                        lineHeight: '1.65',
                        fontStyle: 'italic',
                        color: isSel ? '#F0E9DC' : cfg.brand,
                        opacity: isSel ? 0.75 : 0.60,
                      }}
                    >
                      {ts(`${key}.details` as Parameters<typeof ts>[0])}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.dispatchEvent(new CustomEvent('open-booking'));
                    }}
                    className="self-start"
                    style={{
                      padding: '10px 24px',
                      fontSize: '10px',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      color: isSel ? cfg.brand : '#F0E9DC',
                      backgroundColor: isSel ? cfg.accent : cfg.brand,
                      border: 'none',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      transition: 'opacity 200ms',
                    }}
                    aria-label={`${ts('cta')} — ${t(`${key}.name` as Parameters<typeof t>[0])}`}
                  >
                    {ts('cta')}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
