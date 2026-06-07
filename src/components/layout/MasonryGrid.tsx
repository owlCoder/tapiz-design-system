import type { CSSProperties, ReactNode } from "react";

export interface MasonryGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
}

const columnClasses = { 2: "md:columns-2", 3: "md:columns-2 xl:columns-3", 4: "md:columns-2 lg:columns-3 xl:columns-4" } as const;
const gapClasses = { sm: "gap-3", md: "gap-5", lg: "gap-8" } as const;

export function MasonryGrid({ children, columns = 3, gap = "md", className = "", style }: MasonryGridProps) {
  return <div className={[columnClasses[columns], gapClasses[gap], className].filter(Boolean).join(" ")} style={style}>{children}</div>;
}
