import type { BaseProps } from "../../types";
import { Info, Lock } from "../icons/index";

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
        ? "bg-tint-peach border-signal-400/25 text-signal-500"
        : variant === "lock"
          ? "bg-tint-peach border-signal-400/30 text-signal-500"
          : "bg-tint-lavender border-primary-300/20 text-primary-300";

    const icon = variant === "lock"
      ? <Lock size={15} className="shrink-0" />
      : <Info size={15} className="shrink-0" />;

    return (
      <div className={`app-info-banner flex min-h-14 items-center gap-3 rounded-xl border px-4 py-3 text-sm ${styles} ${className}`}>
        {icon}
        <p className="font-medium leading-relaxed">{text}</p>
      </div>
    );
  }

  const { title, description, className = "" } = props;

  return (
    <div
      className={`app-info-banner rounded-xl border border-primary-300/20 bg-tint-lavender px-4 py-3.5 ${className}`}
    >
      <p className="mb-1 text-sm font-semibold text-primary-300">
        {title}
      </p>
      <p className="text-[13px] leading-relaxed text-txt-2">
        {description}
      </p>
    </div>
  );
}
