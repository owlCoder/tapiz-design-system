import { IconProps, base } from "./BaseIcons";

export const Edit = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

export const Trash = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2" />
  </svg>
);

export const Plus = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const Download = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const Refresh = ({ size = 15, className, spinning, style }: IconProps & { spinning?: boolean }) => (
  <svg {...base(null, size, style)} className={`${spinning ? "animate-spin" : ""} ${className ?? ""}`}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

export const UserPlus = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="22" y1="11" x2="16" y2="11" />
  </svg>
);

export const UserMinus = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="22" y1="11" x2="16" y2="11" />
  </svg>
);

export const UserCog = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <circle cx="19" cy="19" r="2" />
    <path d="M19 15v2M19 21v2M15.27 16.27l1.42 1.42M22.31 21.31l-1.42-1.42M15 19h2M21 19h2M15.27 21.73l1.42-1.42M22.31 16.69l-1.42 1.42" />
  </svg>
);

export const Check = ({ size = 16, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const X = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2.5} className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


export const Menu = ({ size = 18, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const Grid = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

export const GitCompare = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} strokeWidth={2} className={className}>
    <path d="M18 21l4-4-4-4" />
    <path d="M6 21l-4-4 4-4" />
    <path d="M14 3l4 4-4 4" />
    <path d="M2 21V3a2 2 0 0 1 2-2h6" />
    <path d="M22 21V7a2 2 0 0 0-2-2h-6" />
  </svg>
);
export const History = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </svg>
);

export const RotateCcw = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

export const Pdf = ({ size = 14, className, style }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1920 1920"
    fill="currentColor"
    style={style}
    className={className}
  >
    <g fillRule="evenodd">
      <path d="M1251.654 0c44.499 0 88.207 18.07 119.718 49.581l329.223 329.224c31.963 31.962 49.581 74.54 49.581 119.717V1920H169V0Zm-66.183 112.941H281.94V1807.06h1355.294V564.706H1185.47V112.94Zm112.94 23.379v315.445h315.445L1298.412 136.32Z"/>
      <path d="M900.497 677.67c26.767 0 50.372 12.65 67.991 37.835 41.901 59.068 38.965 121.976 23.492 206.682-5.308 29.14.113 58.617 16.263 83.125 22.814 34.786 55.68 82.673 87.981 123.219 23.718 29.93 60.198 45.854 97.13 40.885 23.718-3.276 52.292-5.986 81.656-5.986 131.012 0 121.186 46.757 133.045 89.675 6.55 25.976 3.275 48.678-10.165 65.506-16.715 22.701-51.162 34.447-101.534 34.447-55.793 0-74.202-9.487-122.767-24.96-27.445-8.81-55.906-10.617-83.69-3.275-55.453 14.456-146.936 36.48-223.284 46.983-40.772 5.647-77.816 26.654-102.438 60.875-55.454 76.8-106.842 148.518-188.273 148.518-21.007 0-40.32-7.567-56.244-22.701-23.492-23.492-33.544-49.581-28.574-79.85 13.778-92.95 128.075-144.79 196.066-182.625 16.037-8.923 28.687-22.589 36.592-39.53l107.86-233.223c7.68-16.377 10.051-34.56 7.228-52.518-12.537-79.059-31.06-211.99 18.748-272.075 10.955-13.44 26.09-21.007 42.917-21.007Zm20.556 339.953c-43.257 126.607-119.718 264.282-129.996 280.32 92.273-43.37 275.916-65.28 275.916-65.28-92.386-88.998-145.92-215.04-145.92-215.04Z"/>
    </g>
  </svg>
);

export const Printer = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M6 9V3h12v6" />
    <path d="M6 21h12v-6H6v6z" />
    <path d="M18 9H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" />
    <circle cx="17" cy="13" r="1" />
    <path d="M8 13h3" />
  </svg>
);

export const ExternalLink = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const Image = ({ size = 14, className, style }: IconProps) => (
  <svg {...base(null, size, style)} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

export const Star = ({ size = 14, className, style }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={style}
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const AppleIcon = ({ size = 20, className, style }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 814 1000"
    fill="currentColor"
    style={style}
    className={className}
  >
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-38.8-155.8-103.2C115.1 757.2 61.9 645.7 61.9 540.4c0-168.3 109.8-257.3 217.3-257.3 59.7 0 109.7 39.9 147.6 39.9 36 0 92.8-42.3 158.8-42.3 25.7 0 108.2 2.6 168.3 78.2zm-104.5-166.2c31.4-37.9 54.3-91.1 54.3-144.3 0-7.1-.6-14.3-1.9-20.1-51.5 1.9-112.4 34.3-149.6 77.2-28.8 32.1-55.8 85.9-55.8 140.3 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 46.5 0 102.8-31.4 137.5-72.5z" />
  </svg>
);

export const GooglePlayIcon = ({ size = 20, className, style }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="currentColor"
    style={style}
    className={className}
  >
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.4 1.4 247.2-247v-5.8L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.8 17.1-25.9.8-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);
