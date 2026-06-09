import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Badge } from "../shared/Badge";

export interface RoadmapItem {
  title: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  quarter?: ReactNode;
}

export interface RoadmapListProps extends BaseProps {
  items: RoadmapItem[];
}

export function RoadmapList({ items, className = "" }: RoadmapListProps) {
  return <div className={["grid gap-3 md:grid-cols-3", className].filter(Boolean).join(" ")}>{items.map((item, index) => <article key={index} className="border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] p-5"><div className="flex items-center justify-between gap-3"><span className="kicker">{item.quarter ?? `0${index + 1}`}</span>{item.status ? <Badge>{item.status}</Badge> : null}</div><h3 className="mt-4 font-semibold text-[var(--tapiz-text-primary)]">{item.title}</h3>{item.description ? <p className="mt-2 text-sm leading-6 text-[var(--tapiz-text-muted)]">{item.description}</p> : null}</article>)}</div>;
}
