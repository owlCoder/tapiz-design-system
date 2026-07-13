import React from "react";
import { Breadcrumbs } from "@tapizlabs/ui";

export const Default = () => (
  <Breadcrumbs
    items={[
      { label: "Dashboard", href: "#" },
      { label: "Subjects", href: "#" },
      { label: "Operating Systems", href: "#" },
      { label: "Materials", current: true },
    ]}
  />
);

export const CustomSeparator = () => (
  <Breadcrumbs
    separator="→"
    items={[
      { label: "Admin", href: "#" },
      { label: "University of Belgrade", href: "#" },
      { label: "Faculty of Mathematics", href: "#" },
      { label: "Students", current: true },
    ]}
  />
);
