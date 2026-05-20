'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface LanguageToggleProps {
  variant?: 'header' | 'footer';
  dark?: boolean;
}

export function LanguageToggle({ variant = 'header', dark = false }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations('langToggle');

  const switchTo = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  const isFooter = variant === 'footer';

  // dark=true: header sobre hero escuro → texto branco-cal
  // dark=false + header: header sobre fundo claro → tinta-graúna
  const baseClass = isFooter
    ? 'text-areia-molhada hover:text-branco-cal transition-colors duration-200'
    : dark
      ? 'text-branco-cal hover:opacity-80 transition-opacity duration-200'
      : 'text-tinta-grauna hover:text-barro-escuro transition-colors duration-200';

  const activeClass = isFooter ? 'text-branco-cal' : dark ? 'text-branco-cal' : 'text-tinta-grauna';
  const inactiveClass = isFooter ? 'text-areia-molhada opacity-60' : dark ? 'text-branco-cal opacity-60' : 'text-areia-molhada';

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={t('label')}
    >
      <button
        onClick={() => switchTo('pt-BR')}
        aria-pressed={locale === 'pt-BR'}
        className={`overline flex items-center justify-center ${locale === 'pt-BR' ? activeClass : `${inactiveClass} ${baseClass}`} focus-visible:outline-areia-molhada`}
        style={{ minHeight: '44px', minWidth: '44px' }}
      >
        {t('pt')}
      </button>
      <span
        className={`text-caption ${isFooter ? 'text-areia-molhada opacity-30' : dark ? 'text-branco-cal opacity-30' : 'text-areia-molhada opacity-40'}`}
        aria-hidden="true"
      >
        /
      </span>
      <button
        onClick={() => switchTo('en-US')}
        aria-pressed={locale === 'en-US'}
        className={`overline flex items-center justify-center ${locale === 'en-US' ? activeClass : `${inactiveClass} ${baseClass}`} focus-visible:outline-areia-molhada`}
        style={{ minHeight: '44px', minWidth: '44px' }}
      >
        {t('en')}
      </button>
    </div>
  );
}
