interface LogoMarkProps {
  size?: number;
  className?: string;
  bgClassName?: string;
  bgFill?: string;
  bgOpacity?: number;
  /** Product glyph: "lms" = T monogram, "boards" = kanban columns */
  variant?: "lms" | "boards";
}

// Solid teal tile with white product glyph in negative space.
// LMS = T monogram, Boards = kanban columns — same tile, different glyph.
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
    {variant === "lms" ? (
      <g fill="#fff">
        <rect x="14" y="14" width="36" height="10" rx="3" />
        <rect x="27" y="14" width="10" height="36" rx="3" />
      </g>
    ) : (
      <g fill="#fff">
        <rect x="13" y="15" width="10" height="26" rx="5" />
        <rect x="27" y="15" width="10" height="34" rx="5" />
        <rect x="41" y="15" width="10" height="20" rx="5" />
      </g>
    )}
  </svg>
);
