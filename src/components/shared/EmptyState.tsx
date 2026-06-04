import type { ReactNode } from "react";
import { Info } from "../icons/index";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  message?: string;
  icon?: ReactNode;
}

export function EmptyState({ title, description, message, icon }: EmptyStateProps) {
  const resolvedTitle = title ?? message ?? "No data";

  return (
    <div className="border border-border bg-ink-200 px-4 py-10 text-center">
      <div className="mb-2 flex justify-center text-txt-4">
        {icon ?? <Info size={22} />}
      </div>
      <p className="font-mono text-[11px] tracking-widest text-txt-4">{resolvedTitle}</p>
      {description ? (
        <p className="mt-1 font-mono text-[10px] text-txt-4 opacity-70">{description}</p>
      ) : null}
    </div>
  );
}

export function ErrorState({
  title = "Failed to load",
  error,
}: {
  title?: string;
  error: Error | null;
}) {
  return (
    <div className="border border-warn bg-ink-200 px-4 py-10 text-center">
      <div className="mb-2 flex justify-center text-warn">
        <Info size={22} />
      </div>
      <p className="font-mono text-[11px] tracking-widest text-warn">{title}</p>
      {error ? <p className="mt-1 font-mono text-[10px] text-txt-3">{error.message}</p> : null}
    </div>
  );
}
