import React from "react";
import { Skeleton } from "@tapizlabs/ui";

export const TextLines = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 420 }}>
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

export const ProfileRow = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, maxWidth: 360 }}>
    <Skeleton className="h-12 w-12 rounded-full shrink-0" />
    <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-3 w-24" />
    </div>
  </div>
);

export const CardBlock = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 420 }}>
    <Skeleton className="h-32 w-full rounded-xl" />
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-3 w-3/4" />
  </div>
);
