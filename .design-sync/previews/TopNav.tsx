import React from "react";
import { TopNav, Button, Badge } from "@tapizlabs/ui";

const links = [
  { label: "Dashboard", href: "#" },
  { label: "Subjects", href: "#", active: true },
  { label: "Grades", href: "#" },
  { label: "Office hours", href: "#" },
];

export const WithActions = () => (
  <TopNav
    brand={<strong>Tapiz LMS</strong>}
    links={links}
    actions={
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Badge>Pro</Badge>
        <Button size="sm" variant="secondary">Sign out</Button>
      </div>
    }
  />
);

export const LinksOnly = () => (
  <TopNav
    brand={<strong>Faculty of Mathematics</strong>}
    links={[
      { label: "Overview", href: "#", active: true },
      { label: "Departments", href: "#" },
      { label: "Staff", href: "#" },
    ]}
  />
);
