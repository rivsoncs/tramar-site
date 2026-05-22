import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

export function Manifesto() {
  const t = useTranslations('manifesto');

  const pillars = [
    { label: t('p1Label'), text: t('p1Text') },
    { label: t('p2Label'), text: t('p2Text') },
    { label: t('p3Label'), text: t('p3Text') },
  ];

  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="bg-branco-cal"
      style={{ borderTop: '1px solid rgba(26,31,38,0.08)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <FadeIn>
          <div className="max-w-[780px]">
            {/* Heading semântico (visualmente oculto, lido por leitores de tela) */}
            <h2 id="manifesto-heading" className="sr-only">{t('sectionLabel')}</h2>

            {/* Overline + traço */}
            <div className="flex items-center gap-5 mb-5 md:mb-10" aria-hidden="true">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: '#A89C8A' }}
              />
              <span className="overline text-areia-molhada">
                {t('sectionLabel')}
              </span>
            </div>

            {/* Texto do manifesto */}
            <blockquote
              className="font-display font-light text-tinta-grauna"
              style={{
                fontSize: 'clamp(22px, 2.8vw, 38px)',
                lineHeight: '1.48',
                letterSpacing: '-0.006em',
                fontVariationSettings: '"SOFT" 30, "opsz" 144',
              }}
            >
              {t('text')}
            </blockquote>

            {/* Assinatura discreta */}
            <div className="flex items-center gap-4 mt-5 md:mt-10" aria-hidden="true">
              <div
                className="w-4 h-px"
                style={{ backgroundColor: 'rgba(26,31,38,0.25)' }}
              />
              <p
                className="font-body"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  color: 'rgba(26,31,38,0.35)',
                  textTransform: 'uppercase',
                }}
              >
                Tramar Muro Alto
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Três pilares ── */}
        <FadeIn delay={150}>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-16 md:mt-20"
            style={{ borderTop: '1px solid rgba(26,31,38,0.08)', paddingTop: '40px' }}
          >
            {pillars.map(({ label, text }) => (
              <div
                key={label}
                className="sm:pr-8"
                style={{ borderLeft: '1px solid rgba(168,156,138,0.35)', paddingLeft: '20px', marginBottom: '28px' }}
              >
                <p
                  className="font-body mb-3"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#C49A6B',
                    fontWeight: 500,
                  }}
                >
                  {label}
                </p>
                <p
                  className="font-body text-tinta-grauna"
                  style={{ fontSize: '12px', lineHeight: '1.75', opacity: 0.72 }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
