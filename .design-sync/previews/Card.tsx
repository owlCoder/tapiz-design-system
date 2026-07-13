import React from "react";
import { Card, CardHeader, CardBody, Button, Badge } from "@tapizlabs/ui";

export const Composed = () => (
  <Card>
    <CardHeader>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 16 }}>Attendance overview</h3>
          <p style={{ margin: 0, fontSize: 13, opacity: 0.7 }}>Winter semester 2026</p>
        </div>
        <Button size="sm" variant="secondary">Export</Button>
      </div>
    </CardHeader>
    <CardBody>
      <p style={{ margin: 0 }}>
        Attendance across all lab groups is trending up. 92% of enrolled
        students attended at least one session this week, with the Tuesday
        group leading at 97%.
      </p>
    </CardBody>
  </Card>
);

export const CardVariants = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    <Card variant="surface" padding="md">Surface — default panel background.</Card>
    <Card variant="raised" padding="md">Raised — soft elevation for emphasis.</Card>
    <Card variant="outlined" padding="md">Outlined — strong border, flat.</Card>
    <Card variant="glass" padding="md">Glass — translucent overlay surface.</Card>
  </div>
);

export const HoverAndPadding = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    <Card hover padding="lg">
      <strong>Interactive card</strong>
      <p style={{ margin: "8px 0 0" }}>Hover styling for clickable cards.</p>
    </Card>
    <Card padding="sm">
      <Badge>Compact</Badge>
      <p style={{ margin: "8px 0 0" }}>Small padding for dense layouts.</p>
    </Card>
  </div>
);
