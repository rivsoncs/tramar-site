import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

export function Manifesto() {
  const t = useTranslations('manifesto');

  return (
    <section
      aria-labelledby="manifesto-heading"
      className="bg-branco-cal py-16 md:py-20 lg:py-24"
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[900px]">
        <FadeIn>
          <span className="overline text-areia-molhada block mb-8">
            {t('sectionLabel')}
          </span>
          <blockquote
            id="manifesto-heading"
            className="font-display font-light text-tinta-grauna"
            style={{
              fontSize: 'clamp(22px, 2.8vw, 36px)',
              lineHeight: '1.45',
              letterSpacing: '-0.005em',
            }}
          >
            {t('text')}
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
