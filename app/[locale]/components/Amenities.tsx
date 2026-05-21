import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

/* ----------------------------------------------------------------
   Ícones de traço fino exclusivos Tramar — baseados na identidade
   visual nova-tramar-muro-alto (VisualAssetsDisplay.tsx)
   strokeWidth 1.3px · strokeLinecap round · fill none
---------------------------------------------------------------- */

function IconWifi() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="#1A1F26" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 5a18 18 0 0 1 20 0" />
      <path d="M5 10a12 12 0 0 1 14 0" />
      <path d="M8.5 15a6 6 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1" fill="#1A1F26" />
    </svg>
  );
}

function IconCafe() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="#1A1F26" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* xícara */}
      <path d="M6 7h12l-1.5 9H7.5L6 7z" />
      <path d="M18 9h2a2 2 0 0 1 0 4h-2" />
      {/* pires */}
      <path d="M5 19h14" />
      {/* vapor */}
      <path d="M9 4c0-1 1-1 1-2M12 4c0-1 1-1 1-2" opacity="0.5" />
    </svg>
  );
}

function IconAr() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="#1A1F26" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* floco estilizado */}
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="5" y1="5" x2="19" y2="19" opacity="0.55" />
      <line x1="19" y1="5" x2="5" y2="19" opacity="0.55" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconVaranda() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="#1A1F26" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* arco varanda */}
      <path d="M5 20V10a7 7 0 0 1 14 0v10" />
      <line x1="3" y1="20" x2="21" y2="20" />
      {/* colunas */}
      <line x1="5" y1="20" x2="5" y2="14" />
      <line x1="19" y1="20" x2="19" y2="14" />
    </svg>
  );
}

function IconPiscina() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="#1A1F26" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* 3 ondas paralelas — ícone mar de arrecifes */}
      <path d="M2 8c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M2 13c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M2 18c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
    </svg>
  );
}

function IconBeachTennis() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="#1A1F26" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* raquete */}
      <circle cx="11" cy="10" r="7" />
      <line x1="11" y1="3" x2="11" y2="17" />
      <line x1="4" y1="10" x2="18" y2="10" />
      {/* cabo */}
      <line x1="16" y1="15" x2="21" y2="21" strokeWidth="2" />
      {/* bolinha */}
      <circle cx="20" cy="4" r="1.5" fill="#1A1F26" />
    </svg>
  );
}

const iconComponents: Record<string, React.FC> = {
  wifi:          IconWifi,
  cafe:          IconCafe,
  ar:            IconAr,
  varanda:       IconVaranda,
  piscina:       IconPiscina,
  beachTennis:   IconBeachTennis,
};

interface AmenityProps {
  iconKey: string;
  label: string;
  delay?: number;
}

function Amenity({ iconKey, label, delay = 0 }: AmenityProps) {
  const Icon = iconComponents[iconKey];
  return (
    <FadeIn delay={delay} className="flex flex-col items-center gap-3 text-center">
      <div
        className="w-12 h-12 flex items-center justify-center"
        style={{ opacity: 0.72 }}
        aria-hidden="true"
      >
        {Icon && <Icon />}
      </div>
      <span className="overline text-areia-molhada" style={{ letterSpacing: '0.12em' }}>{label}</span>
    </FadeIn>
  );
}

export function Amenities() {
  const t = useTranslations('amenities');

  const items = [
    { iconKey: 'wifi',        label: t('wifi'),        delay: 0   },
    { iconKey: 'cafe',        label: t('cafe'),        delay: 60  },
    { iconKey: 'ar',          label: t('ar'),          delay: 120 },
    { iconKey: 'varanda',     label: t('varanda'),     delay: 180 },
    { iconKey: 'piscina',     label: t('piscina'),     delay: 240 },
    { iconKey: 'beachTennis', label: t('beachTennis'), delay: 300 },
  ];

  return (
    <section aria-labelledby="amenities-heading" className="bg-branco-cal">
      {/* Divisor padrão trama acima */}
      <div className="pattern-trama-light pattern-divider w-full" aria-hidden="true" />

      <div className="py-7 md:py-16 px-6 md:px-12 lg:px-16">
        <FadeIn className="mb-5 md:mb-12">
          <span className="overline text-areia-molhada block mb-4">
            {t('sectionLabel')}
          </span>
          <h2
            id="amenities-heading"
            className="font-display font-light text-tinta-grauna"
            style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.012em', lineHeight: '1.02', fontVariationSettings: '"SOFT" 30, "opsz" 144' }}
          >
            {t('title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-6 max-w-3xl">
          {items.map((item) => (
            <Amenity
              key={item.iconKey}
              iconKey={item.iconKey}
              label={item.label}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
