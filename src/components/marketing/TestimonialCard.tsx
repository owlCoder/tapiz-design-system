import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Avatar } from "../shared/Avatar";

export interface TestimonialCardProps extends BaseProps {
  quote: ReactNode;
  author: string;
  role?: ReactNode;
  avatarSrc?: string;

  variant?: "surface";
}

export function TestimonialCard({ quote, author, role, avatarSrc, className = "" }: TestimonialCardProps) {
  return (
    <figure className={`rounded-lg border bg-(--tapiz-bg-surface) p-5 border-(--tapiz-border-subtle) shadow-(--tapiz-shadow-sm) ${className}`}>
      <blockquote className="text-base leading-7 text-(--tapiz-text-secondary)">“{quote}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <Avatar name={author} src={avatarSrc} size="sm" />
        <span>
          <span className="block text-sm font-semibold text-(--tapiz-text-primary)">{author}</span>
          {role ? <span className="block text-xs text-(--tapiz-text-muted)">{role}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}
