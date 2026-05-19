interface SubBrandLogoProps {
  brand: 'carua' | 'renda' | 'inteira';
  color?: string;
  className?: string;
}

const defaultColors = {
  carua:   '#6E3B2A',
  renda:   '#C49A6B',
  inteira: '#1A1F26',
};

const brandNames = {
  carua:   'Caruá',
  renda:   'Renda',
  inteira: 'Inteira',
};

const ariaLabels = {
  carua:   'Tramar Caruá',
  renda:   'Tramar Renda',
  inteira: 'Tramar Inteira',
};

// viewBox expandido para 900×460 para acomodar nomes longos como "Inteira"
// em Fraunces italic 200px (largura real ~685px centrado em x=450 cabe em 900px)
export function SubBrandLogo({ brand, color, className = '' }: SubBrandLogoProps) {
  const c = color ?? defaultColors[brand];
  const name = brandNames[brand];
  const label = ariaLabels[brand];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 460"
      className={className}
      aria-label={label}
      role="img"
    >
      {/* TRAMAR — overline */}
      <text
        x="450"
        y="100"
        textAnchor="middle"
        fontFamily="var(--font-dm-sans), DM Sans, system-ui, sans-serif"
        fontWeight="300"
        fontSize="24"
        letterSpacing="10"
        fill={c}
      >
        TRAMAR
      </text>

      {/* Nome da sub-marca — display italic */}
      <text
        x="450"
        y="310"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="300"
        fontStyle="italic"
        fontSize="200"
        fill={c}
        letterSpacing="1"
      >
        {name}
      </text>

      {/* Traço separador */}
      <line
        x1="415"
        y1="360"
        x2="485"
        y2="360"
        stroke={c}
        strokeWidth="1.5"
        opacity="0.55"
      />

      {/* MURO ALTO · PERNAMBUCO */}
      <text
        x="450"
        y="410"
        textAnchor="middle"
        fontFamily="var(--font-dm-sans), DM Sans, system-ui, sans-serif"
        fontWeight="300"
        fontSize="18"
        letterSpacing="5"
        fill={c}
        opacity="0.8"
      >
        MURO ALTO · PERNAMBUCO
      </text>
    </svg>
  );
}
