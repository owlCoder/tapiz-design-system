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
    <div className={`border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) ${className}`}>
      <div className="grid grid-cols-7 border-b border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface-muted)">
        {weekdays.map((day, index) => <div key={index} className="px-3 py-2 text-[11px] font-medium text-(--tapiz-text-muted)">{day}</div>)}
      </div>
      <div className="grid grid-cols-7">
        {days.map((day, index) => (
          <div key={index} className={`min-h-28 border-b border-r border-(--tapiz-border-subtle) p-2 ${day.muted ? "opacity-45" : ""} ${day.selected ? "bg-(--tapiz-accent-soft)" : ""}`}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-(--tapiz-text-primary)">{day.date}</span>
              {day.label ? <span className="text-[10px] text-(--tapiz-text-muted)">{day.label}</span> : null}
            </div>
            {day.events?.length ? (
              <div className="mt-2 space-y-1">
                {day.events.map((event, eventIndex) => <div key={eventIndex} className="truncate border-l-2 border-(--tapiz-accent) bg-(--tapiz-bg-surface-muted) px-2 py-1 text-[11px] text-(--tapiz-text-secondary)">{event}</div>)}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
