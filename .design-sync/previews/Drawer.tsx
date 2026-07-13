import React from "react";
import { Drawer, Button, Badge } from "@tapizlabs/ui";

// Drawer is `position: fixed` (not portaled); a transformed wrapper with an
// explicit height becomes its containing block so it stays inside the card.
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: "relative",
      transform: "translateZ(0)",
      height: 380,
      overflow: "hidden",
      borderRadius: 8,
    }}
  >
    {children}
  </div>
);

export const RightSide = () => (
  <Frame>
    <Drawer
      open
      onClose={() => {}}
      title="Student details"
      description="Mila Petrović — index 2023/0142"
      footer={
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <Button variant="secondary" size="sm">Close</Button>
          <Button variant="primary" size="sm">Open profile</Button>
        </div>
      }
    >
      <div style={{ display: "grid", gap: 8 }}>
        <div>Enrolled subjects: <Badge>6</Badge></div>
        <div>Attendance this semester: 91%</div>
        <div>Average grade: 8.7</div>
      </div>
    </Drawer>
  </Frame>
);

export const LeftSide = () => (
  <Frame>
    <Drawer
      open
      side="left"
      onClose={() => {}}
      title="Filters"
      description="Narrow the attendance report"
    >
      <div style={{ display: "grid", gap: 8 }}>
        <div>Semester: Winter 2026</div>
        <div>Group: Tuesday lab</div>
        <div>Status: Present only</div>
      </div>
    </Drawer>
  </Frame>
);
