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

export function SubBrandLogo({ brand, color, className = '' }: SubBrandLogoProps) {
  const c = color ?? defaultColors[brand];
  const name = brandNames[brand];
  const label = ariaLabels[brand];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 460"
      className={className}
      aria-label={label}
      role="img"
    >
      <text
        x="250"
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
      <text
        x="250"
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
      <line
        x1="225"
        y1="360"
        x2="275"
        y2="360"
        stroke={c}
        strokeWidth="1.5"
        opacity="0.55"
      />
      <text
        x="250"
        y="400"
        textAnchor="middle"
        fontFamily="var(--font-dm-sans), DM Sans, system-ui, sans-serif"
        fontWeight="300"
        fontSize="18"
        letterSpacing="8"
        fill={c}
      >
        MURO ALTO · PERNAMBUCO
      </text>
    </svg>
  );
}
