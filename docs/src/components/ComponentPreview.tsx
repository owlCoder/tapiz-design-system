import type { ReactNode } from "react";
import CodeBlock from "./CodeBlock";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  code: string;
  language?: "tsx" | "bash" | "css" | string;
  children: ReactNode;
}

export default function ComponentPreview({
  title,
  description,
  code,
  language = "tsx",
  children,
}: ComponentPreviewProps) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--color-txt-1)",
          marginBottom: description ? "0.375rem" : "1rem",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--color-txt-3)",
            marginBottom: "1rem",
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 60%",
          border: "1px solid var(--color-border)",
        }}
        className="component-preview-grid"
      >
        <div style={{ borderRight: "1px solid var(--color-border)" }}>
          <CodeBlock code={code} language={language} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: "var(--color-ink-200)",
            flexWrap: "wrap",
            gap: "0.75rem",
            minHeight: "200px",
            border: "none",
          }}
        >
          {children}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .component-preview-grid {
            grid-template-columns: 1fr !important;
          }
          .component-preview-grid > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid var(--color-border);
          }
        }
      `}</style>
    </section>
  );
}
