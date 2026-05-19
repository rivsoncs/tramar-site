export const metadata = {
  title: 'Identidade Visual — Tramar',
  robots: 'noindex, nofollow',
};

const COLORS = [
  { name: 'Branco-cal', hex: '#F5F0E8', usage: 'Background principal, superfícies limpas' },
  { name: 'Areia-molhada', hex: '#D4C5A9', usage: 'Bordas, separadores, fundos alternativos' },
  { name: 'Tinta-grauna', hex: '#1A1F26', usage: 'Texto primário, ícones, elementos escuros' },
  { name: 'Barro-escuro', hex: '#3D2B1F', usage: 'Ênfases quentes, variação rústica' },
  { name: 'Verde-mato', hex: '#2C4A3E', usage: 'Ênfases naturais, natureza e entorno' },
  { name: 'Açúcar-mascavo', hex: '#C49A6B', usage: 'Dourado da marca, destaques cálidos' },
  { name: 'Azul-Olinda', hex: '#4A6B8A', usage: 'Tom oceânico, contraste frio suave' },
];

const LOGOS = [
  {
    file: 'tramar-muroalto-horizontal.svg',
    label: 'Horizontal — Principal',
    bg: '#F5F0E8',
    dark: false,
    aspect: '900/260',
  },
  {
    file: 'tramar-positivo-cal.svg',
    label: 'Positivo sobre Cal',
    bg: '#F0E9DC',
    dark: false,
    aspect: '900/260',
  },
  {
    file: 'tramar-negativo-grauna.svg',
    label: 'Negativo sobre Grauna',
    bg: '#1A1F26',
    dark: true,
    aspect: '900/260',
  },
  {
    file: 'tramar-areia-sobre-grauna.svg',
    label: 'Areia sobre Grauna',
    bg: '#1A1F26',
    dark: true,
    aspect: '900/260',
  },
  {
    file: 'tramar-mono-areia.svg',
    label: 'Monocromático Areia',
    bg: '#1A1F26',
    dark: true,
    aspect: '900/260',
  },
  {
    file: 'tramar-muroalto-vertical.svg',
    label: 'Vertical',
    bg: '#F5F0E8',
    dark: false,
    aspect: '500/400',
  },
  {
    file: 'tramar-reduzida.svg',
    label: 'Reduzida',
    bg: '#F5F0E8',
    dark: false,
    aspect: '500/200',
  },
  {
    file: 'tramar-monograma-t.svg',
    label: 'Monograma T',
    bg: '#F5F0E8',
    dark: false,
    aspect: '1/1',
  },
];

const SUB_BRANDS = [
  {
    name: 'Caruá',
    color: '#3D2B1F',
    colorName: 'Barro-escuro',
    files: [
      { file: 'carua-vertical.svg', label: 'Vertical', aspect: '900/460' },
      { file: 'carua-horizontal.svg', label: 'Horizontal', aspect: '900/260' },
      { file: 'carua-reduzida.svg', label: 'Reduzida', aspect: '600/200' },
    ],
  },
  {
    name: 'Renda',
    color: '#C49A6B',
    colorName: 'Açúcar-mascavo',
    files: [
      { file: 'renda-vertical.svg', label: 'Vertical', aspect: '900/460' },
      { file: 'renda-horizontal.svg', label: 'Horizontal', aspect: '900/260' },
      { file: 'renda-reduzida.svg', label: 'Reduzida', aspect: '600/200' },
    ],
  },
  {
    name: 'Inteira',
    color: '#1A1F26',
    colorName: 'Tinta-grauna',
    files: [
      { file: 'inteira-vertical.svg', label: 'Vertical', aspect: '900/460' },
      { file: 'inteira-horizontal.svg', label: 'Horizontal', aspect: '900/260' },
      { file: 'inteira-reduzida.svg', label: 'Reduzida', aspect: '600/200' },
    ],
  },
];

const PATTERNS = [
  {
    file: 'trama.svg',
    label: 'Trama',
    description: 'Abstração do tear pernambucano',
  },
  {
    file: 'renda.svg',
    label: 'Renda',
    description: 'Referência à renda filé nordestina',
  },
  {
    file: 'rede.svg',
    label: 'Rede',
    description: 'Referência às redes de pesca artesanal',
  },
];

