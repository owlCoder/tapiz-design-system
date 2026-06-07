import type { ReactNode } from "react";
import { Accordion } from "../disclosure/Accordion";

export interface FAQItem {
  question: ReactNode;
  answer: ReactNode;
}

export interface FAQSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  items: FAQItem[];
  className?: string;
}

export function FAQSection({ title = "Frequently asked questions", description, items, className = "" }: FAQSectionProps) {
  return <section className={className}><div className="mb-6 max-w-2xl"><div className="kicker">FAQ</div><h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[var(--tapiz-text-primary)]">{title}</h2>{description ? <p className="mt-2 text-sm leading-6 text-[var(--tapiz-text-muted)]">{description}</p> : null}</div><Accordion items={items.map((item, index) => ({ id: `faq-${index}`, title: item.question, content: item.answer }))} /></section>;
}
