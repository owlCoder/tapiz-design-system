import React from "react";
import { ActionMenu, Edit, Trash, Download, Copy, Eye, FileText } from "@tapizlabs/ui";

const noop = () => undefined;

export const SubjectActions = () => (
  <div style={{ display: "flex", gap: 16, minHeight: 220, alignItems: "flex-start" }}>
    <ActionMenu
      label="Subject actions"
      items={[
        { key: "view", label: "View syllabus", icon: <Eye />, onSelect: noop },
        { key: "edit", label: "Edit subject", icon: <Edit />, onSelect: noop },
        { key: "export", label: "Export grades", icon: <Download />, onSelect: noop },
        { key: "archive", label: "Archive subject", icon: <Trash />, danger: true, onSelect: noop },
      ]}
    />
  </div>
);

export const ButtonVariants = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-start" }}>
    <ActionMenu
      label="Primary"
      buttonVariant="primary"
      items={[
        { key: "dup", label: "Duplicate quiz", icon: <Copy />, onSelect: noop },
        { key: "pdf", label: "Export as PDF", icon: <FileText />, onSelect: noop },
      ]}
    />
    <ActionMenu
      label="Ghost"
      buttonVariant="ghost"
      items={[{ key: "view", label: "View report", onSelect: noop }]}
    />
    <ActionMenu
      label="Outline"
      buttonVariant="outline-secondary"
      buttonSize="sm"
      items={[{ key: "copy", label: "Copy invite link", onSelect: noop }]}
    />
  </div>
);

export const ItemStates = () => (
  <div style={{ display: "flex", gap: 16, minHeight: 220, alignItems: "flex-start" }}>
    <ActionMenu
      label="Scoresheet"
      buttonVariant="secondary"
      items={[
        { key: "publish", label: "Publish results", onSelect: noop },
        { key: "lock", label: "Lock column (locked)", disabled: true, onSelect: noop },
        { key: "recalc", label: "Recalculating…", loading: true, onSelect: noop },
        { key: "delete", label: "Delete scoresheet", icon: <Trash />, danger: true, onSelect: noop },
      ]}
    />
  </div>
);
