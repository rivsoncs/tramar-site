interface BrandLogoHorizontalProps {
  className?: string;
  color?: string;
}

export function BrandLogoHorizontal({
  className = '',
  color = '#1A1F26',
}: BrandLogoHorizontalProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 260"
      className={className}
      aria-label="Tramar Muro Alto"
      role="img"
    >
      <text
        x="40"
        y="180"
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="300"
        fontSize="180"
        fill={color}
        letterSpacing="1"
      >
        Tramar
      </text>
      <line
        x1="595"
        y1="100"
        x2="595"
        y2="190"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.45"
      />
      <text
        x="620"
        y="148"
        fontFamily="var(--font-dm-sans), DM Sans, system-ui, sans-serif"
        fontWeight="300"
        fontSize="22"
        letterSpacing="6"
        fill={color}
      >
        MURO ALTO
      </text>
      <text
        x="620"
        y="178"
        fontFamily="var(--font-dm-sans), DM Sans, system-ui, sans-serif"
        fontWeight="300"
        fontSize="22"
        letterSpacing="6"
        fill={color}
      >
        PERNAMBUCO
      </text>
    </svg>
  );
}

interface BrandLogoReduzidaProps {
  className?: string;
  color?: string;
}

export function BrandLogoReduzida({
  className = '',
  color = '#1A1F26',
}: BrandLogoReduzidaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 200"
      className={className}
      aria-label="Tramar"
      role="img"
    >
      <text
        x="250"
        y="140"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="300"
        fontSize="140"
        fill={color}
        letterSpacing="1"
      >
        Tramar
      </text>
    </svg>
  );
}
