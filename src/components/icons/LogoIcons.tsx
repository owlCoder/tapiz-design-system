interface LogoMarkProps {
  size?: number;
  className?: string;
  bgClassName?: string;
  bgFill?: string;
  bgOpacity?: number;
}

// Brutalist square logo – ugaone zagrade + slovo 't' sa eksponentom 'LMS'
export const LogoMark = ({
  size = 28,
  className,
}: LogoMarkProps) => (
  <svg
    width={size}
    height={size}
    className={`${className} w-[${size}px] h-[${size}px]`}
    viewBox="0 0 32 32"
    fill="none"
  >
    <rect width="32" height="32" rx="8" fill="none" />
    <path d="M5 9 L5 5 L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path d="M23 5 L27 5 L27 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path d="M5 23 L5 27 L9 27" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path d="M23 27 L27 27 L27 23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="opacity-50" />

    <g fill="currentColor">
      <rect x="15" y="10" width="2" height="14" />
      <rect x="10" y="10" width="12" height="2" />
    </g>
  </svg>
);
