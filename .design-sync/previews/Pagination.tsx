import React from "react";
import { Pagination } from "@tapizlabs/ui";

export const MiddlePage = () => (
  <Pagination
    page={4}
    totalPages={12}
    totalItems={286}
    pageSize={25}
    onChange={() => {}}
  />
);

export const FirstPage = () => (
  <Pagination page={1} totalPages={5} onChange={() => {}} />
);

export const LastPageLocalized = () => (
  <Pagination
    page={9}
    totalPages={9}
    totalItems={212}
    pageSize={25}
    onChange={() => {}}
    labels={{
      showing: ({ from, to, total }) => `Prikaz ${from}–${to} od ${total} studenata`,
      page: ({ page, totalPages }) => `Strana ${page} od ${totalPages}`,
      prev: "Prethodna",
      next: "Sledeća",
    }}
  />
);
