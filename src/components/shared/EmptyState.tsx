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
    <div className="rounded-lg border border-border bg-ink-200 px-4 py-10 text-center">
      <div className="mb-3 flex justify-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint-lavender text-primary-300">
          {icon ?? <Info size={20} />}
        </span>
      </div>
      <p className="text-[13px] font-semibold text-txt-3">{resolvedTitle}</p>
      {description ? (
        <p className="mt-1 text-[12px] text-txt-4">{description}</p>
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
    <div className="rounded-lg border border-warn bg-ink-200 px-4 py-10 text-center">
      <div className="mb-3 flex justify-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint-peach text-warn">
          <Info size={20} />
        </span>
      </div>
      <p className="text-[13px] font-semibold text-warn">{title}</p>
      {error ? <p className="mt-1 text-[12px] text-txt-3">{error.message}</p> : null}
    </div>
  );
}
