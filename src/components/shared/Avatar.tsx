export interface AvatarProps {
  src?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const sizes = { xs: "size-6 text-[10px]", sm: "size-8 text-xs", md: "size-10 text-sm", lg: "size-14 text-base" };

export function Avatar({ src, name = "?", size = "md", className = "" }: AvatarProps) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "?";
  return src ? (
    <img src={src} alt={name} className={`border border-[var(--tapiz-border-strong)] object-cover ${sizes[size]} ${className}`} />
  ) : (
    <span className={`inline-grid place-items-center border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-accent-soft)] font-mono font-bold text-[var(--tapiz-accent)] ${sizes[size]} ${className}`}>{initials}</span>
  );
}
