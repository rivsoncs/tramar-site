import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

export function Location() {
  const t = useTranslations('location');

  return (
    <section
      aria-labelledby="location-heading"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#1A1F26' }}
    >
      {/* Padrão rede como visual de fundo */}
      <div className="absolute inset-0 pattern-rede-dark pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <FadeIn>
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
            className="font-display font-light max-w-lg"
            style={{
              color: '#F0E9DC',
              fontSize: 'clamp(18px, 2vw, 24px)',
              lineHeight: '1.5',
              letterSpacing: '0.004em',
            }}
          >
            {t('text')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
