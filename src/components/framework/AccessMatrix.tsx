import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface AccessMatrixRole {
  key: string;
  label: ReactNode;
}

export interface AccessMatrixPermission {
  key: string;
  label: ReactNode;
  description?: ReactNode;
  roles: Record<string, boolean>;
}

export interface AccessMatrixProps extends BaseProps {
  roles: AccessMatrixRole[];
  permissions: AccessMatrixPermission[];
}

export function AccessMatrix({ roles, permissions, className = "" }: AccessMatrixProps) {
  return (
    <div className={`overflow-x-auto border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] ${className}`}>
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left">Permission</th>
            {roles.map((role) => <th key={role.key} className="px-4 py-3 text-center">{role.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.key}>
              <td className="px-4 py-3">
                <div className="font-medium text-[var(--tapiz-text-primary)]">{permission.label}</div>
                {permission.description ? <div className="mt-1 text-xs text-[var(--tapiz-text-muted)]">{permission.description}</div> : null}
              </td>
              {roles.map((role) => (
                <td key={role.key} className="px-4 py-3 text-center">
                  <span className={permission.roles[role.key] ? "text-[var(--tapiz-success)]" : "text-[var(--tapiz-text-disabled)]"}>
                    {permission.roles[role.key] ? "✓" : "—"}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
