import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.375rem",
        padding: "0.375rem 0.75rem",
        border: "1px solid var(--color-border)",
        background: "var(--color-ink-200)",
        color: "var(--color-txt-2)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        cursor: "pointer",
        transition: "color 0.15s, border-color 0.15s",
        letterSpacing: "0.05em",
      }}
    >
      <span style={{ fontSize: "0.875rem", lineHeight: 1 }}>
        {dark ? "○" : "●"}
      </span>
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
