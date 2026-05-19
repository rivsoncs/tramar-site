import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
  imageUrl: string;
  imageAltPt: string;
  imageAltEn: string;
  imageAlt: string;
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
  imageUrl,
  imageAlt,
}: ProductCardProps) {
  const numerals = ['I', 'II', 'III'];

  return (
    <FadeIn delay={delay} className="flex flex-col h-full">
      <article
        className="flex flex-col h-full"
        style={{ backgroundColor: bgColor, minHeight: '520px' }}
        aria-label={name}
      >
        {/* Terço superior — imagem com overlay + logo */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ height: '200px' }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            loading="lazy"
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Overlay de cor de assinatura */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: bgColor, opacity: 0.5 }}
            aria-hidden="true"
          />
          {/* Logo sub-marca centralizado sobre o overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div style={{ width: '200px' }}>
              <SubBrandLogo
                brand={brand}
                color={logoColor}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Dois terços inferiores — conteúdo */}
        <div
          className="relative flex flex-col flex-1 overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          {/* Padrão de fundo */}
          <div
            className={`absolute inset-0 ${patternClass} pointer-events-none`}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col flex-1 px-8 pt-8 pb-10 md:px-10 md:pb-12">
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

            {/* Traço separador */}
            <div
              className="w-8 h-px mb-6"
              style={{ backgroundColor: logoColor, opacity: 0.3 }}
              aria-hidden="true"
            />

            {/* Tagline */}
            <p
              className="font-body mb-8 flex-1"
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
      imageUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&q=80&fit=crop',
      imageAlt: t('carua.imageAlt' as Parameters<typeof t>[0]),
    },
    {
      brand: 'renda' as const,
      bgColor: '#C49A6B',
      logoColor: '#1A1F26',
      patternClass: 'pattern-renda-light',
      nameKey: 'renda.name',
      taglineKey: 'renda.tagline',
      ctaKey: 'renda.cta',
      imageUrl: 'https://images.unsplash.com/photo-1614107151491-6876eecbff89?w=800&q=80&fit=crop',
      imageAlt: t('renda.imageAlt' as Parameters<typeof t>[0]),
    },
    {
      brand: 'inteira' as const,
      bgColor: '#1A1F26',
      logoColor: '#F0E9DC',
      patternClass: 'pattern-rede-dark',
      nameKey: 'inteira.name',
      taglineKey: 'inteira.tagline',
      ctaKey: 'inteira.cta',
      imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80&fit=crop',
      imageAlt: t('inteira.imageAlt' as Parameters<typeof t>[0]),
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

      {/* Grid de cards */}
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
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
            imageAltPt=""
            imageAltEn=""
          />
        ))}
      </div>
    </section>
  );
}
