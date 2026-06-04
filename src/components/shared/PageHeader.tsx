import type { ReactNode } from "react";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  icon?: ReactNode;
  banner?: ReactNode;
  className?: string;
}

export function PageHeader({ title, subtitle, action, icon, banner, className = "" }: PageHeaderProps) {
  return (
    <div
      className={`page-header mb-5 flex flex-col gap-3 border-b border-border pb-4 animate-fade-in-up ${className}`.trim()}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          {subtitle ? <div className="kicker mb-1.5">{subtitle}</div> : null}
          <div className="flex items-center gap-2.5">
            {icon ? <span className="text-primary-300">{icon}</span> : null}
            <h2 className="font-(--font-display) text-[22px] tracking-[-0.03em] text-txt-1">
              {title}
            </h2>
          </div>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {banner ? banner : null}
    </div>
  );
}
