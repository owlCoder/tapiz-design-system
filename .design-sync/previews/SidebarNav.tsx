import React from "react";
import { SidebarNav, Badge, Home, Book, Users, Settings, Calendar, Bell } from "@tapizlabs/ui";

const groups = [
  {
    label: "Teaching",
    items: [
      { label: "Dashboard", icon: <Home size={16} />, href: "#" },
      { label: "Subjects", icon: <Book size={16} />, href: "#", active: true },
      { label: "Attendance", icon: <Calendar size={16} />, href: "#" },
      { label: "Students", icon: <Users size={16} />, href: "#", badge: <Badge>128</Badge> },
    ],
  },
  {
    label: "Workspace",
    items: [
      { label: "Notifications", icon: <Bell size={16} />, href: "#", badge: <Badge>3</Badge> },
      { label: "Settings", icon: <Settings size={16} />, href: "#" },
      { label: "Archive (locked)", disabled: true },
    ],
  },
];

export const WithGroups = () => (
  <div style={{ maxWidth: 280 }}>
    <SidebarNav groups={groups} />
  </div>
);

export const WithHeaderFooter = () => (
  <div style={{ maxWidth: 280 }}>
    <SidebarNav
      groups={groups}
      header={<div style={{ fontWeight: 600 }}>Tapiz LMS</div>}
      footer={<div style={{ fontSize: 12, opacity: 0.7 }}>Winter semester 2026</div>}
    />
  </div>
);
