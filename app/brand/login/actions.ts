'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData): Promise<never> {
  const password = formData.get('password') as string;
  const envPassword = process.env.BRAND_GUIDE_PASSWORD;

  if (envPassword && password === envPassword) {
    cookies().set('brand-session', password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    redirect('/brand');
  }

  redirect('/brand/login?error=1');
}
