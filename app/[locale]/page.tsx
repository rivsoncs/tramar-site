import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Curadoria } from './components/Curadoria';
import { StudioCards } from './components/StudioCards';
import { Makai } from './components/Makai';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

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
        <StudioCards />
        <Makai />
        <Amenities />
        <Gallery />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
