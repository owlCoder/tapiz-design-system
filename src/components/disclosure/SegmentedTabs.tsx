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
  size?: "sm" | "md";
  buttonClassName?: string;
}

const sizeClasses = {
  sm: "h-9 px-3 py-0 text-xs",
  md: "h-10 px-4 py-0 text-sm",
} as const;

export function SegmentedTabs({
  items,
  activeId,
  onChange,
  size = "sm",
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
      className={`relative inline-flex w-fit max-w-full flex-wrap items-center gap-1 rounded-lg border border-border bg-ink-300 px-1.5 py-1 ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 top-1 rounded-md border border-primary-300/50 bg-primary-300/12 shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-primary-300)_8%,transparent)] transition-[left,width] duration-300 ease-out"
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
            className={`group relative z-10 inline-flex items-center gap-2 rounded-md border font-medium transition-[color,border-color,background-color,box-shadow] duration-200 ease-out ${sizeClasses[size]} ${
              active
                ? "border-transparent bg-transparent text-primary-300"
                : "border-transparent text-txt-3 hover:border-border hover:bg-ink-200 hover:text-txt-1"
            } ${buttonClassName}`}
          >
            {item.icon ? (
              <span
                className={
                  active
                    ? "text-primary-300"
                    : "text-txt-4 transition-colors duration-200 group-hover:text-txt-1"
                }
              >
                {item.icon}
              </span>
            ) : null}
            <span className="flex items-center gap-2.5">{item.label}</span>
            {item.badge ? (
              <span
                className={`inline-flex min-w-7 items-center justify-center rounded-sm border px-1.5 py-0.5 text-xs font-semibold tabular-nums ${
                  active
                    ? "border-primary-300/30 bg-primary-300/14 text-primary-300"
                    : "border-border bg-ink-200 text-txt-3"
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
