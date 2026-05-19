import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['pt-BR', 'en-US'],
  defaultLocale: 'pt-BR',
  localePrefix: 'always',
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/brand/login') || pathname === '/brand/login') {
    return NextResponse.next();
  }

  if (pathname.startsWith('/brand')) {
    const session = request.cookies.get('brand-session');
    const password = process.env.BRAND_GUIDE_PASSWORD;

    if (!session || !password || session.value !== password) {
      return NextResponse.redirect(new URL('/brand/login', request.url));
    }

    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
