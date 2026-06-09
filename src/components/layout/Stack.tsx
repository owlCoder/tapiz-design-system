import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface StackProps extends BaseProps {
  children: ReactNode;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  direction?: "vertical" | "horizontal";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "between" | "end";
  wrap?: boolean;
}

const gapClasses = { xs: "gap-1", sm: "gap-2", md: "gap-4", lg: "gap-6", xl: "gap-8" };
const alignClasses = { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch" };
const justifyClasses = { start: "justify-start", center: "justify-center", between: "justify-between", end: "justify-end" };

export function Stack({ children, gap = "md", direction = "vertical", align = "stretch", justify = "start", wrap = false, className = "" }: StackProps) {
  return (
    <div className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"} ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${wrap ? "flex-wrap" : ""} ${className}`}>
      {children}
    </div>
  );
}
