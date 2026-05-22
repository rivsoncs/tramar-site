'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { FadeIn } from './FadeIn';
import { photos } from '@/lib/photo-manifest';

const galleryPhotos = photos.galeria;

// index 0,2,3,5 → aspect 3/4; index 1,4 → aspect 1/1
function getAspectRatio(index: number): string {
  return index === 1 || index === 4 ? '1/1' : '3/4';
}

/* ── Lightbox ─────────────────────────────────────────────── */

interface LightboxProps {
  photos: typeof galleryPhotos;
  index: number;
  locale: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ photos, index, locale, onClose, onNext, onPrev }: LightboxProps) {
  const photo = photos[index];
  const caption = locale === 'en-US' ? photo.caption_en : photo.caption_pt;
  const total = photos.length;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption}
      className="fixed inset-0 z-[70] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(26,31,38,0.92)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      {/* Imagem central */}
      <div
        className="relative"
        style={{ maxWidth: '90vw', maxHeight: '85vh', width: '100%' }}
        onClick={e => e.stopPropagation()}
      >
        <div
          className="relative overflow-hidden"
          style={{ maxHeight: '80vh', aspectRatio: '3/2' }}
        >
          <Image
            src={photo.url}
            alt={photo.alt}
            fill
            priority
            style={{ objectFit: 'contain' }}
            sizes="90vw"
          />
        </div>

        {/* Caption */}
        <div
          className="mt-3 flex items-center justify-between"
          style={{ padding: '0 4px' }}
        >
          <span
            className="font-body"
            style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,233,220,0.55)' }}
          >
            {caption}
          </span>
          <span
            className="font-body"
            style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(240,233,220,0.35)' }}
          >
            {index + 1} / {total}
          </span>
        </div>
      </div>

      {/* Botão fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar galeria"
        className="fixed top-4 right-4 flex items-center justify-center"
        style={{
          width: '40px', height: '40px',
          backgroundColor: 'rgba(240,233,220,0.08)',
          borderRadius: '50%',
          border: '1px solid rgba(240,233,220,0.15)',
          color: 'rgba(240,233,220,0.7)',
          cursor: 'pointer',
          transition: 'background-color 200ms',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(240,233,220,0.16)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(240,233,220,0.08)')}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
          <line x1="1" y1="1" x2="13" y2="13" />
          <line x1="13" y1="1" x2="1" y2="13" />
        </svg>
      </button>

      {/* Seta anterior */}
      {index > 0 && (
        <button
          onClick={e => { e.stopPropagation(); onPrev(); }}
          aria-label="Foto anterior"
          className="fixed left-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{
            width: '44px', height: '44px',
            backgroundColor: 'rgba(240,233,220,0.08)',
            borderRadius: '50%',
            border: '1px solid rgba(240,233,220,0.15)',
            color: 'rgba(240,233,220,0.7)',
            cursor: 'pointer',
            transition: 'background-color 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(240,233,220,0.16)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(240,233,220,0.08)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Seta próxima */}
      {index < total - 1 && (
        <button
          onClick={e => { e.stopPropagation(); onNext(); }}
          aria-label="Próxima foto"
          className="fixed right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{
            width: '44px', height: '44px',
            backgroundColor: 'rgba(240,233,220,0.08)',
            borderRadius: '50%',
            border: '1px solid rgba(240,233,220,0.15)',
            color: 'rgba(240,233,220,0.7)',
            cursor: 'pointer',
            transition: 'background-color 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(240,233,220,0.16)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(240,233,220,0.08)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}

/* ── Gallery item ─────────────────────────────────────────── */

interface GalleryItemProps {
  url: string;
  caption: string;
  alt: string;
  index: number;
  delay?: number;
  onClick: () => void;
}

function GalleryItem({ url, caption, alt, index, delay = 0, onClick }: GalleryItemProps) {
  const aspectRatio = getAspectRatio(index);

  return (
    <FadeIn delay={delay}>
      <button
        className="relative overflow-hidden w-full block text-left"
        style={{ aspectRatio, cursor: 'zoom-in' }}
        onClick={onClick}
        aria-label={`Ampliar: ${caption}`}
      >
        {/* Imagem com hover scale */}
        <div className="absolute inset-0 transition-transform duration-[400ms] ease-out hover:scale-[1.03]">
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

        {/* Caption overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
          style={{
            height: '72px',
            background: 'linear-gradient(to top, rgba(26,31,38,0.55) 0%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 z-10 flex items-end justify-between">
          <span
            className="font-body text-branco-cal uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.28em' }}
          >
            {caption}
          </span>
          {/* Ícone lupa sutil */}
          <svg
            width="14" height="14"
            viewBox="0 0 24 24" fill="none"
            stroke="rgba(240,233,220,0.5)" strokeWidth="1.5" strokeLinecap="round"
            aria-hidden="true"
            style={{ flexShrink: 0, marginLeft: '8px' }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      </button>
    </FadeIn>
  );
}

/* ── Gallery ──────────────────────────────────────────────── */

export function Gallery() {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => setLightboxIndex(i => i !== null && i < galleryPhotos.length - 1 ? i + 1 : i), []);
  const goPrev = useCallback(() => setLightboxIndex(i => i !== null && i > 0 ? i - 1 : i), []);

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
            onClick={() => openLightbox(i)}
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={galleryPhotos}
          index={lightboxIndex}
          locale={locale}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </section>
  );
}
