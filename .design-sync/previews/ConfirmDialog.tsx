import React from "react";
import { ConfirmDialog, Trash } from "@tapizlabs/ui";

// ConfirmDialog renders through createPortal(document.body) with fixed inset-0,
// so it always paints over the full page — keep a single open story.
export const DangerConfirm = () => (
  <ConfirmDialog
    open
    danger
    title="Delete scoresheet?"
    description="This removes the colloquium scoresheet for Databases (group T2), including all 34 entered scores. This action cannot be undone."
    confirmLabel="Delete scoresheet"
    cancelLabel="Keep it"
    icon={<Trash size={20} />}
    onConfirm={() => {}}
    onCancel={() => {}}
  />
);
