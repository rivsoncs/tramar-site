import { useTranslations } from 'next-intl';
import { BrandLogoHorizontal } from './BrandLogo';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col bg-branco-cal pt-12"
    >
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Lado esquerdo — conteúdo */}
        <div className="flex flex-col justify-between flex-1 px-6 md:px-12 lg:px-16 pt-12 pb-12 lg:pb-16 lg:max-w-[55%]">
          {/* Logo */}
          <div className="mb-auto">
            <BrandLogoHorizontal
              className="w-full max-w-[480px] h-auto"
              color="#1A1F26"
            />
          </div>

          {/* Manifesto + CTA */}
          <div className="mt-12 lg:mt-auto">
            <h1
              id="hero-heading"
              className="font-display font-light text-tinta-grauna leading-none tracking-tight mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 96px)',
                lineHeight: '0.95',
                letterSpacing: '-0.018em',
              }}
            >
              {t('tagline')}
            </h1>
            <p className="font-display font-light text-areia-molhada mb-8 max-w-md" style={{ fontSize: '20px', lineHeight: '1.55', letterSpacing: '0.004em' }}>
              {t('subtitle')}
            </p>
            <a
              href="#"
              className="btn-primary"
              aria-label={t('cta')}
            >
              {t('cta')}
            </a>
          </div>
        </div>

        {/* Lado direito — visual com padrão trama */}
        <div
          className="relative flex-1 min-h-[300px] lg:min-h-full pattern-trama-light"
          style={{
            background: 'linear-gradient(160deg, #F0E9DC 0%, #E6DECF 60%, #D4C8B8 100%)',
          }}
          aria-hidden="true"
        >
          {/* Linha vertical discreta separando esquerda/direita */}
          <div
            className="absolute left-0 top-8 bottom-8 w-px hidden lg:block"
            style={{ background: 'rgba(26,31,38,0.1)' }}
          />
        </div>
      </div>
    </section>
  );
}
