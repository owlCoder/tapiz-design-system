import type { BaseProps } from "../../types";
import { Info, LockIcon } from "../icons/index";

interface StructuredInfoBannerProps extends BaseProps {
  title: string;
  description: string;
  text?: never;
  variant?: never;
}

interface InlineInfoBannerProps extends BaseProps {
  text: string;
  variant?: "info" | "warn" | "lock";

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
      <div className={`app-info-banner flex items-start gap-2 border px-3 py-2.5 text-[13px] ${styles} ${className}`}>
        {icon}
        <p className="font-mono">{text}</p>
      </div>
    );
  }

  const { title, description, className = "" } = props;

  return (
    <div
      className={`app-info-banner px-4 py-3 bg-primary-300/4 border border-primary-300/12 border-l-[3px] border-l-primary-300 ${className}`}
    >
      <p className="mb-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-primary-300">
        {title}
      </p>
      <p className="font-mono text-[11px] leading-relaxed text-txt-2">
        {description}
      </p>
    </div>
  );
}
