import { loginAction } from './actions';

export const metadata = {
  title: 'Acesso Restrito — Tramar',
  robots: 'noindex, nofollow',
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const hasError = searchParams?.error === '1';

  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F0E8',
        fontFamily: '"DM Sans", system-ui, sans-serif',
        padding: '24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 200"
          style={{ width: '120px', height: 'auto', marginBottom: '32px' }}
          aria-label="Tramar"
        >
          <text
            x="300"
            y="148"
            textAnchor="middle"
            fontFamily="Fraunces, Georgia, serif"
            fontWeight="300"
            fontSize="130"
            fill="#1A1F26"
            letterSpacing="1"
          >
            Tramar
          </text>
        </svg>

        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#1A1F26',
            opacity: 0.5,
            marginBottom: '40px',
            margin: '0 0 40px',
          }}
        >
          Identidade Visual · Acesso Restrito
        </p>

        <form
          action={loginAction}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <input
            type="password"
            name="password"
            placeholder="Senha de acesso"
            required
            autoFocus
            style={{
              width: '100%',
              padding: '14px 16px',
              fontSize: '14px',
              fontFamily: '"DM Sans", system-ui, sans-serif',
              border: '1px solid rgba(26,31,38,0.18)',
              borderRadius: '4px',
              backgroundColor: '#FDFAF5',
              color: '#1A1F26',
              outline: 'none',
              boxSizing: 'border-box',
              letterSpacing: '0.02em',
            }}
          />

          {hasError && (
            <p
              style={{
                fontSize: '13px',
                color: '#8B3A3A',
                margin: '0',
                letterSpacing: '0.02em',
              }}
              role="alert"
            >
              Senha incorreta. Tente novamente.
            </p>
          )}

          <button
            type="submit"
            style={{
              padding: '14px 24px',
              fontSize: '12px',
              fontFamily: '"DM Sans", system-ui, sans-serif',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              backgroundColor: '#1A1F26',
              color: '#F5F0E8',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 400,
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
