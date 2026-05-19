import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces-brand',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-sans-brand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Identidade Visual — Tramar',
  robots: 'noindex, nofollow',
};

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body style={{ margin: 0, padding: 0, fontFamily: 'var(--font-dm-sans-brand), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
