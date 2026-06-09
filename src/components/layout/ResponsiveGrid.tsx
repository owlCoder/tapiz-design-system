import type { BaseProps } from "../../types";
import type { CSSProperties, ReactNode } from "react";

export interface ResponsiveGridProps extends BaseProps {
  children: ReactNode;
  min?: string;
  gap?: "sm" | "md" | "lg" | "xl";

  style?: CSSProperties;
}

const gapClasses = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export function ResponsiveGrid({ children, min = "18rem", gap = "md", className = "", style }: ResponsiveGridProps) {
  return (
    <div
      className={`grid ${gapClasses[gap]} ${className}`}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`, ...style }}
    >
      {children}
    </div>
  );
}
