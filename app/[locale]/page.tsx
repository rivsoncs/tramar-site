import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Curadoria } from './components/Curadoria';
import { ProductCards } from './components/ProductCards';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t('skip')}
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Manifesto />
        <Curadoria />
        <ProductCards />
        <Amenities />
        <Gallery />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
