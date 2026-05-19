import { LanguageToggle } from './LanguageToggle';

export function SiteHeader() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 md:px-8 h-12"
      style={{ backdropFilter: 'blur(8px)', background: 'rgba(240,233,220,0.85)' }}
    >
      <LanguageToggle variant="header" />
    </header>
  );
}
