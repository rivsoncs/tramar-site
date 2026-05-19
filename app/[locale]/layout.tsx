import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import '../globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'meta' });

  const baseUrl = 'https://tramarmuroalto.com.br';

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR`,
        'en-US': `${baseUrl}/en-US`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}`,
      siteName: 'Tramar Muro Alto',
      locale: locale === 'pt-BR' ? 'pt_BR' : 'en_US',
      type: 'website',
      // TODO: substituir por imagem real após sessão fotográfica
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tramar Muro Alto',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'pt-BR' }, { locale: 'en-US' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Tramar Muro Alto',
              url: 'https://tramarmuroalto.com.br',
              description:
                locale === 'pt-BR'
                  ? 'Dois flats studios curados com ofício pernambucano no Makai Acqua Resort, Muro Alto, Pernambuco.'
                  : 'Two studio flats curated with Pernambucan craft at Makai Acqua Resort, Muro Alto, Pernambuco.',
              // TODO: preencher endereço completo após confirmação operacional
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Muro Alto',
                addressRegion: 'Pernambuco',
                addressCountry: 'BR',
              },
              sameAs: ['https://instagram.com/tramr.muroalto'],
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
