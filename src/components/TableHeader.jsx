import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCellComponent from "./TableCellComponent";

export default function TableHeader() {
  return (
    <TableRow>
      <TableCellComponent stickyLeft stickyTop zIndex={2}>
        Name
      </TableCellComponent>
      <TableCellComponent stickyTop zIndex={1}>
        Email
      </TableCellComponent>
      <TableCellComponent stickyTop zIndex={1} align="right">
        Age
      </TableCellComponent>
      <TableCellComponent stickyTop zIndex={1}>
        Date Created
      </TableCellComponent>
      <TableCellComponent stickyTop zIndex={1}>
        Last Login
      </TableCellComponent>
      <TableCellComponent stickyTop zIndex={1}>
        Actions
      </TableCellComponent>
    </TableRow>
  );
}
