import { Info, LockIcon } from "../icons/index";

interface StructuredInfoBannerProps {
  title: string;
  description: string;
  text?: never;
  variant?: never;
  className?: string;
}

interface InlineInfoBannerProps {
  text: string;
  variant?: "info" | "warn" | "lock";
  className?: string;
  title?: never;
  description?: never;
}

export type InfoBannerProps = StructuredInfoBannerProps | InlineInfoBannerProps;

export function InfoBanner(props: InfoBannerProps) {
  if ("text" in props) {
    const { text, variant = "info", className = "" } = props;
    const styles =
      variant === "warn"
        ? "bg-warn/8 border-warn/25 text-warn"
        : variant === "lock"
          ? "bg-warn/8 border-warn/30 text-warn"
          : "bg-primary-500/10 border-primary-100 text-primary-500";

    const icon = variant === "lock"
      ? <LockIcon size={14} className="mt-1 shrink-0" />
      : <Info size={14} className="mt-1 shrink-0" />;

    return (
      <div className={`flex items-start gap-2 border px-3 py-2.5 text-[13px] ${styles} ${className}`}>
        {icon}
        <p style={{ fontFamily: "var(--font-mono)" }}>{text}</p>
      </div>
    );
  }

  const { title, description, className = "" } = props;

  return (
    <div
      className={`px-4 py-3 ${className}`}
      style={{
        background: "rgba(94,231,255,0.04)",
        border: "1px solid rgba(94,231,255,0.12)",
        borderLeft: "3px solid var(--color-primary-300)",
      }}
    >
      <p
        className="mb-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-primary-300)" }}
      >
        {title}
      </p>
      <p className="font-mono text-[11px] leading-relaxed" style={{ color: "var(--color-txt-2)" }}>
        {description}
      </p>
    </div>
  );
}
