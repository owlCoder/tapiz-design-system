import type { BaseProps } from "../../types";
export interface AvatarProps extends BaseProps {
  src?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const sizes = { xs: "size-6 text-[10px]", sm: "size-8 text-xs", md: "size-10 text-sm", lg: "size-14 text-base" };

export function Avatar({ src, name = "?", size = "md", className = "" }: AvatarProps) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "?";
  return src ? (
    <img src={src} alt={name} className={`rounded-full border border-(--tapiz-border-strong) object-cover ${sizes[size]} ${className}`} />
  ) : (
    <span className={`inline-grid place-items-center rounded-full border border-(--tapiz-border-strong) bg-(--tapiz-accent-soft) font-semibold text-(--tapiz-accent) ${sizes[size]} ${className}`}>{initials}</span>
  );
}
