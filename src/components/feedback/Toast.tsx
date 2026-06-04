import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, X } from "../icons/index";

export interface ToastProps {
  message: string;
  ok: boolean;
  durationMs?: number;
}

export function Toast({ message, ok, durationMs = 5000 }: ToastProps) {
  const [progress, setProgress] = useState(100);
  const [visible, setVisible] = useState(false);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      setProgress(Math.max(0, 100 - (elapsed / durationMs) * 100));
      if (elapsed < durationMs) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [durationMs]);

  const transform = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-2 sm:translate-x-4 sm:translate-y-0";

  const borderColor = ok ? "var(--color-good)" : "var(--color-warn)";
  const accentColor = ok ? "var(--color-good)" : "var(--color-warn)";

  return createPortal(
    <div className="pointer-events-none fixed bottom-20 left-4 right-4 z-60 flex justify-center sm:bottom-auto sm:left-auto sm:right-5 sm:top-5 sm:justify-end">
      <div
        className={`${transform} pointer-events-auto relative flex w-full max-w-sm items-center gap-2.5 overflow-hidden px-4 py-3 text-sm font-medium transition-all duration-300 sm:w-auto sm:max-w-xs`}
        style={{
          background: "var(--color-ink-300)",
          border: `1px solid ${borderColor}`,
          borderLeft: `3px solid ${borderColor}`,
          color: "var(--color-txt-1)",
        }}
      >
        <span className="flex h-5 w-5 shrink-0 items-center justify-center" style={{ color: accentColor }}>
          {ok ? <Check size={12} /> : <X size={12} />}
        </span>
        <span className="flex-1 text-[12px] leading-snug sm:text-[13px]" style={{ fontFamily: "var(--font-mono)" }}>
          {message}
        </span>
        <div
          className="absolute bottom-0 left-0 h-0.5 transition-none"
          style={{ width: `${progress}%`, background: accentColor }}
        />
      </div>
    </div>,
    document.body,
  );
}
