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

        {/* ── Lado esquerdo — conteúdo editorial ── */}
        <div className="flex flex-col flex-1 px-6 md:px-12 lg:px-16 pt-10 pb-14 lg:pb-20 lg:max-w-[54%]">

          {/* Logo — clear space generoso */}
          <div className="mb-auto pb-12 lg:pb-0">
            <BrandLogoHorizontal
              className="w-full max-w-[440px] h-auto"
              color="#1A1F26"
            />
          </div>

          {/* Separador editorial */}
          <div
            className="w-8 h-px mb-10 hidden lg:block"
            style={{ backgroundColor: 'rgba(26,31,38,0.2)' }}
            aria-hidden="true"
          />

          {/* Tagline + subtítulo + CTA */}
          <div className="mt-auto">
            <h1
              id="hero-heading"
              className="font-display font-light text-tinta-grauna mb-6"
              style={{
                fontSize: 'clamp(38px, 5.6vw, 88px)',
                lineHeight: '0.93',
                letterSpacing: '-0.02em',
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
              }}
            >
              {t('tagline')}
            </h1>

            <p
              className="font-body text-areia-molhada mb-10 max-w-sm lg:max-w-xs"
              style={{ fontSize: '16px', lineHeight: '1.65', letterSpacing: '0.006em' }}
            >
              {t('subtitle')}
            </p>

            {/* Localização discreta */}
            <p
              className="overline text-areia-molhada mb-8 opacity-70"
              style={{ fontSize: '10px' }}
            >
              Makai Acqua Resort · Muro Alto · Pernambuco
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

        {/* ── Lado direito — presença de marca (modo noturno) ── */}
        <div
          className="relative flex-1 min-h-[320px] lg:min-h-full overflow-hidden pattern-trama-dark"
          style={{ backgroundColor: '#1A1F26' }}
          aria-hidden="true"
        >
          {/* Monograma T — cal sobre grauna */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 240 240"
              className="w-[60%] max-w-[380px] opacity-[0.07]"
              aria-hidden="true"
            >
              <text
                x="120"
                y="208"
                textAnchor="middle"
                fontFamily="Fraunces, Georgia, serif"
                fontWeight="300"
                fontSize="260"
                fill="#F0E9DC"
              >
                T
              </text>
            </svg>
          </div>

          {/* Label vertical — elemento editorial */}
          <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-3">
            <div
              className="w-px h-16"
              style={{ backgroundColor: 'rgba(240,233,220,0.2)' }}
            />
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.3em',
                color: 'rgba(240,233,220,0.4)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                textTransform: 'uppercase',
              }}
            >
              Pernambucanidade Contemporânea
            </p>
          </div>

          {/* Linha separadora vertical */}
          <div
            className="absolute left-0 top-10 bottom-10 w-px hidden lg:block"
            style={{ background: 'rgba(240,233,220,0.08)' }}
          />
        </div>
      </div>
    </section>
  );
}