const ICONS = [
  { file: 'piscina.svg', label: 'Piscina' },
  { file: 'varanda.svg', label: 'Varanda' },
  { file: 'ar-condicionado.svg', label: 'Ar-condicionado' },
  { file: 'wifi.svg', label: 'Wi-Fi' },
  { file: 'restaurante.svg', label: 'Restaurante' },
  { file: 'cafe.svg', label: 'Café' },
  { file: 'beach-tennis.svg', label: 'Beach Tennis' },
  { file: 'fitness.svg', label: 'Fitness' },
  { file: 'pet-place.svg', label: 'Pet Place' },
  { file: 'brinquedoteca.svg', label: 'Brinquedoteca' },
  { file: 'estacionamento.svg', label: 'Estacionamento' },
  { file: 'seguranca.svg', label: 'Segurança' },
];

const DOCS = [
  {
    file: 'index.html',
    title: 'Brand Hub',
    desc: 'Visão geral completa da identidade visual',
  },
  {
    file: 'brand-book.html',
    title: 'Brand Book',
    desc: 'Guia completo da marca: voz, tom e personalidade',
  },
  {
    file: 'arquitetura-de-marca.html',
    title: 'Arquitetura de Marca',
    desc: 'Hierarquia, sub-marcas e relacionamentos',
  },
  {
    file: 'aplicacoes-comerciais.html',
    title: 'Aplicações Comerciais',
    desc: 'Uso da marca em materiais e comunicação',
  },
  {
    file: 'brand-sheet.html',
    title: 'Brand Sheet',
    desc: 'Referência rápida — tokens, cores e tipografia',
  },
];

