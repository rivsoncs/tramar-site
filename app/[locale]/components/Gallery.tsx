import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

const galleryItems = [
  { bg: '#A89C8A', pattern: 'pattern-trama-light',  captionKey: 'item1' as const },
  { bg: '#6E3B2A', pattern: 'pattern-renda-dark',   captionKey: 'item2' as const },
  { bg: '#3D4836', pattern: 'pattern-rede-dark',    captionKey: 'item3' as const },
  { bg: '#C49A6B', pattern: 'pattern-trama-light',  captionKey: 'item4' as const },
  { bg: '#5C7A8C', pattern: 'pattern-renda-dark',   captionKey: 'item5' as const },
  { bg: '#1A1F26', pattern: 'pattern-rede-dark',    captionKey: 'item6' as const },
];

interface GalleryItemProps {
  bg: string;
  pattern: string;
  caption: string;
  index: number;
  delay?: number;
}

function GalleryItem({ bg, pattern, caption, index, delay = 0 }: GalleryItemProps) {
  const isDark = ['#6E3B2A', '#3D4836', '#5C7A8C', '#1A1F26'].includes(bg);

  return (
    <FadeIn
      delay={delay}
      className="relative overflow-hidden aspect-[4/3]"
    >
      {/* TODO: substituir este placeholder por foto real após sessão fotográfica */}
      <div
        className={`absolute inset-0 ${pattern}`}
        style={{ backgroundColor: bg }}
        aria-hidden="true"
      />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: 'rgba(26,31,38,0.45)' }}>
        <span
          className="font-body text-branco-cal block"
          style={{ fontSize: '11px', letterSpacing: '0.06em' }}
        >
          {caption}
        </span>
      </div>

      {/* Screen reader label */}
      <span className="sr-only">{caption} — imagem placeholder, índice {index + 1}</span>
    </FadeIn>
  );
}

export function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-branco-cal py-16 md:py-20 lg:py-24"
    >
      <div className="px-6 md:px-12 lg:px-16 mb-10">
        <FadeIn>
          <span className="overline text-areia-molhada block mb-4">
            {t('sectionLabel')}
          </span>
          <h2
            id="gallery-heading"
            className="font-display font-light text-tinta-grauna"
            style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.012em', lineHeight: '1.02' }}
          >
            {t('title')}
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, i) => (
          <GalleryItem
            key={item.captionKey}
            bg={item.bg}
            pattern={item.pattern}
            caption={t(item.captionKey)}
            index={i}
            delay={i * 50}
          />
        ))}
      </div>
    </section>
  );
}
