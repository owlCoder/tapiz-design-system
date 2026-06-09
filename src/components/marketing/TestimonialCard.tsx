import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Avatar } from "../shared/Avatar";

export interface TestimonialCardProps extends BaseProps {
  quote: ReactNode;
  author: string;
  role?: ReactNode;
  avatarSrc?: string;

  variant?: "surface" | "brutal";
}

export function TestimonialCard({ quote, author, role, avatarSrc, className = "", variant = "surface" }: TestimonialCardProps) {
  return (
    <figure className={`border bg-[var(--tapiz-bg-surface)] p-5 ${variant === "brutal" ? "border-2 border-[var(--tapiz-border-strong)] shadow-[var(--tapiz-shadow-brutal)]" : "border-[var(--tapiz-border-subtle)] shadow-[var(--tapiz-shadow-sm)]"} ${className}`}>
      <blockquote className="text-base leading-7 text-[var(--tapiz-text-secondary)]">“{quote}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <Avatar name={author} src={avatarSrc} size="sm" />
        <span>
          <span className="block text-sm font-semibold text-[var(--tapiz-text-primary)]">{author}</span>
          {role ? <span className="block text-xs text-[var(--tapiz-text-muted)]">{role}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}
