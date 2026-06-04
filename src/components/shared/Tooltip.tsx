import type { ReactNode } from "react";

export interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: "top" | "bottom";
  align?: "center" | "right";
  width?: string;
  wFull?: boolean;
}

export function Tooltip({ text, children, position = "top", align = "center", width = "max-w-[200px]", wFull }: TooltipProps) {
  const alignClass = align === "right" ? "right-0" : "left-1/2 -translate-x-1/2";
  return (
    <span className={`group relative inline-flex items-center${wFull ? " w-full" : ""}`}>
      {children}
      <span
        className={`pointer-events-none absolute ${alignClass} z-60 ${width} w-max px-2.5 py-1.5
          text-center text-[11px] leading-snug
          opacity-0 group-hover:opacity-100 transition-opacity duration-150
          ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"}`}
        style={{
          background: "var(--color-ink-300)",
          border: "1px solid var(--color-border-hi)",
          color: "var(--color-txt-2)",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.04em",
        }}
      >
        {text}
        <span
          className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent
            ${position === "top" ? "top-full border-t-4" : "bottom-full border-b-4"}`}
          style={position === "top"
            ? { borderTopColor: "var(--color-border-hi)" }
            : { borderBottomColor: "var(--color-border-hi)" }}
        />
      </span>
    </span>
  );
}
