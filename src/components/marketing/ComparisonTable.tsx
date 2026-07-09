import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface ComparisonTableRow {
  feature: ReactNode;
  included: ReactNode;
  alternative?: ReactNode;
}

export interface ComparisonTableProps extends BaseProps {
  rows: ComparisonTableRow[];
  featureHeader?: ReactNode;
  includedHeader?: ReactNode;
  alternativeHeader?: ReactNode;
}

export function ComparisonTable({ rows, featureHeader = "Feature", includedHeader = "Tapiz", alternativeHeader = "Other", className = "" }: ComparisonTableProps) {
  return (
    <div className={`overflow-x-auto border border-(--tapiz-border-strong) ${className}`}>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left">{featureHeader}</th>
            <th className="px-4 py-3 text-left">{includedHeader}</th>
            <th className="px-4 py-3 text-left">{alternativeHeader}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-(--tapiz-border-subtle)">
              <td className="px-4 py-3 font-medium text-(--tapiz-text-primary)">{row.feature}</td>
              <td className="px-4 py-3 text-(--tapiz-text-secondary)">{row.included}</td>
              <td className="px-4 py-3 text-(--tapiz-text-muted)">{row.alternative}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
