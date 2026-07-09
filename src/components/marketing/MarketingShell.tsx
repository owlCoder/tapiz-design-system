import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface MarketingShellProps extends BaseProps {
  children: ReactNode;

  grid?: boolean;
  noise?: boolean;
}

export function MarketingShell({ children, className = "", grid = true, noise = true }: MarketingShellProps) {
  return (
    <main
      className={[
        "min-h-screen overflow-hidden bg-(--tapiz-bg-page) text-(--tapiz-text-primary)",
        grid ? "tapiz-grid-bg" : "",
        noise ? "tapiz-noise-bg" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </main>
  );
}
