import { IconProps, base } from "./BaseIcons";

export const Alert = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const Info = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const CheckCircle = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const Ban = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);

export const ArrowRight = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const ArrowLeft = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export const ChevronLeft = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRight = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const ChevronDown = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronUp = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export const Search = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

export const Bell = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const Shield = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const Copy = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const Repeat = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

export const FileText = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export const Trophy = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export const Monitor = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export const Smartphone = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

export const Tablet = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

// Aktivnost – linija otkucaja (pulse)
export const ActivityMenu = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="8" width="3" height="8" rx="1" />
    <rect x="9" y="4" width="3" height="16" rx="1" />
    <rect x="15" y="6" width="3" height="12" rx="1" />
  </svg>
);
// Poređenje – dva stuba sa strelicama za upoređivanje
export const Compare = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="3" width="12" height="12" rx="1.5" fill="none" />
    <rect x="9" y="9" width="12" height="12" rx="1.5" fill="none" />
    <line x1="3" y1="21" x2="21" y2="3" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
  </svg>
);

// Presečni status – Venn dijagram (dva presječena kruga)
export const Intersect = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.75}>
    <circle cx="9" cy="12" r="6" />
    <circle cx="15" cy="12" r="6" />
  </svg>
);

export const Megaphone = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.75}>
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);
