'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface LanguageToggleProps {
  variant?: 'header' | 'footer';
}

export function LanguageToggle({ variant = 'header' }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('langToggle');

  const switchTo = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  const isFooter = variant === 'footer';

  const baseClass = isFooter
    ? 'text-areia-molhada hover:text-branco-cal transition-colors duration-200'
    : 'text-tinta-grauna hover:text-barro-escuro transition-colors duration-200';

  const activeClass = isFooter ? 'text-branco-cal' : 'text-tinta-grauna';
  const inactiveClass = isFooter ? 'text-areia-molhada opacity-60' : 'text-areia-molhada';

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={t('label')}
    >
      <button
        onClick={() => switchTo('pt-BR')}
        aria-pressed={locale === 'pt-BR'}
        className={`overline px-1 py-0.5 ${locale === 'pt-BR' ? activeClass : `${inactiveClass} ${baseClass}`} focus-visible:outline-areia-molhada`}
      >
        {t('pt')}
      </button>
      <span className={`text-caption ${isFooter ? 'text-areia-molhada opacity-30' : 'text-areia-molhada opacity-40'}`} aria-hidden="true">/</span>
      <button
        onClick={() => switchTo('en-US')}
        aria-pressed={locale === 'en-US'}
        className={`overline px-1 py-0.5 ${locale === 'en-US' ? activeClass : `${inactiveClass} ${baseClass}`} focus-visible:outline-areia-molhada`}
      >
        {t('en')}
      </button>
    </div>
  );
}
