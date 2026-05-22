import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

/* ----------------------------------------------------------------
   Ícones de traço fino exclusivos Tramar
   strokeWidth 1.3px · strokeLinecap round · fill none
---------------------------------------------------------------- */

function IconWifi() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 5a18 18 0 0 1 20 0" />
      <path d="M5 10a12 12 0 0 1 14 0" />
      <path d="M8.5 15a6 6 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  );
}

function IconCafe() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7h12l-1.5 9H7.5L6 7z" />
      <path d="M18 9h2a2 2 0 0 1 0 4h-2" />
      <path d="M5 19h14" />
      <path d="M9 4c0-1 1-1 1-2M12 4c0-1 1-1 1-2" opacity="0.5" />
    </svg>
  );
}

function IconAr() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <path d="M6 11v2M12 11v2M18 11v2" />
      <path d="M6 13c0 2 1.5 3 2 4M12 13c0 2 1.5 3 2 4M18 13c0 2 1.5 3 2 4" opacity="0.5" />
    </svg>
  );
}

function IconVaranda() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 20V10a7 7 0 0 1 14 0v10" />
      <line x1="3" y1="20" x2="21" y2="20" />
      <line x1="5" y1="20" x2="5" y2="14" />
      <line x1="19" y1="20" x2="19" y2="14" />
      <line x1="9" y1="14" x2="9" y2="20" />
      <line x1="15" y1="14" x2="15" y2="20" />
    </svg>
  );
}

function IconPiscina() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M2 13c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M2 18c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
    </svg>
  );
}

function IconBeachTennis() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="10" r="7" />
      <line x1="11" y1="3" x2="11" y2="17" />
      <line x1="4" y1="10" x2="18" y2="10" />
      <line x1="16" y1="15" x2="21" y2="21" strokeWidth="2" />
      <circle cx="20" cy="4" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconTV() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <line x1="8" y1="22" x2="16" y2="22" />
      <line x1="12" y1="18" x2="12" y2="22" />
    </svg>
  );
}

function IconCozinha() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      {/* fogão estilizado */}
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <line x1="3" y1="11" x2="21" y2="11" />
      <circle cx="8" cy="8.5" r="1" fill="currentColor" />
      <circle cx="16" cy="8.5" r="1" fill="currentColor" />
      {/* alça panela */}
      <path d="M9 15h6" />
      <path d="M7 13v4" opacity="0.5" />
      <path d="M17 13v4" opacity="0.5" />
    </svg>
  );
}

function IconEstacionamento() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

const iconComponents: Record<string, React.FC> = {
  wifi:              IconWifi,
  cafe:              IconCafe,
  ar:                IconAr,
  varanda:           IconVaranda,
  piscina:           IconPiscina,
  beachTennis:       IconBeachTennis,
  tv:                IconTV,
  cozinha:           IconCozinha,
  estacionamento:    IconEstacionamento,
};

interface AmenityCardProps {
  iconKey: string;
  label: string;
  description: string;
  delay?: number;
}

function AmenityCard({ iconKey, label, description, delay = 0 }: AmenityCardProps) {
  const Icon = iconComponents[iconKey];
  return (
    <FadeIn delay={delay}>
      <div
        className="flex flex-col gap-3 p-5 h-full"
        style={{
          backgroundColor: '#FAF8F5',
          border: '1px solid rgba(168,156,138,0.18)',
          borderRadius: '4px',
        }}
      >
        {/* Ícone */}
        <div
          style={{ color: '#3D2B1F', opacity: 0.65 }}
          aria-hidden="true"
        >
          {Icon && <Icon />}
        </div>

        {/* Label */}
        <p
          className="font-body"
          style={{
            fontSize: '9px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#1A1F26',
            fontWeight: 500,
          }}
        >
          {label}
        </p>

        {/* Traço separador */}
        <div
          style={{
            width: '20px',
            height: '1px',
            backgroundColor: 'rgba(61,43,31,0.25)',
          }}
          aria-hidden="true"
        />

        {/* Descrição */}
        <p
          className="font-body"
          style={{
            fontSize: '12px',
            lineHeight: '1.65',
            color: 'rgba(26,31,38,0.58)',
          }}
        >
          {description}
        </p>
      </div>
    </FadeIn>
  );
}

export function Amenities() {
  const t = useTranslations('amenities');

  const items = [
    { iconKey: 'wifi',           label: t('wifi'),           description: t('wifiDesc'),           delay: 0   },
    { iconKey: 'cafe',           label: t('cafe'),           description: t('cafeDesc'),           delay: 40  },
    { iconKey: 'ar',             label: t('ar'),             description: t('arDesc'),             delay: 80  },
    { iconKey: 'varanda',        label: t('varanda'),        description: t('varandaDesc'),        delay: 120 },
    { iconKey: 'piscina',        label: t('piscina'),        description: t('piscinaDesc'),        delay: 160 },
    { iconKey: 'beachTennis',    label: t('beachTennis'),    description: t('beachTennisDesc'),    delay: 200 },
    { iconKey: 'tv',             label: t('tv'),             description: t('tvDesc'),             delay: 240 },
    { iconKey: 'cozinha',        label: t('cozinha'),        description: t('cozinhaDesc'),        delay: 280 },
    { iconKey: 'estacionamento', label: t('estacionamento'), description: t('estacionamentoDesc'), delay: 320 },
  ];

  return (
    <section id="amenities" aria-labelledby="amenities-heading" className="bg-branco-cal">
      {/* Divisor padrão trama acima */}
      <div className="pattern-trama-light pattern-divider w-full" aria-hidden="true" />

      <div className="py-7 md:py-16 px-6 md:px-12 lg:px-16">
        <FadeIn className="mb-8 md:mb-12">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-4 max-w-3xl">
          {items.map((item) => (
            <AmenityCard
              key={item.iconKey}
              iconKey={item.iconKey}
              label={item.label}
              description={item.description}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
