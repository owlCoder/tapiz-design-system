import React from "react";
import { Progress } from "@tapizlabs/ui";

export const Default = () => (
  <div style={{ maxWidth: 380 }}>
    <Progress value={68} label="Course completion" showValue />
  </div>
);

export const Tones = () => (
  <div style={{ display: "grid", gap: 14, maxWidth: 380 }}>
    <Progress value={92} tone="success" label="Attendance" showValue />
    <Progress value={55} tone="warning" label="Homework submitted" showValue />
    <Progress value={18} tone="danger" label="Quiz average" showValue />
    <Progress value={74} tone="accent" label="Syllabus covered" showValue />
  </div>
);

export const CustomMax = () => (
  <div style={{ display: "grid", gap: 14, maxWidth: 380 }}>
    <Progress value={41} max={60} label="Points (of 60 pre-exam)" showValue />
    <Progress value={9} max={13} label="Labs attended" showValue />
  </div>
);

export const Bare = () => (
  <div style={{ display: "grid", gap: 10, maxWidth: 380 }}>
    <Progress value={30} />
    <Progress value={80} tone="success" />
  </div>
);