const s = {
  page: {
    backgroundColor: '#F5F0E8',
    fontFamily: 'var(--font-dm-sans-brand), "DM Sans", system-ui, sans-serif',
    color: '#1A1F26',
    minHeight: '100dvh',
  } as React.CSSProperties,
  header: {
    position: 'sticky' as const,
    top: 0,
    backgroundColor: 'rgba(245,240,232,0.96)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(26,31,38,0.08)',
    padding: '0 40px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '64px 40px 120px',
  },
  section: {
    marginBottom: '80px',
  },
  sectionLabel: {
    fontSize: '10px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    color: '#1A1F26',
    opacity: 0.4,
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  sectionTitle: {
    fontFamily: 'var(--font-fraunces-brand), Fraunces, Georgia, serif',
    fontSize: '32px',
    fontWeight: 300,
    color: '#1A1F26',
    margin: '0 0 32px',
    lineHeight: 1.1,
  },
  rule: {
    border: 'none',
    borderTop: '1px solid rgba(26,31,38,0.1)',
    margin: '0 0 64px',
  },
};

function Overline({ children }: { children: React.ReactNode }) {
  return (
    <p style={s.sectionLabel}>
      <span style={{ display: 'inline-block', width: '24px', height: '1px', backgroundColor: 'currentColor', opacity: 0.4 }} />
      {children}
    </p>
  );
}

export default function BrandPage() {
  return (
    <div style={s.page}>
      {/* Header */}
      <header style={s.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 200"
            style={{ width: '72px', height: 'auto' }}
            aria-label="Tramar"
          >
            <text
              x="300" y="148"
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
          <span style={{ width: '1px', height: '24px', backgroundColor: 'rgba(26,31,38,0.15)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5 }}>
            Identidade Visual
          </span>
        </div>
        <a
          href="/brand/logout"
          style={{
            fontSize: '11px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#1A1F26',
            opacity: 0.4,
            textDecoration: 'none',
            padding: '8px 0',
          }}
        >
          Sair
        </a>
      </header>

      <main style={s.main}>

        {/* ── Documentação ── */}
        <section style={s.section}>
          <Overline>01 · Documentação</Overline>
          <h2 style={s.sectionTitle}>Guias de referência</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {DOCS.map((doc) => (
              <a
                key={doc.file}
                href={`/brand-guide/${doc.file}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '24px',
                  backgroundColor: '#FDFAF5',
                  border: '1px solid rgba(26,31,38,0.1)',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: '#1A1F26',
                  transition: 'border-color 0.15s',
                }}
              >
                <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.4, margin: '0 0 10px' }}>
                  Brand Guide
                </p>
                <p style={{ fontFamily: 'var(--font-fraunces-brand), Fraunces, Georgia, serif', fontSize: '20px', fontWeight: 300, margin: '0 0 8px', lineHeight: 1.2 }}>
                  {doc.title}
                </p>
                <p style={{ fontSize: '13px', opacity: 0.55, margin: 0, lineHeight: 1.5 }}>
                  {doc.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

        <hr style={s.rule} />

        {/* ── Paleta de Cores ── */}
        <section style={s.section}>
          <Overline>02 · Paleta de Cores</Overline>
          <h2 style={s.sectionTitle}>7 tokens cromáticos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
            {COLORS.map((c) => {
              const isLight = ['#F5F0E8', '#D4C5A9', '#F0E9DC'].includes(c.hex);
              return (
                <div key={c.hex} style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(26,31,38,0.08)' }}>
                  <div
                    style={{
                      backgroundColor: c.hex,
                      height: '100px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '10px 12px',
                    }}
                  >
                    <span style={{ fontSize: '11px', fontFamily: 'monospace', color: isLight ? 'rgba(26,31,38,0.5)' : 'rgba(245,240,232,0.7)', letterSpacing: '0.04em' }}>
                      {c.hex}
                    </span>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: '#FDFAF5' }}>
                    <p style={{ fontSize: '13px', fontWeight: 500, margin: '0 0 4px', letterSpacing: '0.01em' }}>{c.name}</p>
                    <p style={{ fontSize: '11px', opacity: 0.5, margin: 0, lineHeight: 1.4 }}>{c.usage}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <hr style={s.rule} />

        {/* ── Tipografia ── */}
        <section style={s.section}>
          <Overline>03 · Tipografia</Overline>
          <h2 style={s.sectionTitle}>Sistema tipográfico</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Fraunces */}
            <div style={{ padding: '40px', backgroundColor: '#FDFAF5', border: '1px solid rgba(26,31,38,0.08)', borderRadius: '4px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.4, margin: '0 0 24px' }}>Display · Títulos</p>
              <p style={{ fontFamily: 'var(--font-fraunces-brand), Fraunces, Georgia, serif', fontSize: '64px', fontWeight: 300, margin: '0 0 8px', lineHeight: 1, color: '#1A1F26', letterSpacing: '-0.01em' }}>
                Tramar
              </p>
              <p style={{ fontFamily: 'var(--font-fraunces-brand), Fraunces, Georgia, serif', fontSize: '64px', fontWeight: 300, fontStyle: 'italic', margin: '0 0 24px', lineHeight: 1, color: '#1A1F26', letterSpacing: '-0.01em' }}>
                Caruá
              </p>
              <p style={{ fontSize: '12px', opacity: 0.5, margin: 0, lineHeight: 1.6 }}>
                <strong style={{ display: 'block', opacity: 1, marginBottom: '4px' }}>Fraunces</strong>
                Weight 300 · Optical size 9–144<br />
                Google Fonts · Serif display
              </p>
            </div>
            {/* DM Sans */}
            <div style={{ padding: '40px', backgroundColor: '#FDFAF5', border: '1px solid rgba(26,31,38,0.08)', borderRadius: '4px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.4, margin: '0 0 24px' }}>Body · Interface</p>
              <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 300, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 8px', color: '#1A1F26' }}>
                MURO ALTO · PERNAMBUCO
              </p>
              <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '16px', fontWeight: 300, margin: '0 0 8px', lineHeight: 1.6, color: '#1A1F26' }}>
                Hospitalidade pernambucanaDe quem conhece o lugar.
              </p>
              <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 400, margin: '0 0 24px', lineHeight: 1.5, opacity: 0.65 }}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
              </p>
              <p style={{ fontSize: '12px', opacity: 0.5, margin: 0, lineHeight: 1.6 }}>
                <strong style={{ display: 'block', opacity: 1, marginBottom: '4px' }}>DM Sans</strong>
                Weight 300–400 · Variable<br />
                Google Fonts · Geometric sans-serif
              </p>
            </div>
          </div>
        </section>

        <hr style={s.rule} />

        {/* ── Logos ── */}
        <section style={s.section}>
          <Overline>04 · Logos</Overline>
          <h2 style={s.sectionTitle}>8 variações da marca principal</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2px' }}>
            {LOGOS.map((logo) => (
              <div
                key={logo.file}
                style={{
                  backgroundColor: logo.bg,
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/brand-assets/logos/${logo.file}`}
                    alt={logo.label}
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '160px', objectFit: 'contain' }}
                  />
                </div>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    margin: 0,
                    color: logo.dark ? 'rgba(245,240,232,0.5)' : 'rgba(26,31,38,0.4)',
                  }}
                >
                  {logo.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr style={s.rule} />

        {/* ── Sub-marcas ── */}
        <section style={s.section}>
          <Overline>05 · Sub-marcas</Overline>
          <h2 style={s.sectionTitle}>Caruá · Renda · Inteira</h2>
          {SUB_BRANDS.map((brand) => (
            <div key={brand.name} style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: brand.color,
                    flexShrink: 0,
                  }}
                />
                <p style={{ fontSize: '13px', margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.6 }}>
                  {brand.name} · <span style={{ fontFamily: 'monospace', fontSize: '11px' }}>{brand.color}</span> {brand.colorName}
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
                {brand.files.map((f) => (
                  <div
                    key={f.file}
                    style={{
                      backgroundColor: '#FDFAF5',
                      padding: '32px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                      border: '1px solid rgba(26,31,38,0.06)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/brand-assets/sub-brands/${f.file}`}
                      alt={`${brand.name} — ${f.label}`}
                      style={{ maxWidth: '100%', height: 'auto', maxHeight: '120px', objectFit: 'contain' }}
                    />
                    <p style={{ fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0, opacity: 0.4 }}>
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <hr style={s.rule} />

        {/* ── Padrões ── */}
        <section style={s.section}>
          <Overline>06 · Padrões Visuais</Overline>
          <h2 style={s.sectionTitle}>3 texturas de marca</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {PATTERNS.map((pattern) => (
              <div key={pattern.file} style={{ border: '1px solid rgba(26,31,38,0.08)' }}>
                {/* Pattern preview — tiled via CSS background */}
                <div
                  style={{
                    height: '240px',
                    backgroundImage: `url(/brand-assets/patterns/${pattern.file})`,
                    backgroundSize: '48px 48px',
                    backgroundRepeat: 'repeat',
                    backgroundColor: '#F5F0E8',
                    opacity: 0.6,
                  }}
                />
                <div style={{ padding: '20px 24px', backgroundColor: '#FDFAF5' }}>
                  <p style={{ fontSize: '14px', fontWeight: 500, margin: '0 0 4px', letterSpacing: '0.02em' }}>{pattern.label}</p>
                  <p style={{ fontSize: '12px', opacity: 0.5, margin: 0, lineHeight: 1.5 }}>{pattern.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr style={s.rule} />

        {/* ── Ícones ── */}
        <section style={s.section}>
          <Overline>07 · Ícones</Overline>
          <h2 style={s.sectionTitle}>12 ícones funcionais</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '2px' }}>
            {ICONS.map((icon) => (
              <div
                key={icon.file}
                style={{
                  padding: '28px 16px 20px',
                  backgroundColor: '#FDFAF5',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '14px',
                  border: '1px solid rgba(26,31,38,0.06)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/brand-assets/icons/${icon.file}`}
                  alt={icon.label}
                  style={{ width: '32px', height: '32px' }}
                />
                <p style={{ fontSize: '11px', letterSpacing: '0.04em', textTransform: 'uppercase', margin: 0, opacity: 0.45, textAlign: 'center', lineHeight: 1.3 }}>
                  {icon.label}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '12px', opacity: 0.45, marginTop: '16px', lineHeight: 1.6 }}>
            Todos os ícones usam <code style={{ fontFamily: 'monospace', backgroundColor: 'rgba(26,31,38,0.06)', padding: '1px 5px', borderRadius: '2px' }}>{'stroke="currentColor"'}</code> · viewBox 24×24 · stroke-width 1.5
          </p>
        </section>

        <hr style={s.rule} />

        {/* ── Tokens ── */}
        <section style={s.section}>
          <Overline>08 · Design Tokens</Overline>
          <h2 style={s.sectionTitle}>Referência técnica</h2>
          <div style={{ padding: '32px', backgroundColor: '#FDFAF5', border: '1px solid rgba(26,31,38,0.08)', borderRadius: '4px' }}>
            <p style={{ fontSize: '14px', opacity: 0.6, margin: '0 0 24px', lineHeight: 1.6 }}>
              Os tokens de design estão disponíveis nos arquivos de código-fonte do repositório <code style={{ fontFamily: 'monospace', fontSize: '12px', backgroundColor: 'rgba(26,31,38,0.06)', padding: '1px 5px', borderRadius: '2px' }}>tramar-brand-assets</code>:
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { label: 'tokens.css', desc: 'CSS custom properties' },
                { label: 'tokens.json', desc: 'Design tokens JSON' },
                { label: 'styles/tokens.css', desc: 'Tailwind tokens (tramar-site)' },
              ].map((t) => (
                <div
                  key={t.label}
                  style={{
                    padding: '14px 20px',
                    backgroundColor: 'rgba(26,31,38,0.04)',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: '13px', fontWeight: 500 }}>{t.label}</span>
                  <span style={{ fontSize: '11px', opacity: 0.5 }}>{t.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(26,31,38,0.08)', padding: '24px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '11px', opacity: 0.35, letterSpacing: '0.05em' }}>
          Tramar Muro Alto · Identidade Visual
        </span>
        <a
          href="/brand/logout"
          style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1A1F26', opacity: 0.35, textDecoration: 'none' }}
        >
          Sair
        </a>
      </footer>
    </div>
  );
}
