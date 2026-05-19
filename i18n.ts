import { getRequestConfig } from 'next-intl/server';

const locales = ['pt-BR', 'en-US'] as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) {
    throw new Error(`Locale '${locale}' not supported`);
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
