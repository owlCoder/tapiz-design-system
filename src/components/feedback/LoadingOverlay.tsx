import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Spinner } from "./Spinner";

export interface LoadingOverlayProps extends BaseProps {
  visible?: boolean;
  label?: ReactNode;
  children: ReactNode;
}

export function LoadingOverlay({ visible = false, label = "Loading", children, className = "" }: LoadingOverlayProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      {visible ? (
        <div className="absolute inset-0 grid place-items-center rounded-lg border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-overlay)] backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-lg border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] px-4 py-3 text-sm text-[var(--tapiz-text-primary)] shadow-[var(--tapiz-shadow-md)]">
            <Spinner />
            <span>{label}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
