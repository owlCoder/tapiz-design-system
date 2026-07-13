import React from "react";
import { Tooltip, Button, Badge } from "@tapizlabs/ui";

// Tooltip content is hover-only (opacity-0 group-hover:opacity-100); the
// preview forces it visible with a scoped style so the styling can be graded.
const ForceVisible = ({ children }: { children: React.ReactNode }) => (
  <div className="tt-force">
    <style>{`.tt-force .group > span[style] { opacity: 1 !important; }`}</style>
    {children}
  </div>
);

export const TopAndBottom = () => (
  <ForceVisible>
    <div style={{ display: "flex", gap: 96, padding: "72px 24px" }}>
      <Tooltip text="Attendance is locked after the session ends" position="top">
        <Button variant="secondary" size="sm">Lock attendance</Button>
      </Tooltip>
      <Tooltip text="Grades sync to the scoresheet every 5 minutes" position="bottom">
        <Button variant="secondary" size="sm">Sync grades</Button>
      </Tooltip>
    </div>
  </ForceVisible>
);

export const AlignAndWidth = () => (
  <ForceVisible>
    <div style={{ display: "flex", justifyContent: "flex-end", padding: "88px 24px 24px" }}>
      <Tooltip
        text="This student has a medical exemption for weeks 3–5; absences in that range do not count toward the attendance minimum."
        position="top"
        align="right"
        width="max-w-[260px]"
      >
        <Badge>Exempt</Badge>
      </Tooltip>
    </div>
  </ForceVisible>
);
