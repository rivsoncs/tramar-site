import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { photos } from '@/lib/photo-manifest';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full"
      style={{ minHeight: '88vh' }}
    >
      {/* ── Mobile: imagem no topo, conteúdo abaixo ── */}
      <div className="lg:hidden">
        <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
          <Image
            src={photos.hero.url}
            alt={t('imageAlt') as string}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(26,31,38,0.15)' }}
            aria-hidden="true"
          />
        </div>

        <div className="bg-branco-cal px-6 pt-5 pb-6">
          <div className="mb-4 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand-assets/logos/tramar-muroalto-vertical.svg"
              alt="Tramar Muro Alto"
              style={{ height: '80px', width: 'auto' }}
            />
          </div>
          <h1
            id="hero-heading"
            className="font-display font-light text-tinta-grauna mb-5"
            style={{
              fontSize: 'clamp(38px, 8vw, 56px)',
              lineHeight: '0.93',
              letterSpacing: '-0.02em',
              fontVariationSettings: '"SOFT" 30, "opsz" 144',
            }}
          >
            {t('tagline')}
          </h1>
          <p
            className="font-body text-areia-molhada mb-5"
            style={{ fontSize: '16px', lineHeight: '1.65', letterSpacing: '0.006em' }}
          >
            {t('subtitle')}
          </p>
          <p
            className="overline text-areia-molhada mb-4 opacity-70"
            style={{ fontSize: '10px' }}
          >
            Makai Acqua Resort · Muro Alto · Pernambuco
          </p>
          <a href="#" className="btn-primary" aria-label={t('cta')}>
            {t('cta')}
          </a>
        </div>
      </div>

      {/* ── Desktop: split duas colunas ── */}
      <div className="hidden lg:flex w-full" style={{ minHeight: '88vh' }}>
        {/* Coluna esquerda — 55% — conteúdo editorial */}
        <div
          className="flex flex-col bg-branco-cal"
          style={{ width: '55%', padding: '80px' }}
        >
          {/* Logo vertical centralizado */}
          <div className="mb-auto pb-16 flex justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand-assets/logos/tramar-muroalto-vertical.svg"
              alt="Tramar Muro Alto"
              style={{ height: '96px', width: 'auto' }}
            />
          </div>

          {/* Separador editorial */}
          <div
            className="w-8 h-px mb-10"
            style={{ backgroundColor: 'rgba(26,31,38,0.2)' }}
            aria-hidden="true"
          />

          {/* Tagline + subtítulo + CTA */}
          <div className="mt-auto">
            <h1
              aria-hidden="true"
              className="font-display font-light text-tinta-grauna mb-6"
              style={{
                fontSize: 'clamp(56px, 5.6vw, 88px)',
                lineHeight: '0.93',
                letterSpacing: '-0.02em',
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
              }}
            >
              {t('tagline')}
            </h1>

            <p
              className="font-body text-areia-molhada mb-10 max-w-xs"
              style={{ fontSize: '16px', lineHeight: '1.65', letterSpacing: '0.006em' }}
            >
              {t('subtitle')}
            </p>

            <p
              className="overline text-areia-molhada mb-8 opacity-70"
              style={{ fontSize: '10px' }}
            >
              Makai Acqua Resort · Muro Alto · Pernambuco
            </p>

            <a href="#" className="btn-primary" aria-label={t('cta')}>
              {t('cta')}
            </a>
          </div>
        </div>

        {/* Coluna direita — 45% — foto */}
        <div
          className="relative overflow-hidden"
          style={{ width: '45%' }}
        >
          <Image
            src={photos.hero.url}
            alt={t('imageAlt') as string}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="45vw"
          />
          {/* Overlay tinta-graúna 40% */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(26,31,38,0.40)' }}
            aria-hidden="true"
          />
          {/* Pattern trama sutil */}
          <div
            className="absolute inset-0 pattern-trama-dark"
            style={{ opacity: 0.08 }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
