import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import { photos } from '@/lib/photo-manifest';

const galleryPhotos = photos.galeria;

// index 0,2,3,5 → aspect 3/4; index 1,4 → aspect 1/1
function getAspectRatio(index: number): string {
  return index === 1 || index === 4 ? '1/1' : '3/4';
}

interface GalleryItemProps {
  url: string;
  caption: string;
  alt: string;
  index: number;
  delay?: number;
}

function GalleryItem({ url, caption, alt, index, delay = 0 }: GalleryItemProps) {
  const aspectRatio = getAspectRatio(index);

  return (
    <FadeIn delay={delay}>
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio }}
      >
        {/* Image container with hover scale */}
        <div
          className="absolute inset-0 transition-transform duration-[400ms] ease-out hover:scale-[1.03]"
        >
          <Image
            src={url}
            alt={alt}
            fill
            loading="lazy"
            className="img-tramar"
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Caption overlay — gradiente 64px na base */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-end pointer-events-none z-10"
          style={{
            height: '64px',
            background: 'linear-gradient(to top, rgba(26,31,38,0.5) 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 z-10">
          <span
            className="font-body text-branco-cal block uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.3em' }}
          >
            {caption}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

export function Gallery() {
  const t = useTranslations('gallery');
  const locale = useLocale();

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
            style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.012em', lineHeight: '1.02', fontVariationSettings: '"SOFT" 30, "opsz" 144' }}
          >
            {t('title')}
          </h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {galleryPhotos.map((item, i) => (
          <GalleryItem
            key={i}
            url={item.url}
            caption={locale === 'en-US' ? item.caption_en : item.caption_pt}
            alt={item.alt}
            index={i}
            delay={i * 50}
          />
        ))}
      </div>

      {/* Crédito de fotos */}
      <div className="px-6 md:px-12 lg:px-16 mt-6">
        <p
          className="font-body text-areia-molhada opacity-60"
          style={{ fontSize: '11px', letterSpacing: '0.04em' }}
        >
          {t('photoCredit')}
        </p>
      </div>
    </section>
  );
}
