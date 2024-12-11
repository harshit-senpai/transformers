"use client";

import { ColumnDef } from "@tanstack/react-table";

export type ProductColumn = {
  id: string;
  organization: string;
  fileUrl: string;
  fileData: string;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "organization",
    header: "Organization",
  },
  {
    accessorKey: "fileUrl",
    header: "File Url",
  },
  {
    accessorKey: "fileData",
    header: "File Data",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
