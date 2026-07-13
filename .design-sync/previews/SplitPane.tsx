import React from "react";
import { SplitPane, Card } from "@tapizlabs/ui";

const Panel = ({ title, body }: { title: string; body: string }) => (
  <Card padding="md" style={{ height: "100%" }}>
    <strong style={{ display: "block", marginBottom: 6 }}>{title}</strong>
    <p style={{ margin: 0, fontSize: 13, opacity: 0.75 }}>{body}</p>
  </Card>
);

export const FiftyFifty = () => (
  <div style={{ height: 220 }}>
    <SplitPane
      ratio="50/50"
      primary={<Panel title="Materials" body="Lecture slides, lab handouts and reading lists for Operating Systems." />}
      secondary={<Panel title="Preview" body="Selected material renders here — PDFs, slides and quizzes inline." />}
    />
  </div>
);

export const SixtyForty = () => (
  <div style={{ height: 220 }}>
    <SplitPane
      ratio="60/40"
      primary={<Panel title="Score sheet" body="Per-student points across labs, midterm and final — formula-computed totals." />}
      secondary={<Panel title="Grade distribution" body="Live histogram of final grades for the enrolled cohort." />}
    />
  </div>
);

export const SeventyThirty = () => (
  <div style={{ height: 220 }}>
    <SplitPane
      ratio="70/30"
      primary={<Panel title="Quiz editor" body="Question bank with per-topic tags. Drag questions to build a knowledge check." />}
      secondary={<Panel title="Settings" body="Time limit, attempts and publish window." />}
    />
  </div>
);
