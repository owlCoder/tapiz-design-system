import { ReactNode, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "../icons/index";

export interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  /** Optional sticky footer area (e.g. submit/cancel buttons). */
  footer?: ReactNode;
  children: ReactNode;
  width?: "md" | "lg" | "xl";
  /** Side the panel slides in from. Defaults to "right". */
  side?: "left" | "right";
  closeLabel?: string;
}

// Max width in rem per size. Applied via inline style (not a Tailwind class) so the
// panel is not full-width even when the consuming app does not scan this dist with
// Tailwind's `@source` — the responsive `sm:max-w-*` utilities would otherwise be
// purged and the panel would span the whole viewport.
const widthRem: Record<NonNullable<SidePanelProps["width"]>, number> = {
  md: 28,
  lg: 42,
  xl: 48,
};

const MOBILE_QUERY = "(max-width: 639px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// Single source of truth for enter/exit timing. The slide transition and the
// unmount timer share this duration so open and close feel identical and the
// panel never unmounts before the exit transition finishes.
const TRANSITION_MS = 240;
const TRANSITION_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Right-side slide-in panel for create/edit forms — the panel counterpart to BaseModal.
 * Enter/exit use CSS transitions (translate + opacity): deterministic, no keyframe replay
 * flash; the panel unmounts after the exit transition. On mobile it goes full-width and
 * locks body scroll. Decoupled from app i18n — pass `closeLabel` for the close button.
 */
export function SidePanel({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  footer,
  children,
  width = "md",
  side = "right",
  closeLabel = "Close panel",
}: SidePanelProps) {
  const titleId = useId();
  const [mounted, setMounted] = useState(isOpen);
  const [shown, setShown] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches,
  );
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches,
  );
  // Sync during render (React pattern, avoids setState-in-effect).
  if (isOpen && !mounted) setMounted(true);
  if (!isOpen && shown) setShown(false);

  useEffect(() => {
    if (isOpen) {
      // Double rAF: first paint must render the hidden state before transitioning.
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(raf);
    }
    const timer = setTimeout(() => setMounted(false), TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const mobileMq = window.matchMedia(MOBILE_QUERY);
    const motionMq = window.matchMedia(REDUCED_MOTION_QUERY);
    const sync = () => {
      setIsMobile(mobileMq.matches);
      setReduceMotion(motionMq.matches);
    };
    sync();
    mobileMq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);
    return () => {
      mobileMq.removeEventListener("change", sync);
      motionMq.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement.style.overflow;
    const body = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = html;
      document.body.style.overflow = body;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  // Transform/transition applied inline (not Tailwind) so the GPU-composited slide works
  // in any consumer regardless of its Tailwind `@source` scan; reduced-motion disables it.
  const hiddenOffset = side === "right" ? "100%" : "-100%";
  const panelStyle: React.CSSProperties = {
    maxWidth: isMobile ? "100%" : `${widthRem[width]}rem`,
    transform: shown ? "translateX(0)" : `translateX(${hiddenOffset})`,
    transition: reduceMotion ? "none" : `transform ${TRANSITION_MS}ms ${TRANSITION_EASE}`,
    willChange: "transform",
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={`fixed inset-0 z-50 flex bg-[rgba(5,6,8,0.75)] backdrop-blur-[2px] ${
        side === "right" ? "justify-end" : "justify-start"
      } ${shown ? "opacity-100" : "opacity-0"}`}
      style={{ transition: reduceMotion ? "none" : `opacity ${TRANSITION_MS}ms ${TRANSITION_EASE}` }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`flex h-full max-sm:h-dvh w-full flex-col overflow-hidden border-t-2 border-t-primary-300 bg-ink-200 ${
          side === "right" ? "border-l border-border-hi max-sm:border-l-0" : "border-r border-border-hi max-sm:border-r-0"
        }`}
        style={panelStyle}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            {icon && (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-ink-300 border border-border-hi text-primary-300">
                {icon}
              </div>
            )}
            <div className="min-w-0">
              <h3 id={titleId} className="truncate font-display text-[15px] font-semibold text-txt-1">{title}</h3>
              {subtitle && (
                <p className="mt-0.5 truncate font-mono text-[10px] tracking-widest text-primary-300">{subtitle}</p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            title={closeLabel}
            className="flex h-8 w-8 shrink-0 items-center justify-center border border-transparent text-txt-3 transition-colors hover:border-border-hi hover:text-txt-1"
          >
            <X size={16} />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5">{children}</div>
        {footer && <div className="shrink-0 border-t border-border px-4 py-3 sm:px-5">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
