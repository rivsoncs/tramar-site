import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { photos } from '@/lib/photo-manifest';
import { FadeIn } from './FadeIn';

export function Makai() {
  const t = useTranslations('makai');

  const features = [
    t('feature1'),
    t('feature2'),
    t('feature3'),
    t('feature4'),
    t('feature5'),
    t('feature6'),
  ] as string[];

  return (
    <section
      aria-labelledby="makai-heading"
      style={{ backgroundColor: '#E6DECF' }}
    >
      {/* Imagem do resort — full-width, proporção panorâmica */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>
        <Image
          src={photos.resort.aerial.url}
          alt={photos.resort.aerial.alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
      </div>

      <div className="px-6 md:px-12 lg:px-16 py-7 md:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
          {/* Texto */}
          <div className="flex-1 max-w-xl mb-5 lg:mb-0">
            <FadeIn>
              <span className="overline text-areia-molhada block mb-4">
                {t('sectionLabel')}
              </span>
              <h2
                id="makai-heading"
                className="font-display font-light text-tinta-grauna mb-5"
                style={{
                  fontSize: 'clamp(28px, 3.2vw, 48px)',
                  letterSpacing: '-0.012em',
                  lineHeight: '1.02',
                  fontVariationSettings: '"SOFT" 30, "opsz" 144',
                }}
              >
                {t('title')}
              </h2>
              <p
                className="font-body text-tinta-grauna"
                style={{ fontSize: '16px', lineHeight: '1.7', opacity: 0.7 }}
              >
                {t('text')}
              </p>
            </FadeIn>
          </div>

          {/* Features */}
          <div className="w-full lg:w-[42%] flex-shrink-0">
            <FadeIn delay={80}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className="w-5 h-px flex-shrink-0"
                      style={{ backgroundColor: 'rgba(26,31,38,0.25)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-body uppercase"
                      style={{
                        color: '#1A1F26',
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        opacity: 0.65,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
