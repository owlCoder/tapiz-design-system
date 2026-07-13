import React from "react";
import { Combobox } from "@tapizlabs/ui";

const subjects = [
  { value: "os", label: "Operating Systems" },
  { value: "db", label: "Database Systems" },
  { value: "algo", label: "Algorithms and Data Structures" },
  { value: "net", label: "Computer Networks" },
];

export const Default = () => (
  <div style={{ maxWidth: 340 }}>
    <Combobox options={subjects} placeholder="Assign to subject…" />
  </div>
);

export const Selected = () => (
  <div style={{ maxWidth: 340 }}>
    <Combobox options={subjects} defaultValue="db" placeholder="Assign to subject…" />
  </div>
);

export const Invalid = () => (
  <div style={{ maxWidth: 340 }}>
    <Combobox
      invalid
      options={[
        { value: "a1", label: "Amphitheater A1" },
        { value: "lab2", label: "Computer lab 2" },
        { value: "r305", label: "Room 305" },
      ]}
      placeholder="Pick a room (required)"
    />
  </div>
);
