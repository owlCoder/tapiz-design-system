import { type ReactNode } from "react";
import CodeBlock from "./CodeBlock";

interface ComponentDemoProps {
  title: string;
  snippet: string;
  children: ReactNode;
  language?: string;
}

export default function ComponentDemo({
  title,
  snippet,
  children,
  language = "tsx",
}: ComponentDemoProps) {
  return (
    <div className="card mb-6">
      <div className="px-4 py-3 border-b border-border">
        <h3
          className="text-sm font-semibold text-txt-1 uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {title}
        </h3>
      </div>
      <div className="p-6 flex flex-wrap gap-3 items-start bg-ink-000">
        {children}
      </div>
      <CodeBlock code={snippet} language={language} />
    </div>
  );
}
