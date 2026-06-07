import type { ReactNode } from "react";

export interface SplitPaneProps {
  primary: ReactNode;
  secondary: ReactNode;
  ratio?: "50/50" | "60/40" | "70/30";
  reverseOnMobile?: boolean;
  className?: string;
}

const ratios = {
  "50/50": "lg:grid-cols-2",
  "60/40": "lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)]",
  "70/30": "lg:grid-cols-[minmax(0,7fr)_minmax(280px,3fr)]",
};

export function SplitPane({ primary, secondary, ratio = "60/40", reverseOnMobile = false, className = "" }: SplitPaneProps) {
  return (
    <div className={`grid gap-5 ${ratios[ratio]} ${className}`}>
      <div className={reverseOnMobile ? "order-2 lg:order-1" : ""}>{primary}</div>
      <div className={reverseOnMobile ? "order-1 lg:order-2" : ""}>{secondary}</div>
    </div>
  );
}
