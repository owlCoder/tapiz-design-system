import { IconProps, base } from "./BaseIcons";

export const FormIcon = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 7h8M8 11h8M8 15h5" />
  </svg>
);

export const CalendarWeek = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

export const CalendarMonth = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <rect x="7" y="14" width="4" height="4" rx="0.5" />
    <rect x="13" y="14" width="4" height="4" rx="0.5" />
    <rect x="7" y="18" width="4" height="2" rx="0.5" />
    <rect x="13" y="18" width="4" height="2" rx="0.5" />
  </svg>
);

export const NumberIcon = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <text x="4" y="18" fontSize="18" fontWeight="bold" fill="currentColor" stroke="none">12</text>
  </svg>
);

export const TextIcon = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <text x="6" y="18" fontSize="20" fontWeight="bold" fill="currentColor" stroke="none">T</text>
  </svg>
);

export const FormulaIcon = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <text x="3" y="16" fontSize="20" fontWeight="bold" fill="currentColor" stroke="none">ƒ</text>
    <text x="12" y="16" fontSize="16" fill="currentColor" stroke="none">x</text>
  </svg>
);
