import type { BaseProps } from "../../types";
import type { CSSProperties, ReactNode } from "react";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends BaseProps {
  children: ReactNode;
  size?: ContainerSize;
  padded?: boolean;

  style?: CSSProperties;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[90rem]",
  full: "max-w-none",
};

export function Container({ children, size = "lg", padded = true, className = "", style }: ContainerProps) {
  return (
    <div
      className={["mx-auto w-full", sizeClasses[size], padded ? "px-(--tapiz-space-page-x)" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
