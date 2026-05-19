import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

export function Manifesto() {
  const t = useTranslations('manifesto');

  return (
    <section
      aria-labelledby="manifesto-heading"
      className="bg-branco-cal"
      style={{ borderTop: '1px solid rgba(26,31,38,0.08)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <FadeIn>
          <div className="max-w-[780px]">
            {/* Overline + traço */}
            <div className="flex items-center gap-5 mb-10">
              <div
                className="w-6 h-px"
                style={{ backgroundColor: '#A89C8A' }}
                aria-hidden="true"
              />
              <span className="overline text-areia-molhada">
                {t('sectionLabel')}
              </span>
            </div>

            {/* Texto do manifesto */}
            <blockquote
              id="manifesto-heading"
              className="font-display font-light text-tinta-grauna"
              style={{
                fontSize: 'clamp(22px, 2.8vw, 38px)',
                lineHeight: '1.48',
                letterSpacing: '-0.006em',
              }}
            >
              {t('text')}
            </blockquote>

            {/* Assinatura discreta */}
            <div className="flex items-center gap-4 mt-10" aria-hidden="true">
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
      </div>
    </section>
  );
}
