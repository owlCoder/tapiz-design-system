import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, X } from "../icons/index";

export interface ToastProps {
  message: string;
  ok: boolean;
  durationMs?: number;
}

/** Soft surface + semantic-tint icon chip, matching InfoBanner/StatusBadge's 2.0 language. */
const TONE = {
  success: {
    chipBg: "bg-(--tapiz-success-soft)",
    chipText: "text-(--tapiz-success)",
    track: "bg-(--tapiz-success)",
  },
  danger: {
    chipBg: "bg-(--tapiz-danger-soft)",
    chipText: "text-(--tapiz-danger)",
    track: "bg-(--tapiz-danger)",
  },
} as const;

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

  const tone = ok ? TONE.success : TONE.danger;

  return createPortal(
    <div className="pointer-events-none fixed bottom-20 left-4 right-4 z-9999 flex justify-center min-[600px]:bottom-auto min-[600px]:left-auto min-[600px]:right-5 min-[600px]:top-5 min-[600px]:justify-end">
      <div
        role="status"
        aria-live="polite"
        className={`${transform} pointer-events-auto relative flex w-full max-w-sm items-center gap-3 overflow-hidden rounded-xl border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) px-4 py-3 text-sm shadow-(--tapiz-shadow-md) transition-all duration-300 sm:w-auto sm:max-w-xs`}
      >
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${tone.chipBg} ${tone.chipText}`}>
          {ok ? <Check size={14} /> : <X size={14} />}
        </span>
        <span className="flex-1 text-[12px] leading-snug font-medium text-(--tapiz-text-primary) sm:text-[13px]">
          {message}
        </span>
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-(--tapiz-border-subtle)">
          <div
            className={`h-full transition-none ${tone.track}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
