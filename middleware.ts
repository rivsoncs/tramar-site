import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt-BR', 'en-US'],
  defaultLocale: 'pt-BR',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
