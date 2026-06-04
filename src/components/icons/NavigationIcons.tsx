import { IconProps, base } from "./BaseIcons";

export const Clipboard = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
  </svg>
);

export const Home = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const Scan = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
    <line x1="7" y1="12" x2="17" y2="12" />
  </svg>
);

export const Users = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const Book = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export const Calendar = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const CheckSquare = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

export const BarChart = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

export const Table = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

export const Report = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export const QrCode = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 17h3" />
  </svg>
);

export const Layers = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

export const OfficeHours = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M8 3h8" />
    <path d="M9 2v2M15 2v2" />
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M4 10h16" />
    <path d="M12 13v4" />
    <path d="M12 13l2.5-1.5" />
  </svg>
);

export const FileUpload = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="12 18 12 12" />
    <polyline points="9 15 12 12 15 15" />
  </svg>
);

export const University = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M12 3l9 3H3l9-3z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="5" y1="6" x2="5" y2="18" />
    <line x1="10" y1="6" x2="10" y2="18" />
    <line x1="14" y1="6" x2="14" y2="18" />
    <line x1="19" y1="6" x2="19" y2="18" />
    <line x1="2" y1="18" x2="22" y2="18" />
    <line x1="2" y1="21" x2="22" y2="21" />
  </svg>
);

export const Faculty = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.5}>
    {/* central tower */}
    <rect x="7" y="2" width="10" height="19" />
    {/* left wing */}
    <rect x="2" y="8" width="5" height="13" />
    {/* right wing */}
    <rect x="17" y="8" width="5" height="13" />
    {/* tower windows row 1 */}
    <rect x="9" y="4" width="2.5" height="2.5" />
    <rect x="12.5" y="4" width="2.5" height="2.5" />
    {/* tower windows row 2 */}
    <rect x="9" y="8" width="2.5" height="2.5" />
    <rect x="12.5" y="8" width="2.5" height="2.5" />
    {/* entrance */}
    <rect x="10" y="15" width="4" height="6" />
    {/* base line */}
    <line x1="1" y1="21" x2="23" y2="21" />
  </svg>
);

export const GraduationCap = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
  </svg>
);

export const Globe = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const CreditCard = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.8}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

export const HelpCircle = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.8}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <circle cx="12" cy="17" r=".5" fill="currentColor" stroke="none" />
  </svg>
);

export const NavQrAttendance = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.8}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="5.5" y="5.5" width="2" height="2" rx=".4" fill="currentColor" stroke="none" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="16.5" y="5.5" width="2" height="2" rx=".4" fill="currentColor" stroke="none" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="5.5" y="16.5" width="2" height="2" rx=".4" fill="currentColor" stroke="none" />
    <polyline points="14,16 16,18 20,13" />
  </svg>
);

export const NavScoresheet = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.3}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 14h18M9 9v9M15 9v9" />
  </svg>
);

export const NavAnalytics = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.8}>
    <path d="M3 3v18h18" /><path d="M7 16l4-5 4 3 5-6" />
  </svg>
);

export const NavSecurity = ({ size = 15, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className} strokeWidth={1.8}>
    <path d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6L12 2Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
