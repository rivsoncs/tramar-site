import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body style={{ background: '#F0E9DC', color: '#1A1F26', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <div style={{ textAlign: 'left', padding: '48px', maxWidth: '480px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#A89C8A', marginBottom: '24px' }}>
            404
          </p>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontFamily: 'Georgia, serif', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.012em', marginBottom: '24px' }}>
            Página não encontrada.
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#A89C8A', marginBottom: '32px' }}>
            A página que você procura não existe ou foi removida.
          </p>
          <Link
            href="/pt-BR"
            style={{ display: 'inline-block', background: '#1A1F26', color: '#F0E9DC', fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', padding: '12px 24px', textDecoration: 'none', borderRadius: '4px' }}
          >
            Voltar ao início
          </Link>
        </div>
      </body>
    </html>
  );
}
