import type { CSSProperties, ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "", hover = false, style }: CardProps) {
  return (
    <div className={`card ${hover ? "card-hover transition-all" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: CardSectionProps) {
  return <div className={`border-b border-border px-5 py-3 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }: CardSectionProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
