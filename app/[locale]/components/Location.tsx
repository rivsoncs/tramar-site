import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { photos } from '@/lib/photo-manifest';

export function Location() {
  const t = useTranslations('location');

  const mapsHref = 'https://maps.google.com/?q=Makai+Acqua+Resort+Muro+Alto+Pernambuco';

  return (
    <section
      aria-labelledby="location-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#3D4836' }}
    >
      {/* Padrão rede como visual de fundo */}
      <div className="absolute inset-0 pattern-rede-dark pointer-events-none" aria-hidden="true" />

      {/* Mobile: stack vertical */}
      <div className="lg:hidden relative z-10 px-6 py-16">
        <FadeIn>
          <LocationContent t={t} />
          {/* Botão Google Maps */}
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body block text-center w-full py-4 mt-10 uppercase transition-colors duration-200"
            style={{
              color: '#F0E9DC',
              border: '1px solid rgba(240,233,220,0.5)',
              fontSize: '13px',
              letterSpacing: '0.1em',
            }}
          >
            {t('mapsLabel')}
          </a>

          {/* Porto de Galinhas — mobile */}
          <PortoDeGalinhas t={t} />
        </FadeIn>
      </div>

      {/* Desktop: duas colunas */}
      <div className="hidden lg:block relative z-10" style={{ padding: '96px 80px' }}>
        <div className="flex">
          {/* Coluna esquerda — 55% */}
          <div style={{ width: '55%', paddingRight: '80px' }}>
            <FadeIn>
              <LocationContent t={t} />
            </FadeIn>
          </div>

          {/* Coluna direita — 45% — botão Maps */}
          <div className="flex items-start justify-center" style={{ width: '45%', paddingTop: '72px' }}>
            <FadeIn>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-block uppercase transition-colors duration-200"
                style={{
                  color: '#F0E9DC',
                  border: '1px solid rgba(240,233,220,0.5)',
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  padding: '20px 40px',
                }}
              >
                {t('mapsLabel')}
              </a>
            </FadeIn>
          </div>
        </div>

        {/* Porto de Galinhas — desktop, largura completa abaixo das colunas */}
        <PortoDeGalinhas t={t} />
      </div>
    </section>
  );
}

function LocationContent({ t }: { t: ReturnType<typeof useTranslations<'location'>> }) {
  return (
    <>
      <span className="overline block mb-6" style={{ color: '#F0E9DC', opacity: 0.65 }}>
        {t('sectionLabel')}
      </span>
      <h2
        id="location-heading"
        className="font-display font-light mb-6 max-w-xl"
        style={{
          color: '#F0E9DC',
          fontSize: 'clamp(28px, 3.2vw, 48px)',
          letterSpacing: '-0.012em',
          lineHeight: '1.02',
          fontVariationSettings: '"SOFT" 30, "opsz" 144',
        }}
      >
        {t('title')}
      </h2>
      <p
        className="font-body max-w-lg mb-10"
        style={{
          color: '#F0E9DC',
          fontSize: 'clamp(16px, 1.8vw, 18px)',
          lineHeight: '1.65',
        }}
      >
        {t('text')}
      </p>

      {/* Pills informativos */}
      <div className="flex flex-col gap-3">
        {(['pill1', 'pill2'] as const).map((pill) => (
          <div key={pill} className="flex items-center gap-3">
            <div
              className="w-6 h-px flex-shrink-0"
              style={{ backgroundColor: 'rgba(240,233,220,0.4)' }}
              aria-hidden="true"
            />
            <span
              className="font-body uppercase"
              style={{ color: '#F0E9DC', fontSize: '11px', letterSpacing: '0.2em', opacity: 0.75 }}
            >
              {t(pill)}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function PortoDeGalinhas({ t }: { t: ReturnType<typeof useTranslations<'location'>> }) {
  return (
    <div className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(240,233,220,0.15)' }}>
      <FadeIn>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Texto */}
          <div className="flex-1">
            <h3
              className="font-display font-light mb-5"
              style={{
                color: '#F0E9DC',
                fontSize: 'clamp(22px, 2.4vw, 32px)',
                letterSpacing: '-0.01em',
                lineHeight: '1.05',
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
              }}
            >
              {t('pdgTitle')}
            </h3>
            <p
              className="font-body"
              style={{
                color: '#F0E9DC',
                fontSize: 'clamp(15px, 1.6vw, 17px)',
                lineHeight: '1.7',
                opacity: 0.85,
                maxWidth: '52ch',
              }}
            >
              {t('pdgText')}
            </p>
          </div>

          {/* Foto 16:9 */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <Image
                src={photos.portodeGalinhas.praia.url}
                alt={photos.portodeGalinhas.praia.alt}
                fill
                loading="lazy"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <p
              className="font-body mt-2"
              style={{ color: '#F0E9DC', fontSize: '11px', opacity: 0.45, letterSpacing: '0.04em' }}
            >
              {t('pdgCaption')}
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
