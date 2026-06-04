import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: "tsx" | "bash" | "css" | string;
}

export default function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div
      style={{
        position: "relative",
        background: "var(--color-ink-300)",
        borderLeft: "3px solid var(--color-primary-300)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8125rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.375rem 0.75rem",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-ink-300)",
        }}
      >
        <span
          style={{
            fontSize: "0.6875rem",
            color: "var(--color-txt-4)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontFamily: "var(--font-mono)",
          }}
        >
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            fontSize: "0.6875rem",
            color: copied ? "var(--color-primary-300)" : "var(--color-txt-3)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.125rem 0.375rem",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.05em",
            transition: "color 0.15s",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "1rem",
          overflowX: "auto",
          color: "var(--color-txt-2)",
          lineHeight: 1.6,
          whiteSpace: "pre",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
