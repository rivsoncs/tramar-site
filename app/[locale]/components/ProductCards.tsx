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
  index: number;
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
  index,
  delay = 0,
}: ProductCardProps) {
  const numerals = ['I', 'II', 'III'];

  return (
    <FadeIn delay={delay} className="flex flex-col h-full">
      <article
        className="flex flex-col h-full relative overflow-hidden"
        style={{ backgroundColor: bgColor }}
        aria-label={name}
      >
        {/* Padrão de fundo */}
        <div
          className={`absolute inset-0 ${patternClass} pointer-events-none`}
          aria-hidden="true"
        />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col h-full px-8 pt-12 pb-10 md:px-10 md:pt-14 md:pb-12 min-h-[520px]">

          {/* Numeral editorial */}
          <p
            className="font-body mb-6"
            style={{
              color: logoColor,
              fontSize: '10px',
              letterSpacing: '0.28em',
              opacity: 0.45,
              textTransform: 'uppercase',
            }}
          >
            {numerals[index]}
          </p>

          {/* Logo sub-marca — área generosa */}
          <div className="flex-1 flex items-center justify-center py-4">
            <SubBrandLogo
              brand={brand}
              color={logoColor}
              className="w-full max-w-[260px] h-auto"
            />
          </div>

          {/* Traço separador */}
          <div
            className="w-8 h-px mb-6 mt-4"
            style={{ backgroundColor: logoColor, opacity: 0.3 }}
            aria-hidden="true"
          />

          {/* Tagline */}
          <p
            className="font-body mb-8"
            style={{
              color: logoColor,
              fontSize: '14px',
              lineHeight: '1.7',
              opacity: 0.85,
              maxWidth: '240px',
            }}
          >
            {tagline}
          </p>

          {/* CTA */}
          <a
            href="#"
            className="btn-secondary self-start"
            aria-label={`${cta} — ${name}`}
            style={{
              color: logoColor,
              borderColor: `${logoColor}55`,
            }}
          >
            {cta}
          </a>
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
      className="bg-branco-cal"
    >
      {/* Cabeçalho da seção */}
      <div className="px-6 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12">
        <span className="overline text-areia-molhada block mb-4">
          {t('sectionLabel')}
        </span>
        <h2
          id="products-heading"
          className="font-display font-light text-tinta-grauna"
          style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.012em', lineHeight: '1.02', fontVariationSettings: '"SOFT" 30, "opsz" 144' }}
        >
          {t('title')}
        </h2>
      </div>

      {/* Grid de cards — sem gap para flush editorial */}
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
            index={i}
            delay={i * 80}
          />
        ))}
      </div>
    </section>
  );
}
