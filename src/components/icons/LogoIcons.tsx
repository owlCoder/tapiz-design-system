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
   */
  variant?: "lms" | "boards" | "playground";
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
  </svg>
);
