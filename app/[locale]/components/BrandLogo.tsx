interface BrandLogoHorizontalProps {
  className?: string;
  color?: string;
}

// viewBox 900×260: "Tramar" em 180px ocupa ~475px (x=40→515), cabe com folga.
// "PERNAMBUCO" em 22px a partir de x=620 ocupa ~190px → x=810. Cabe em 900px.
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
        y="195"
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="300"
        fontSize="180"
        fill={color}
        letterSpacing="1"
      >
        <tspan fontStyle="italic">T</tspan>ramar
      </text>
      <line
        x1="596"
        y1="110"
        x2="596"
        y2="200"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.35"
      />
      <text
        x="622"
        y="152"
        fontFamily="var(--font-dm-sans), DM Sans, system-ui, sans-serif"
        fontWeight="300"
        fontSize="22"
        letterSpacing="6"
        fill={color}
      >
        MURO ALTO
      </text>
      <text
        x="622"
        y="182"
        fontFamily="var(--font-dm-sans), DM Sans, system-ui, sans-serif"
        fontWeight="300"
        fontSize="22"
        letterSpacing="6"
        fill={color}
        opacity="0.65"
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

// viewBox expandido para 600×200 para dar folga ao "Tramar" em fontSize=130
// (largura estimada ~450px centrado em 300, margem de ~75px de cada lado)
export function BrandLogoReduzida({
  className = '',
  color = '#1A1F26',
}: BrandLogoReduzidaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 200"
      className={className}
      aria-label="Tramar"
      role="img"
    >
      <text
        x="300"
        y="148"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Fraunces, Georgia, serif"
        fontWeight="300"
        fontSize="130"
        fill={color}
        letterSpacing="1"
      >
        <tspan fontStyle="italic">T</tspan>ramar
      </text>
    </svg>
  );
}
