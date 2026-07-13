import React from "react";
import { Popover, Button } from "@tapizlabs/ui";

const menuItem: React.CSSProperties = {
  display: "block",
  padding: "6px 10px",
  fontSize: 13,
  borderRadius: 6,
};

export const OpenStart = () => (
  <div style={{ position: "relative", height: 220 }}>
    <Popover
      open
      align="start"
      trigger={<Button variant="secondary">Semester actions</Button>}
    >
      <div>
        <a href="#" style={menuItem}>Export attendance CSV</a>
        <a href="#" style={menuItem}>Generate grade report</a>
        <a href="#" style={menuItem}>Archive semester</a>
      </div>
    </Popover>
  </div>
);

export const OpenEnd = () => (
  <div style={{ position: "relative", height: 220, display: "flex", justifyContent: "flex-end" }}>
    <Popover
      open
      align="end"
      trigger={<Button variant="secondary">Notify students</Button>}
    >
      <p style={{ margin: 0, padding: 8, fontSize: 13 }}>
        Send a reminder about tomorrow’s colloquium to all 34 students in
        group T2?
      </p>
    </Popover>
  </div>
);
