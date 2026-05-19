import { useTranslations } from 'next-intl';
import { BrandLogoReduzida } from './BrandLogo';
import { LanguageToggle } from './LanguageToggle';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer
      className="bg-tinta-grauna relative"
      style={{ backgroundColor: '#1A1F26' }}
    >
      {/* Faixa de padrão trama discreta no topo do footer */}
      <div className="pattern-trama-dark" style={{ height: '32px', width: '100%' }} aria-hidden="true" />

      <div className="px-6 md:px-12 lg:px-16 py-10 md:py-12">
        {/* Linha superior: logo + idioma */}
        <div className="flex items-center justify-between mb-8">
          {/* Logo reduzida — width explícita para controlar o SVG em flex */}
          <div style={{ width: '96px', flexShrink: 0 }}>
            <BrandLogoReduzida
              color="#A89C8A"
              className="w-full h-auto"
            />
          </div>

          {/* Idioma + copyright */}
          <div className="flex items-center gap-5">
            <LanguageToggle variant="footer" />
            <span
              className="font-body hidden sm:block"
              style={{ color: '#A89C8A', fontSize: '11px', opacity: 0.45, letterSpacing: '0.04em' }}
            >
              {t('copyright')}
            </span>
          </div>
        </div>

        {/* Linha inferior: links + copyright mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <nav aria-label="Links do rodapé" className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a
              href="https://instagram.com/tramr.muroalto"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body transition-colors duration-200 hover:opacity-100"
              aria-label={t('instagramLabel')}
              style={{ color: '#A89C8A', fontSize: '12px', letterSpacing: '0.05em', opacity: 0.8 }}
            >
              {t('instagramHandle')}
            </a>
            <a
              href="mailto:contato@tramarmuroalto.com.br"
              className="font-body transition-colors duration-200 hover:opacity-100"
              aria-label={t('emailLabel')}
              style={{ color: '#A89C8A', fontSize: '12px', letterSpacing: '0.05em', opacity: 0.8 }}
            >
              contato@tramarmuroalto.com.br
            </a>
            <a
              href="/brand-guide/"
              className="font-body transition-colors duration-200 hover:opacity-100"
              aria-label={t('brandGuideLabel')}
              style={{ color: '#A89C8A', fontSize: '12px', letterSpacing: '0.05em', opacity: 0.5 }}
            >
              {t('brandGuideLabel')}
            </a>
          </nav>

          {/* Copyright mobile */}
          <span
            className="font-body sm:hidden"
            style={{ color: '#A89C8A', fontSize: '11px', opacity: 0.45, letterSpacing: '0.04em' }}
          >
            {t('copyright')}
          </span>
        </div>
      </div>
    </footer>
  );
}
