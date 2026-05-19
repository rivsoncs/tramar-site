import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'branco-cal':    '#F0E9DC',
        'areia-molhada': '#A89C8A',
        'tinta-grauna':  '#1A1F26',
        'barro-escuro':  '#6E3B2A',
        'verde-mato':    '#3D4836',
        'acucar-mascavo':'#C49A6B',
        'azul-olinda':   '#5C7A8C',
        'bg-soft':       '#E6DECF',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', '"Times New Roman"', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(64px, 8.4vw, 124px)', { lineHeight: '0.92', letterSpacing: '-0.018em' }],
        'h1':      ['clamp(36px, 4.4vw, 56px)',   { lineHeight: '1.02', letterSpacing: '-0.012em' }],
        'h2':      ['clamp(24px, 2.4vw, 32px)',   { lineHeight: '1.08', letterSpacing: '-0.005em' }],
        'body-lg': ['22px',                        { lineHeight: '1.5',  letterSpacing: '0.005em'  }],
        'body':    ['15px',                        { lineHeight: '1.65', letterSpacing: '0'        }],
        'caption': ['12px',                        { lineHeight: '1.5',  letterSpacing: '0.02em'   }],
        'overline':['11px',                        { lineHeight: '1',    letterSpacing: '0.28em'   }],
      },
      spacing: {
        '1':  '4px',
        '2':  '8px',
        '3':  '16px',
        '4':  '24px',
        '5':  '32px',
        '6':  '48px',
        '7':  '64px',
        '8':  '96px',
        '9':  '128px',
        '10': '160px',
        '12': '192px',
        '14': '224px',
        '16': '256px',
      },
      borderRadius: {
        'none': '0',
        'sm':   '2px',
        'DEFAULT': '4px',
        'md':   '4px',
      },
      boxShadow: {
        'xs':     '0 1px 2px rgba(26,31,38,0.04)',
        'sm':     '0 1px 1px rgba(26,31,38,0.05), 0 4px 8px rgba(26,31,38,0.06)',
        'md':     '0 1px 2px rgba(26,31,38,0.06), 0 12px 24px rgba(26,31,38,0.10)',
        'lg':     '0 1px 2px rgba(26,31,38,0.06), 0 24px 48px rgba(26,31,38,0.16)',
        'paper':  '0 1px 1px rgba(26,31,38,0.05), 0 8px 16px rgba(26,31,38,0.08), 0 32px 64px rgba(26,31,38,0.14)',
      },
      transitionDuration: {
        'fast': '120ms',
        'base': '200ms',
        'slow': '320ms',
        'reveal': '700ms',
      },
      transitionTimingFunction: {
        'tramar': 'cubic-bezier(0.2, 0, 0.2, 1)',
      },
      screens: {
        'sm':  '480px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
