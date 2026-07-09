import type { BaseProps } from "../../types";
import { createElement, isValidElement } from "react";
import type { ComponentType, MouseEvent, ReactNode } from "react";
import { Spinner } from "../feedback/Spinner";

type Variant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost"
  | "success"
  | "warning"
  | "info"
  | "muted-primary"
  | "outline-primary"
  | "outline-secondary"
  | "outline-danger"
  | "outline-success"
  | "link";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends BaseProps {
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: Variant;
  size?: Size;
  icon?: ButtonIcon;
  iconRight?: ButtonIcon;

  type?: "button" | "submit" | "reset";
  title?: string;
  fullWidth?: boolean;
}

type ButtonIcon = ReactNode | ComponentType<{
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}>;

const TOKEN_BASE = "inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150";

const variantClasses: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger",

  ghost: `${TOKEN_BASE} font-medium border border-transparent
    text-txt-3 hover:border-primary-300 hover:text-primary-300`,

  success: `${TOKEN_BASE} border border-good text-good
    bg-transparent hover:bg-good/12`,

  warning: `${TOKEN_BASE} border border-warn text-warn
    bg-transparent hover:bg-warn/12`,

  info: `${TOKEN_BASE} border border-primary-300 text-primary-300
    bg-transparent hover:bg-primary-300/12`,

  "muted-primary": `${TOKEN_BASE} border border-primary-300 text-primary-300
    bg-primary-300/12 hover:bg-primary-300/12`,

  "outline-primary": `${TOKEN_BASE} border border-primary-300 text-primary-300
    hover:bg-primary-300/12`,

  "outline-secondary": `${TOKEN_BASE} border border-border-hi text-txt-2
    hover:border-txt-2 hover:text-txt-1`,

  "outline-danger": `${TOKEN_BASE} border border-warn text-warn
    hover:bg-warn/12`,

  "outline-success": `${TOKEN_BASE} border border-good text-good
    hover:bg-good/12`,

  link: "text-primary-300 hover:text-primary-400 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1",
};

const sizeClasses: Record<Size, string> = {
  xs: "px-2 py-1 text-xs gap-1",
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2 text-sm gap-2",
  lg: "px-5 py-2.5 text-sm gap-2",
  xl: "px-6 py-3 text-base gap-2.5",
};

export function Button({
  children,
  onClick,
  disabled,
  loading,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  className = "",
  type = "button",
  title,
  fullWidth,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const isLink = variant === "link";
  const shouldApplySize = !isLink;
  const renderedIcon = renderIcon(icon);
  const renderedIconRight = renderIcon(iconRight);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      title={title}
      className={[
        variantClasses[variant],
        shouldApplySize ? sizeClasses[size] : "",
        fullWidth ? "w-full" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      {loading
        ? <Spinner color={variant === "primary" ? "text-black" : "text-txt-2"} />
        : renderedIcon ? <span>{renderedIcon}</span> : null}
      {children}
      {!loading && renderedIconRight}
    </button>
  );
}

function renderIcon(icon?: ButtonIcon) {
  if (!icon) return null;
  if (isValidElement(icon)) return icon;
  if (typeof icon === "function") {
    return createElement(icon, { size: 14, strokeWidth: 1.75 });
  }
  return icon;
}
