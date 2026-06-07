import type { ReactNode } from "react";

export interface ClusterProps {
  children: ReactNode;
  gap?: "xs" | "sm" | "md" | "lg";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between" | "end";
  className?: string;
}

const gapClasses = { xs: "gap-1", sm: "gap-2", md: "gap-3", lg: "gap-5" };
const alignClasses = { start: "items-start", center: "items-center", end: "items-end" };
const justifyClasses = { start: "justify-start", center: "justify-center", between: "justify-between", end: "justify-end" };

export function Cluster({ children, gap = "sm", align = "center", justify = "start", className = "" }: ClusterProps) {
  return <div className={`flex flex-wrap ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}>{children}</div>;
}
