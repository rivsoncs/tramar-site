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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo reduzida */}
          <div className="flex-shrink-0">
            <BrandLogoReduzida
              color="#A89C8A"
              className="h-8 w-auto"
            />
          </div>

          {/* Links centrais */}
          <nav aria-label="Links do rodapé" className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="https://instagram.com/tramr.muroalto"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body transition-colors duration-200"
              aria-label={t('instagramLabel')}
              style={{ color: '#A89C8A', fontSize: '12px', letterSpacing: '0.06em' }}
              onMouseEnter={undefined}
            >
              {t('instagramHandle')}
            </a>
            <a
              href="mailto:contato@tramarmuroalto.com.br"
              className="font-body transition-colors duration-200"
              aria-label={t('emailLabel')}
              style={{ color: '#A89C8A', fontSize: '12px', letterSpacing: '0.06em' }}
            >
              contato@tramarmuroalto.com.br
            </a>
          </nav>

          {/* Idioma + copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <LanguageToggle variant="footer" />
            <span
              className="font-body"
              style={{ color: '#A89C8A', fontSize: '11px', opacity: 0.55, letterSpacing: '0.04em' }}
            >
              {t('copyright')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
