import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';
import { SubBrandLogo } from './SubBrandLogo';

interface ProductCardProps {
  brand: 'carua' | 'renda' | 'inteira';
  bgColor: string;
  logoColor: string;
  patternClass: string;
  name: string;
  tagline: string;
  cta: string;
  delay?: number;
}

function ProductCard({
  brand,
  bgColor,
  logoColor,
  patternClass,
  name,
  tagline,
  cta,
  delay = 0,
}: ProductCardProps) {
  return (
    <FadeIn delay={delay} className="flex flex-col h-full">
      <article
        className={`flex flex-col h-full relative overflow-hidden`}
        style={{ backgroundColor: bgColor }}
        aria-label={name}
      >
        {/* Padrão de fundo */}
        <div
          className={`absolute inset-0 ${patternClass} pointer-events-none`}
          aria-hidden="true"
        />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col h-full p-8 md:p-10 min-h-[480px]">
          {/* Logo sub-marca */}
          <div className="flex-1 flex items-center justify-center py-8">
            <SubBrandLogo
              brand={brand}
              color={logoColor}
              className="w-full max-w-[200px] h-auto"
            />
          </div>

          {/* Texto e CTA */}
          <div className="mt-auto">
            <p
              className="font-body mb-6"
              style={{
                color: logoColor,
                fontSize: '15px',
                lineHeight: '1.65',
                opacity: 0.9,
              }}
            >
              {tagline}
            </p>
            <a
              href="#"
              className="btn-secondary"
              aria-label={`${cta} — ${name}`}
              style={{
                color: logoColor,
                borderColor: `${logoColor}66`,
              }}
            >
              {cta}
            </a>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function ProductCards() {
  const t = useTranslations('products');

  const cards = [
    {
      brand: 'carua' as const,
      bgColor: '#6E3B2A',
      logoColor: '#F0E9DC',
      patternClass: 'pattern-trama-dark',
      nameKey: 'carua.name',
      taglineKey: 'carua.tagline',
      ctaKey: 'carua.cta',
    },
    {
      brand: 'renda' as const,
      bgColor: '#C49A6B',
      logoColor: '#1A1F26',
      patternClass: 'pattern-renda-light',
      nameKey: 'renda.name',
      taglineKey: 'renda.tagline',
      ctaKey: 'renda.cta',
    },
    {
      brand: 'inteira' as const,
      bgColor: '#1A1F26',
      logoColor: '#F0E9DC',
      patternClass: 'pattern-rede-dark',
      nameKey: 'inteira.name',
      taglineKey: 'inteira.tagline',
      ctaKey: 'inteira.cta',
    },
  ];

  return (
    <section
      aria-labelledby="products-heading"
      className="bg-branco-cal py-16 md:py-20 lg:py-24"
    >
      <div className="px-6 md:px-12 lg:px-16 mb-10">
        <span className="overline text-areia-molhada block mb-4">
          {t('sectionLabel')}
        </span>
        <h2
          id="products-heading"
          className="font-display font-light text-tinta-grauna"
          style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.012em', lineHeight: '1.02' }}
        >
          {t('title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, i) => (
          <ProductCard
            key={card.brand}
            brand={card.brand}
            bgColor={card.bgColor}
            logoColor={card.logoColor}
            patternClass={card.patternClass}
            name={t(card.nameKey as Parameters<typeof t>[0])}
            tagline={t(card.taglineKey as Parameters<typeof t>[0])}
            cta={t(card.ctaKey as Parameters<typeof t>[0])}
            delay={i * 80}
          />
        ))}
      </div>
    </section>
  );
}
