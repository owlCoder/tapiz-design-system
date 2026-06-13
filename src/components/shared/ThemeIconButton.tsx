import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ThemeIconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: ReactNode;
}

export function ThemeIconButton({
  icon,
  className = "",
  type = "button",
  ...props
}: ThemeIconButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex h-9 w-9 cursor-pointer items-center justify-center border-0 bg-transparent p-1.5 text-txt-3 transition-colors duration-150 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--tapiz-border-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--tapiz-bg-surface)] ${className}`.trim()}
      {...props}
    >
      <span className="inline-flex h-4 w-4 items-center justify-center">{icon}</span>
    </button>
  );
}
