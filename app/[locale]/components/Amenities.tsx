import { useTranslations } from 'next-intl';
import { FadeIn } from './FadeIn';

interface AmenityProps {
  iconPath: string;
  label: string;
  delay?: number;
}

function Amenity({ iconPath, label, delay = 0 }: AmenityProps) {
  return (
    <FadeIn delay={delay} className="flex flex-col items-center gap-3 text-center">
      <div className="w-11 h-11 flex items-center justify-center text-tinta-grauna" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconPath} alt="" width={24} height={24} className="w-6 h-6 opacity-80" />
      </div>
      <span className="overline text-areia-molhada tracking-widest">{label}</span>
    </FadeIn>
  );
}

export function Amenities() {
  const t = useTranslations('amenities');

  const items = [
    { icon: '/brand-assets/icons/wifi.svg',           label: t('wifi'),        delay: 0   },
    { icon: '/brand-assets/icons/cafe.svg',           label: t('cafe'),        delay: 60  },
    { icon: '/brand-assets/icons/ar-condicionado.svg',label: t('ar'),          delay: 120 },
    { icon: '/brand-assets/icons/varanda.svg',         label: t('varanda'),    delay: 180 },
    { icon: '/brand-assets/icons/piscina.svg',         label: t('piscina'),    delay: 240 },
    { icon: '/brand-assets/icons/beach-tennis.svg',    label: t('beachTennis'),delay: 300 },
  ];

  return (
    <section
      aria-labelledby="amenities-heading"
      className="bg-branco-cal"
    >
      {/* Divisor padrão trama acima */}
      <div className="pattern-trama-light pattern-divider w-full" aria-hidden="true" />

      <div className="py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <FadeIn className="mb-12">
          <span className="overline text-areia-molhada block mb-4">
            {t('sectionLabel')}
          </span>
          <h2
            id="amenities-heading"
            className="font-display font-light text-tinta-grauna"
            style={{ fontSize: 'clamp(28px, 3.2vw, 48px)', letterSpacing: '-0.012em', lineHeight: '1.02' }}
          >
            {t('title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-6 max-w-3xl">
          {items.map((item) => (
            <Amenity
              key={item.icon}
              iconPath={item.icon}
              label={item.label}
              delay={item.delay}
            />
          ))}
        </div>
      </div>

      {/* Divisor padrão trama abaixo */}
      <div className="pattern-trama-light pattern-divider w-full" aria-hidden="true" />
    </section>
  );
}
