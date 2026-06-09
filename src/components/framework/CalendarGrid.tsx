import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface CalendarGridDay {
  date: ReactNode;
  label?: ReactNode;
  muted?: boolean;
  selected?: boolean;
  events?: ReactNode[];
}

export interface CalendarGridProps extends BaseProps {
  days: CalendarGridDay[];
  weekdays?: ReactNode[];
}

const defaultWeekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function CalendarGrid({ days, weekdays = defaultWeekdays, className = "" }: CalendarGridProps) {
  return (
    <div className={`border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] ${className}`}>
      <div className="grid grid-cols-7 border-b border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)]">
        {weekdays.map((day, index) => <div key={index} className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--tapiz-text-muted)]">{day}</div>)}
      </div>
      <div className="grid grid-cols-7">
        {days.map((day, index) => (
          <div key={index} className={`min-h-28 border-b border-r border-[var(--tapiz-border-subtle)] p-2 ${day.muted ? "opacity-45" : ""} ${day.selected ? "bg-[var(--tapiz-accent-soft)]" : ""}`}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-[var(--tapiz-text-primary)]">{day.date}</span>
              {day.label ? <span className="text-[10px] text-[var(--tapiz-text-muted)]">{day.label}</span> : null}
            </div>
            {day.events?.length ? (
              <div className="mt-2 space-y-1">
                {day.events.map((event, eventIndex) => <div key={eventIndex} className="truncate border-l-2 border-[var(--tapiz-accent)] bg-[var(--tapiz-bg-surface-muted)] px-2 py-1 text-[11px] text-[var(--tapiz-text-secondary)]">{event}</div>)}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
