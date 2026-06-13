interface LogoMarkProps {
  size?: number;
  className?: string;
  bgClassName?: string;
  bgFill?: string;
  bgOpacity?: number;
  /**
   * Product glyph:
   * - "lms" = T monogram
   * - "boards" = kanban columns
   * - "playground" = T + shell prompt `>_` (SQL/terminal)
   * - "whiteboard" = tabla sa skiciranim potezom
   * - "cloud" = oblak sa T monogramom (Tapiz Cloud Platform / status)
   */
  variant?: "lms" | "boards" | "playground" | "whiteboard" | "cloud";
}

// Solid teal tile with white product glyph in negative space.
// LMS = T monogram, Boards = kanban columns, Playground = T + shell `>_`.
export const LogoMark = ({
  size = 28,
  className,
  bgClassName,
  bgFill = "#1496b3",
  bgOpacity = 1,
  variant = "lms",
}: LogoMarkProps) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 64 64"
    fill="none"
  >
    <rect width="64" height="64" rx="14" fill={bgFill} opacity={bgOpacity} className={bgClassName} />
    {variant === "lms" && (
      <g fill="#fff">
        <rect x="14" y="14" width="36" height="10" rx="3" />
        <rect x="27" y="14" width="10" height="36" rx="3" />
      </g>
    )}
    {variant === "boards" && (
      <g fill="#fff">
        <rect x="13" y="15" width="10" height="26" rx="5" />
        <rect x="27" y="15" width="10" height="34" rx="5" />
        <rect x="41" y="15" width="10" height="20" rx="5" />
      </g>
    )}
    {variant === "playground" && (
      <>
        {/* Veliko "T" (Tapiz). */}
        <g fill="#fff">
          <rect x="13" y="12" width="38" height="9" rx="3" />
          <rect x="27" y="12" width="10" height="30" rx="3" />
        </g>
        {/* Shell prompt `>_`: chevron (signal žuta) + kursor (belo). */}
        <path
          d="M16 46 L23 51 L16 56"
          stroke="#d4ff3a"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="30" y="52.5" width="14" height="4.5" rx="2.25" fill="#fff" />
      </>
    )}
    {variant === "whiteboard" && (
      <>
        {/* Tabla (okvir) + skicirani potez sa čvorovima. */}
        <rect x="12" y="15" width="40" height="28" rx="4" fill="#fff" />
        <path
          d="M19 35 C24 24, 30 24, 33 31 C35.5 37, 41 36, 45 27"
          stroke="#1496b3"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="19" cy="35" r="2.6" fill="#1496b3" />
        <circle cx="45" cy="27" r="2.6" fill="#d4ff3a" />
        {/* Nožice table. */}
        <path
          d="M22 43 L19 51 M42 43 L45 51"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    )}
    {variant === "cloud" && (
      <>
        {/* Oblak silueta (belo). */}
        <path
          fill="#fff"
          d="M23 45 q-4.6 0-7.8-3.2Q12 38.6 12 34 q0-3.95 2.5-7 2.5-3.05 6.4-3.83 1.05-4.25 4.6-6.91Q29.05 13.6 33.7 13.6 q5.75 0 9.78 3.9 4.03 3.9 4.22 9.52 3.26.29 5.38 2.69 2.12 2.4 2.12 5.63 0 3.58-2.56 6.11T46 47 H23Z"
        />
        {/* T monogram u oblaku (teal). */}
        <g fill="#1496b3">
          <rect x="25" y="30" width="16" height="3.6" rx="1.6" />
          <rect x="31.2" y="30" width="3.6" height="12" rx="1.6" />
        </g>
      </>
    )}
  </svg>
);
