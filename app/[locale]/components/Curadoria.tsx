import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FadeIn } from './FadeIn';

const CURADORIA_IMAGE_URL =
  'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=85&fit=crop';

export function Curadoria() {
  const t = useTranslations('curadoria');

  return (
    <section
      aria-labelledby="curadoria-heading"
      style={{ backgroundColor: '#1A1F26' }}
    >
      {/* Mobile: imagem acima, texto abaixo */}
      <div className="lg:hidden">
        <div
          className="relative w-full"
          style={{ aspectRatio: '4/3' }}
        >
          <Image
            src={CURADORIA_IMAGE_URL}
            alt={t('imageAlt') as string}
            fill
            loading="lazy"
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(26,31,38,0.2)' }}
            aria-hidden="true"
          />
        </div>

        <div className="px-6 py-10">
          <FadeIn>
            <span
              className="overline block mb-4"
              style={{ color: '#A89C8A', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase' }}
            >
              {t('sectionLabel')}
            </span>
            <h2
              id="curadoria-heading"
              className="font-display font-light mb-6"
              style={{
                color: '#F0E9DC',
                fontSize: 'clamp(28px, 4vw, 40px)',
                lineHeight: '1.05',
                letterSpacing: '-0.012em',
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
              }}
            >
              {t('title')}
            </h2>
            <p
              className="font-body"
              style={{ color: '#A89C8A', fontSize: '16px', lineHeight: '1.7' }}
            >
              {t('text')}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Desktop: duas colunas */}
      <div className="hidden lg:flex w-full">
        {/* Coluna esquerda — 55% — texto */}
        <div
          className="flex flex-col justify-center"
          style={{ width: '55%', padding: '72px 80px' }}
        >
          <FadeIn>
            <span
              className="overline block mb-4"
              style={{ color: '#A89C8A', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase' }}
            >
              {t('sectionLabel')}
            </span>
            <h2
              id="curadoria-heading"
              className="font-display font-light mb-6"
              style={{
                color: '#F0E9DC',
                fontSize: '40px',
                lineHeight: '1.05',
                letterSpacing: '-0.012em',
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
              }}
            >
              {t('title')}
            </h2>
            <p
              className="font-body max-w-md"
              style={{ color: '#A89C8A', fontSize: '16px', lineHeight: '1.7' }}
            >
              {t('text')}
            </p>
          </FadeIn>
        </div>

        {/* Coluna direita — 45% — imagem quadrada */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: '45%', padding: '72px 80px 72px 0' }}
        >
          <div
            className="relative w-full"
            style={{
              aspectRatio: '1/1',
              boxShadow: 'inset 0 0 0 4px rgba(240,233,220,0.2)',
              overflow: 'hidden',
            }}
          >
            <Image
              src={CURADORIA_IMAGE_URL}
              alt={t('imageAlt') as string}
              fill
              loading="lazy"
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
