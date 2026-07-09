import type React from "react";

export interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const stroke = (size: number, style?: React.CSSProperties) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  style,
});

// 2FA glyph: smartphone with a key overlay — composite, no lucide equivalent.
export const TwoFAIcon = ({ size = 16, className, style }: IconProps) => (
  <svg {...stroke(size, style)} className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <circle cx="10" cy="10" r="1.5" />
    <line x1="11" y1="10" x2="16" y2="10" />
    <line x1="13" y1="7.5" x2="13" y2="6" />
    <line x1="15" y1="8.5" x2="15" y2="7.5" />
  </svg>
);

// QR-attendance glyph: QR finder squares + checkmark — composite domain icon.
export const NavQrAttendance = ({ size = 15, className, style }: IconProps) => (
  <svg {...stroke(size, style)} className={className} strokeWidth={1.8}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="5.5" y="5.5" width="2" height="2" rx=".4" fill="currentColor" stroke="none" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="16.5" y="5.5" width="2" height="2" rx=".4" fill="currentColor" stroke="none" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="5.5" y="16.5" width="2" height="2" rx=".4" fill="currentColor" stroke="none" />
    <polyline points="14,16 16,18 20,13" />
  </svg>
);

// Scoresheet glyph: bordered grid table — domain icon.
export const NavScoresheet = ({ size = 15, className, style }: IconProps) => (
  <svg {...stroke(size, style)} className={className} strokeWidth={1.3}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 14h18M9 9v9M15 9v9" />
  </svg>
);

// PDF document glyph (filled) — lucide has no PDF-specific icon.
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

export const GitHubIcon = ({ size = 14, className, style }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    style={style}
    className={className}
  >
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.54.12-3.2 0 0 1.01-.32 3.3 1.23a11.38 11.38 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.9.12 3.2.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.21 0 1.6-.01 2.88-.01 3.27 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
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
