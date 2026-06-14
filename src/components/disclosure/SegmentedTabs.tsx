import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { BaseProps } from "../../types";

export interface SegmentedTabItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  badge?: ReactNode;
}

export interface SegmentedTabsProps extends BaseProps {
  items: SegmentedTabItem[];
  activeId: string;
  onChange: (id: string) => void;
  buttonClassName?: string;
}

export function SegmentedTabs({
  items,
  activeId,
  onChange,
  className = "",
  buttonClassName = "",
}: SegmentedTabsProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const activeIndex = items.findIndex((item) => item.id === activeId);
    const activeNode = refs.current[activeIndex];
    if (!activeNode) return;

    setIndicator({
      left: activeNode.offsetLeft,
      width: activeNode.offsetWidth,
    });
  }, [activeId, items]);

  return (
    <div
      className={`relative inline-flex w-fit max-w-full flex-wrap items-center gap-1 rounded-[11px] border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)] px-1.5 py-1 ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 top-1 rounded-[8px] border border-[color:color-mix(in_srgb,var(--tapiz-accent)_50%,transparent)] bg-[color:color-mix(in_srgb,var(--tapiz-accent)_12%,transparent)] shadow-[0_0_0_1px_color-mix(in_srgb,var(--tapiz-accent)_8%,transparent)] transition-[left,width] duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
      {items.map((item, index) => {
        const active = item.id === activeId;

        return (
          <button
            key={item.id}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            onClick={() => onChange(item.id)}
            className={`group relative z-10 inline-flex items-center gap-2 rounded-[8px] border px-4 py-1 text-sm font-medium transition-[color,border-color,background-color,box-shadow] duration-200 ease-out ${
              active
                ? "border-transparent bg-transparent text-[var(--tapiz-accent)]"
                : "border-transparent text-[var(--tapiz-text-muted)] hover:border-[var(--tapiz-border-subtle)] hover:bg-[var(--tapiz-bg-surface)] hover:text-[var(--tapiz-text-primary)]"
            } ${buttonClassName}`}
          >
            {item.icon ? (
              <span
                className={
                  active
                    ? "text-[var(--tapiz-accent)]"
                    : "text-[var(--tapiz-text-subtle)] transition-colors duration-200 group-hover:text-[var(--tapiz-text-primary)]"
                }
              >
                {item.icon}
              </span>
            ) : null}
            <span className="flex items-center gap-2.5">{item.label}</span>
            {item.badge ? (
              <span
                className={`inline-flex min-w-7 items-center justify-center rounded-[6px] border px-1.5 py-[2px] text-xs font-semibold tabular-nums ${
                  active
                    ? "border-[color:color-mix(in_srgb,var(--tapiz-accent)_30%,transparent)] bg-[color:color-mix(in_srgb,var(--tapiz-accent)_14%,transparent)] text-[var(--tapiz-accent)]"
                    : "border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-muted)]"
                }`}
              >
                {item.badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
