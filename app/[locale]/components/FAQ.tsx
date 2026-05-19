'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, index, isOpen, onToggle }: FAQItemProps) {
  const id = `faq-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(26,31,38,0.12)' }}
    >
      <button
        id={id}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        style={{ cursor: 'pointer' }}
      >
        <span
          className="font-display font-light text-tinta-grauna group-hover:text-areia-molhada transition-colors duration-200"
          style={{ fontSize: 'clamp(16px, 1.6vw, 20px)', lineHeight: '1.4', letterSpacing: '-0.004em' }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-areia-molhada transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        hidden={!isOpen}
      >
        <p
          className="font-body text-tinta-grauna pb-5"
          style={{ fontSize: '15px', lineHeight: '1.65', maxWidth: '640px', opacity: 0.8 }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [1, 2, 3, 4, 5, 6].map((n) => ({
    q: t(`q${n}` as Parameters<typeof t>[0]),
    a: t(`a${n}` as Parameters<typeof t>[0]),
  }));

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-branco-cal py-16 md:py-20 lg:py-24"
    >
      <div className="px-6 md:px-12 lg:px-16">
        <FadeIn className="mb-10">
          <span className="overline text-areia-molhada block mb-4">
            {t('sectionLabel')}
          </span>
          <h2
            id="faq-heading"
            className="font-display font-light text-tinta-grauna"
            style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.012em', lineHeight: '1.02', fontVariationSettings: '"SOFT" 30, "opsz" 144' }}
          >
            {t('title')}
          </h2>
        </FadeIn>

        <div className="max-w-2xl border-t" style={{ borderColor: 'rgba(26,31,38,0.12)' }}>
          {items.map((item, i) => (
            <FAQItem
              key={i}
              question={item.q}
              answer={item.a}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
