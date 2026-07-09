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
        <div className="absolute inset-0 grid place-items-center rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-overlay) backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-lg border border-(--tapiz-border-strong) bg-(--tapiz-bg-surface) px-4 py-3 text-sm text-(--tapiz-text-primary) shadow-(--tapiz-shadow-md)">
            <Spinner />
            <span>{label}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
