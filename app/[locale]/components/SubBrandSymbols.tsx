interface SymbolProps {
  className?: string;
  strokeColor?: string;
}

export function CaruaSymbol({ className = 'w-12 h-12', strokeColor = 'currentColor' }: SymbolProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="4.5" stroke={strokeColor} strokeWidth="1.2" />
      <path d="M50 48.5 A1.5 1.5 0 0 1 50 51.5 A1.5 1.5 0 0 1 50 48.5 Z" fill={strokeColor} />
      <path d="M50 45 C46 32 44 20 50 8 C56 20 54 32 50 45" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M50 55 C46 68 44 80 50 92 C56 80 54 68 50 55" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M55 50 C68 46 80 44 92 50 C80 56 68 54 55 50" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M45 50 C32 46 20 44 8 50 C20 56 32 54 45 50" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M53.5 46.5 C62 38 70 30 79 38 C70 48 62 40 53.5 46.5" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M46.5 53.5 C38 62 30 70 21 62 C30 52 38 60 46.5 53.5" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M46.5 46.5 C38 38 30 30 21 38 C30 48 38 40 46.5 46.5" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <path d="M53.5 53.5 C62 62 70 70 79 62 C70 52 62 60 53.5 53.5" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <circle cx="50" cy="50" r="32" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="3,3" strokeOpacity="0.4" />
      <path d="M50 25 L75 50 L50 75 L25 50 Z" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  );
}

export function RendaSymbol({ className = 'w-12 h-12', strokeColor = 'currentColor' }: SymbolProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="42" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.3" />
      <circle cx="50" cy="50" r="28" stroke={strokeColor} strokeWidth="0.8" strokeOpacity="0.3" />
      <circle cx="50" cy="50" r="14" stroke={strokeColor} strokeWidth="1" />
      <path d="M50 22 C38 22 36 50 50 50 C64 50 62 22 50 22" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M50 78 C38 78 36 50 50 50 C64 50 62 78 50 78" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M78 50 C78 38 50 36 50 50 C50 64 78 62 78 50" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M22 50 C22 38 50 36 50 50 C50 64 22 62 22 50" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M69.8 30.2 C61.3 21.7 50 50 50 50 C50 50 38.7 78.3 30.2 69.8" stroke={strokeColor} strokeWidth="0.9" />
      <path d="M30.2 30.2 C21.7 38.7 50 50 50 50 C50 50 78.3 61.3 69.8 69.8" stroke={strokeColor} strokeWidth="0.9" />
      <path d="M50 8 C42 8 46 16 50 16 C54 16 58 8 50 8 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
      <path d="M50 92 C42 92 46 84 50 84 C54 84 58 92 50 92 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
      <path d="M92 50 C92 42 84 46 50 50 C84 54 92 58 92 50 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
      <path d="M8 50 C8 42 16 46 50 50 C16 54 8 58 8 50 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
      <circle cx="50" cy="8" r="1.8" fill={strokeColor} />
      <circle cx="50" cy="92" r="1.8" fill={strokeColor} />
      <circle cx="8" cy="50" r="1.8" fill={strokeColor} />
      <circle cx="92" cy="50" r="1.8" fill={strokeColor} />
      <circle cx="21" cy="21" r="1.5" fill={strokeColor} />
      <circle cx="79" cy="79" r="1.5" fill={strokeColor} />
      <circle cx="21" cy="79" r="1.5" fill={strokeColor} />
      <circle cx="79" cy="21" r="1.5" fill={strokeColor} />
    </svg>
  );
}

export function InteiraSymbol({ className = 'w-12 h-12', strokeColor = 'currentColor' }: SymbolProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="18" stroke={strokeColor} strokeWidth="1.3" />
      <circle cx="50" cy="50" r="10" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2,2" />
      <line x1="50" y1="4" x2="50" y2="96" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="42" y1="12" x2="42" y2="88" stroke={strokeColor} strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.8" />
      <line x1="58" y1="12" x2="58" y2="88" stroke={strokeColor} strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.8" />
      <path d="M12 50 C24 44 36 56 50 50 C64 44 76 56 88 50" stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M18 58 C28 54 38 62 50 58 C62 54 72 62 82 58" stroke={strokeColor} strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.75" />
      <path d="M18 42 C28 38 38 46 50 42 C62 38 72 46 82 42" stroke={strokeColor} strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.75" />
      <circle cx="50" cy="4" r="2.5" fill={strokeColor} />
      <circle cx="50" cy="96" r="2.5" fill={strokeColor} />
      <circle cx="42" cy="12" r="1.5" fill={strokeColor} />
      <circle cx="42" cy="88" r="1.5" fill={strokeColor} />
      <circle cx="58" cy="12" r="1.5" fill={strokeColor} />
      <circle cx="58" cy="88" r="1.5" fill={strokeColor} />
    </svg>
  );
}
