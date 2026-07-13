import React from "react";
import { BaseModal, Button, Book } from "@tapizlabs/ui";

// BaseModal renders through createPortal(document.body) with fixed inset-0,
// so it always paints over the full page — keep a single open story.
export const OpenWithIcon = () => (
  <BaseModal
    isOpen
    onClose={() => {}}
    title="Publish material"
    subtitle="Operating Systems — Week 4"
    icon={<Book size={20} />}
    xShown
    size="md"
  >
    <p style={{ margin: 0 }}>
      Students enrolled in Operating Systems will be notified that
      “Scheduling algorithms — lecture notes” is available for download.
    </p>
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Publish</Button>
    </div>
  </BaseModal>
);
