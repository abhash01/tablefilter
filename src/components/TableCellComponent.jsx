import React from "react";
import TableCell from "@mui/material/TableCell";

export default function TableCellComponent({
  children,
  stickyLeft,
  stickyTop,
  zIndex,
  align = "left",
}) {
  return (
    <TableCell
      align={align}
      style={{
        position: stickyLeft || stickyTop ? "sticky" : "static",
        left: stickyLeft ? 0 : undefined,
        top: stickyTop ? 0 : undefined,
        zIndex: zIndex || 0,
        backgroundColor: stickyLeft || stickyTop ? "#f5f5f5" : undefined,
      }}
    >
      {children}
    </TableCell>
  );
}
