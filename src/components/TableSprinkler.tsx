// // import * as React from "react";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import EditIcon from "@mui/icons-material/Edit";
// // import PrintIcon from "@mui/icons-material/Print";
// // import Stack from "@mui/material/Stack";
// // import Button from "@mui/material/Button";
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// // import TableRow from "@mui/material/TableRow";
// // import Paper from "@mui/material/Paper";

// // export default function TableSprinkler() {
// //   const [showEditDelete, setShowEditDelete] = React.useState(true);

// //   const handleToggleClick = () => {
// //     setShowEditDelete((prevShowEditDelete) => !prevShowEditDelete);
// //   };

// //   const columns = [
// //     { field: "name", label: "Name", stickyLeft: true },
// //     { field: "email", label: "Email" },
// //     { field: "age", label: "Age", align: "right" },
// //     { field: "dateCreated", label: "Date Created" },
// //     { field: "lastLogin", label: "Last Login" },
// //     { field: "actions", label: "Actions" },
// //   ];

// //   return (
// //     <div style={{ width: "100%" }}>
// //       <TableContainer
// //         component={Paper}
// //         style={{ maxHeight: 400, overflow: "auto" }}
// //       >
// //         <Table stickyHeader aria-label="custom table">
// //           <TableHead>
// //             <TableRow>
// //               {columns.map((column, index) => (
// //                 <TableCell
// //                   key={column.field}
// //                   align={column.align || "left"}
// //                   style={{
// //                     position: "sticky",
// //                     top: 0,
// //                     backgroundColor: "#f5f5f5",
// //                     zIndex: index === 0 ? 3 : 2, // Ensure first column header is above others
// //                     left: column.stickyLeft ? 0 : undefined,
// //                   }}
// //                 >
// //                   {column.label}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows.map((row) => (
// //               <TableRow key={row.id}>
// //                 {columns.map((column, index) => (
// //                   <TableCell
// //                     key={column.field}
// //                     align={column.align || "left"}
// //                     style={{
// //                       position: column.stickyLeftstickyLeft ? "sticky" : "static",
// //                       left: column.stickyLeft ? 0 : undefined,
// //                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
// //                       zIndex: column.stickyLeft ? 1 : 0,
// //                       minWidth: column.stickyLeft ? 150 : undefined,
// //                     }}
// //                   >
// //                     {column.field === "actions" ? (
// //                       <Stack spacing={1} direction="column">
// //                         {showEditDelete && (
// //                           <>
// //                             <Button
// //                               variant="outlined"
// //                               size="small"
// //                               startIcon={<EditIcon />}
// //                             >
// //                               Edit
// //                             </Button>
// //                             <Button
// //                               variant="outlined"
// //                               size="small"
// //                               startIcon={<DeleteIcon />}
// //                             >
// //                               Delete
// //                             </Button>
// //                           </>
// //                         )}
// //                         <Button
// //                           variant="outlined"
// //                           size="small"
// //                           startIcon={<PrintIcon />}
// //                         >
// //                           Print
// //                         </Button>
// //                       </Stack>
// //                     ) : (
// //                       row[column.field]
// //                     )}
// //                   </TableCell>
// //                 ))}
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </div>
// //   );
// // }

// // // Sample data for table rows
// // const rows = [
// //   {
// //     id: 1,
// //     name: "Alice Johnson",
// //     email: "alice.johnson@example.com",
// //     age: 25,
// //     dateCreated: "2023-08-01",
// //     lastLogin: "2023-08-07 10:15:00",
// //   },
// //   {
// //     id: 2,
// //     name: "Bob Smith",
// //     email: "bob.smith@example.com",
// //     age: 36,
// //     dateCreated: "2023-07-21",
// //     lastLogin: "2023-08-06 14:00:00",
// //   },
// //   {
// //     id: 3,
// //     name: "Cathy Brown",
// //     email: "cathy.brown@example.com",
// //     age: 19,
// //     dateCreated: "2023-07-15",
// //     lastLogin: "2023-08-05 12:45:00",
// //   },
// //   {
// //     id: 4,
// //     name: "David Wilson",
// //     email: "david.wilson@example.com",
// //     age: 28,
// //     dateCreated: "2023-06-30",
// //     lastLogin: "2023-08-04 09:30:00",
// //   },
// //   {
// //     id: 5,
// //     name: "Emma Davis",
// //     email: "emma.davis@example.com",
// //     age: 23,
// //     dateCreated: "2023-06-20",
// //     lastLogin: "2023-08-03 11:20:00",
// //   },
// // ];
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// // Types for rows and columns
// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
// }

// interface Column {
//   field: string;
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// export default function TableSprinkler() {
//   const [showEditDelete, setShowEditDelete] = React.useState<boolean>(true);

//   const handleToggleClick = () => {
//     setShowEditDelete((prevShowEditDelete) => !prevShowEditDelete);
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2, // Ensure first column header is above others
//                     left: column.stickyLeft ? 0 : undefined,
//                   }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column, index) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "static",
//                       left: column.stickyLeft ? 0 : undefined,
//                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
//                       zIndex: column.stickyLeft ? 1 : 0,
//                       minWidth: column.stickyLeft ? 150 : undefined,
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack spacing={1} direction="column">
//                         {showEditDelete && (
//                           <>
//                             <Button
//                               variant="outlined"
//                               size="small"
//                               startIcon={<EditIcon />}
//                             ></Button>
//                             <Button
//                               variant="outlined"
//                               size="small"
//                               startIcon={<DeleteIcon />}
//                             ></Button>
//                           </>
//                         )}
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           startIcon={<PrintIcon />}
//                         ></Button>
//                       </Stack>
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// // Sample data for table rows
// const rows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//   },
// ];
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];
// const rows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//   },
// ];
// export default function TableSprinkler() {
//   const [showEditDelete, setShowEditDelete] = React.useState<boolean>(true);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [sortedField, sortOrder]);

//   const handleToggleClick = () => {
//     setShowEditDelete((prevShowEditDelete) => !prevShowEditDelete);
//   };

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   onClick={() =>
//                     column.field !== "actions" &&
//                     handleSort(column.field as keyof Row)
//                   }
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined,
//                     cursor: column.field !== "actions" ? "pointer" : "default",
//                   }}
//                 >
//                   {column.label}
//                   {sortedField === column.field &&
//                     (sortOrder === "asc" ? " 🔼" : " 🔽")}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column, index) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "static",
//                       left: column.stickyLeft ? 0 : undefined,
//                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
//                       zIndex: column.stickyLeft ? 1 : 0,
//                       minWidth: column.stickyLeft ? 150 : undefined,
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack spacing={1} direction="column">
//                         {showEditDelete && (
//                           <>
//                             <Button
//                               variant="outlined"
//                               size="small"
//                               startIcon={<EditIcon />}
//                             >
//                               Edit
//                             </Button>
//                             <Button
//                               variant="outlined"
//                               size="small"
//                               startIcon={<DeleteIcon />}
//                             >
//                               Delete
//                             </Button>
//                           </>
//                         )}
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           startIcon={<PrintIcon />}
//                         >
//                           Print
//                         </Button>
//                       </Stack>
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// // Sample data for table rows
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import Typography from "@mui/material/Typography";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [showEditDelete, setShowEditDelete] = React.useState<boolean>(true);
//   const [enableAddDelete, setEnableAddDelete] = React.useState<boolean>(false);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//     };
//     setRows((prevRows) => [...prevRows, newRow]);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Stack direction="row" alignItems="center" spacing={1} marginBottom={2}>
//         <Typography>Enable Add/Delete:</Typography>
//         <Switch
//           checked={enableAddDelete}
//           onChange={(e) => setEnableAddDelete(e.target.checked)}
//         />
//         {enableAddDelete && (
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>
//         )}
//       </Stack>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined,
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "static",
//                       left: column.stickyLeft ? 0 : undefined,
//                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
//                       zIndex: column.stickyLeft ? 1 : 0,
//                       minWidth: column.stickyLeft ? 150 : undefined,
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack spacing={1} direction="column">
//                         {showEditDelete && (
//                           <>
//                             <Button
//                               variant="outlined"
//                               size="small"
//                               startIcon={<EditIcon />}
//                             >
//                               Edit
//                             </Button>
//                             {enableAddDelete && (
//                               <Button
//                                 variant="outlined"
//                                 size="small"
//                                 startIcon={<DeleteIcon />}
//                                 onClick={() => handleDeleteRow(row.id)}
//                               >
//                                 Delete
//                               </Button>
//                             )}
//                           </>
//                         )}
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           startIcon={<PrintIcon />}
//                         >
//                           Print
//                         </Button>
//                       </Stack>
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [showEditDelete, setShowEditDelete] = React.useState<boolean>(true);
//   const [enableAddDelete, setEnableAddDelete] = React.useState<boolean>(false);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null); // Track newly added row

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//     };
//     setRows((prevRows) => [...prevRows, newRow]);
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Stack direction="row" alignItems="center" spacing={1} marginBottom={2}>
//         <Typography>Enable Add/Delete:</Typography>
//         <Switch
//           checked={enableAddDelete}
//           onChange={(e) => setEnableAddDelete(e.target.checked)}
//         />
//         {enableAddDelete && (
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>
//         )}
//         {newRowId && (
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() =>
//               handleEditRow(rows.find((row) => row.id === newRowId)!)
//             }
//           >
//             Edit Newly Added Row
//           </Button>
//         )}
//       </Stack>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined,
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "static",
//                       left: column.stickyLeft ? 0 : undefined,
//                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
//                       zIndex: column.stickyLeft ? 1 : 0,
//                       minWidth: column.stickyLeft ? 150 : undefined,
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack spacing={1} direction="column">
//                         {showEditDelete && (
//                           <>
//                             <Button
//                               variant="outlined"
//                               size="small"
//                               startIcon={<EditIcon />}
//                               onClick={() => handleEditRow(row)}
//                             >
//                               Edit
//                             </Button>
//                             {enableAddDelete && (
//                               <Button
//                                 variant="outlined"
//                                 size="small"
//                                 startIcon={<DeleteIcon />}
//                                 onClick={() => handleDeleteRow(row.id)}
//                               >
//                                 Delete
//                               </Button>
//                             )}
//                           </>
//                         )}
//                       </Stack>
//                     ) : editingRow === row.id ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [showEditDelete, setShowEditDelete] = React.useState<boolean>(true);
//   const [enableAddDelete, setEnableAddDelete] = React.useState<boolean>(false);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null); // Track newly added row

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true, // New row is always editable
//     };
//     setRows((prevRows) => [...prevRows, newRow]);
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     if (row.editable || row.id === newRowId) {
//       // Allow editing only if row is editable or it's the newly added row
//       setEditingRow(row.id);
//       setEditedRowData(row);
//     }
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Stack direction="row" alignItems="center" spacing={1} marginBottom={2}>
//         <Typography>Enable Add/Delete:</Typography>
//         <Switch
//           checked={enableAddDelete}
//           onChange={(e) => setEnableAddDelete(e.target.checked)}
//         />
//         {enableAddDelete && (
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>
//         )}
//         {newRowId && (
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() =>
//               handleEditRow(rows.find((row) => row.id === newRowId)!)
//             }
//           >
//             Edit Newly Added Row
//           </Button>
//         )}
//       </Stack>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined,
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => {
//                   if (column.field === "actions") {
//                     return (
//                       <TableCell key={column.field}>
//                         {showEditDelete && (
//                           <>
//                             {row.id === editingRow ? (
//                               <Stack direction="row" spacing={1}>
//                                 <Button
//                                   variant="contained"
//                                   color="primary"
//                                   onClick={() => handleSaveEdit(row.id)}
//                                 >
//                                   Save
//                                 </Button>
//                                 <Button
//                                   variant="contained"
//                                   color="secondary"
//                                   onClick={handleCancelEdit}
//                                 >
//                                   Cancel
//                                 </Button>
//                               </Stack>
//                             ) : (
//                               <>
//                                 <IconButton
//                                   size="small"
//                                   onClick={() => handleEditRow(row)}
//                                   disabled={
//                                     !row.editable && row.id !== newRowId
//                                   }
//                                 >
//                                   <EditIcon fontSize="small" />
//                                 </IconButton>
//                                 <IconButton
//                                   size="small"
//                                   onClick={() => handleDeleteRow(row.id)}
//                                 >
//                                   <DeleteIcon fontSize="small" />
//                                 </IconButton>
//                               </>
//                             )}
//                           </>
//                         )}
//                       </TableCell>
//                     );
//                   } else {
//                     return (
//                       <TableCell key={column.field} align={column.align}>
//                         {row.id === editingRow ? (
//                           <TextField
//                             value={
//                               editedRowData[column.field] || row[column.field]
//                             }
//                             onChange={(e) =>
//                               handleChange(e, column.field as keyof Row)
//                             }
//                             fullWidth
//                           />
//                         ) : (
//                           row[column.field]
//                         )}
//                       </TableCell>
//                     );
//                   }
//                 })}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
// }

// const columns: Column[] = [
//   { field: "name", label: "Name" },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [showEditDelete, setShowEditDelete] = React.useState<boolean>(true);
//   const [enableAddDelete, setEnableAddDelete] = React.useState<boolean>(false);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null); // Track newly added row

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//     };
//     setRows((prevRows) => [...prevRows, newRow]);
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Stack direction="row" alignItems="center" spacing={1} marginBottom={2}>
//         <Typography>Enable Add/Delete:</Typography>
//         <Switch
//           checked={enableAddDelete}
//           onChange={(e) => setEnableAddDelete(e.target.checked)}
//         />
//         {enableAddDelete && (
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>
//         )}
//         {newRowId && (
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() =>
//               handleEditRow(rows.find((row) => row.id === newRowId)!)
//             }
//           >
//             Edit Newly Added Row
//           </Button>
//         )}
//       </Stack>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky", // Freeze header
//                     top: 0, // Stick to top
//                     backgroundColor: "#f5f5f5",
//                     zIndex: 2, // Ensure header is above rows
//                     minWidth: index === 0 ? "150px" : "auto", // Adjust first column width
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortOrder === "asc" ? (
//                         <ArrowUpwardIcon />
//                       ) : (
//                         <ArrowDownwardIcon />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column, index) => {
//                   const isEditing = editingRow === row.id && row.editable;
//                   return (
//                     <TableCell
//                       key={column.field}
//                       align={column.align || "left"}
//                       style={{
//                         position: index === 0 ? "sticky" : "relative", // Sticky first column
//                         left: index === 0 ? 0 : undefined,
//                         backgroundColor: isEditing ? "#e3f2fd" : "white",
//                         zIndex: index === 0 ? 1 : 0,
//                       }}
//                     >
//                       {column.field === "actions" ? (
//                         <>
//                           <IconButton
//                             size="small"
//                             onClick={() => handleDeleteRow(row.id)}
//                           >
//                             <DeleteIcon fontSize="small" />
//                           </IconButton>
//                           <IconButton
//                             size="small"
//                             onClick={() => handleEditRow(row)}
//                           >
//                             <EditIcon fontSize="small" />
//                           </IconButton>
//                         </>
//                       ) : isEditing ? (
//                         <TextField
//                           value={
//                             editedRowData[column.field] || row[column.field]
//                           }
//                           onChange={(e) =>
//                             handleChange(e, column.field as keyof Row)
//                           }
//                           variant="outlined"
//                           fullWidth
//                         />
//                       ) : (
//                         row[column.field]
//                       )}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [showEditDelete, setShowEditDelete] = React.useState<boolean>(true);
//   const [enableAddDelete, setEnableAddDelete] = React.useState<boolean>(false);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null); // Track newly added row

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//     };
//     setRows((prevRows) => [...prevRows, newRow]);
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Stack direction="row" alignItems="center" spacing={1} marginBottom={2}>
//         <Typography>Enable Add/Delete:</Typography>
//         <Switch
//           checked={enableAddDelete}
//           onChange={(e) => setEnableAddDelete(e.target.checked)}
//         />
//         {enableAddDelete && (
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>
//         )}
//         {newRowId && (
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() =>
//               handleEditRow(rows.find((row) => row.id === newRowId)!)
//             }
//           >
//             Edit Newly Added Row
//           </Button>
//         )}
//       </Stack>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined,
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "static",
//                       left: column.stickyLeft ? 0 : undefined,
//                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
//                       zIndex: column.stickyLeft ? 1 : 0,
//                       minWidth: column.stickyLeft ? 150 : undefined,
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack spacing={1} direction="column">
//                         {showEditDelete && (
//                           <>
//                             <Button
//                               variant="outlined"
//                               size="small"
//                               startIcon={<EditIcon />}
//                               onClick={() => handleEditRow(row)}
//                             >
//                               Edit
//                             </Button>
//                             {enableAddDelete && (
//                               <Button
//                                 variant="outlined"
//                                 size="small"
//                                 startIcon={<DeleteIcon />}
//                                 onClick={() => handleDeleteRow(row.id)}
//                               >
//                                 Delete
//                               </Button>
//                             )}
//                           </>
//                         )}
//                       </Stack>
//                     ) : editingRow === row.id ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// Add button

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null); // Track newly added row

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//     };
//     setRows((prevRows) => [...prevRows, newRow]);
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleAddRow}
//         style={{ marginBottom: 16 }}
//       >
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined,
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "static",
//                       left: column.stickyLeft ? 0 : undefined,
//                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
//                       zIndex: column.stickyLeft ? 1 : 0,
//                       minWidth: column.stickyLeft ? 150 : undefined,
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack spacing={1} direction="column">
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : editingRow === row.id ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null); // Track newly added row

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true, // Newly added rows are always editable
//     };
//     setRows((prevRows) => [...prevRows, newRow]);
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     if (row.editable) {
//       setEditingRow(row.id);
//       setEditedRowData(row);
//     }
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleAddRow}
//         style={{ marginBottom: 16 }}
//       >
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined,
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "static",
//                       left: column.stickyLeft ? 0 : undefined,
//                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
//                       zIndex: column.stickyLeft ? 1 : 0,
//                       minWidth: column.stickyLeft ? 150 : undefined,
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack spacing={1} direction="column">
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           <EditIcon />
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="secondary"
//                           onClick={() => handleDeleteRow(row.id)}
//                         >
//                           <DeleteIcon />
//                         </Button>
//                       </Stack>
//                     ) : editingRow === row.id && row.editable ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// working fine with add row
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import PrintIcon from "@mui/icons-material/Print";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Switch from "@mui/material/Switch";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null); // Track newly added row
//   const tableRef = React.useRef<HTMLDivElement | null>(null); // Table container reference

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true, // Newly added rows are always editable
//     };
//     setRows((prevRows) => [newRow, ...prevRows]); // Add new row at the top
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row

//     // Scroll to the top
//     if (tableRef.current) {
//       tableRef.current.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     if (row.editable) {
//       setEditingRow(row.id);
//       setEditedRowData(row);
//     }
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleAddRow}
//         style={{ marginBottom: 16 }}
//       >
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//         ref={tableRef} // Reference the table container
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined,
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "static",
//                       left: column.stickyLeft ? 0 : undefined,
//                       backgroundColor: column.stickyLeft ? "#fff" : "inherit",
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           <EditIcon />
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="secondary"
//                           onClick={() => handleDeleteRow(row.id)}
//                         >
//                           <DeleteIcon />
//                         </Button>
//                       </Stack>
//                     ) : editingRow === row.id && row.editable ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

//working fine witout stickyleft
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
// }

// const columns: Column[] = [
//   { field: "name", label: "Name" },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null); // Track newly added row
//   const tableRef = React.useRef<HTMLDivElement | null>(null); // Table container reference

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     const sorted = [...rows].sort((a, b) => {
//       const aValue = a[sortedField] as string | number;
//       const bValue = b[sortedField] as string | number;
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });
//     return sorted;
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//     };
//     setRows([newRow, ...rows]); // Insert at top
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row
//     if (tableRef.current) {
//       tableRef.current.scrollTop = 0; // Scroll to the top after adding a row
//     }
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     const newValue = e.target.value;

//     // Ensure type compatibility for each field
//     if (field === "age" && isNaN(Number(newValue))) {
//       return; // Prevent invalid value for age
//     }

//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: newValue,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Stack direction="row" alignItems="center" spacing={1} marginBottom={2}>
//         <Button variant="contained" color="primary" onClick={handleAddRow}>
//           Add Row
//         </Button>
//       </Stack>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//         ref={tableRef}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: index === 0 ? 0 : undefined, // Make first column sticky
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell key={column.field} align={column.align || "left"}>
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.editable && row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || ""}
//                         onChange={(e) =>
//                           column.field !== "actions" &&
//                           handleChange(e, column.field)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: true,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Cathy Brown",
//     email: "cathy.brown@example.com",
//     age: 19,
//     dateCreated: "2023-07-15",
//     lastLogin: "2023-08-05 12:45:00",
//     editable: false,
//   },
//   {
//     id: 4,
//     name: "David Wilson",
//     email: "david.wilson@example.com",
//     age: 28,
//     dateCreated: "2023-06-30",
//     lastLogin: "2023-08-04 09:30:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emma.davis@example.com",
//     age: 23,
//     dateCreated: "2023-06-20",
//     lastLogin: "2023-08-03 11:20:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [newRowId, setNewRowId] = React.useState<number | null>(null);

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true, // Newly added row is editable
//     };
//     setRows((prevRows) => [newRow, ...prevRows]); // Add new row at the top
//     setNewRowId(newRow.id); // Set the newly added row's ID
//     setEditingRow(newRow.id); // Automatically edit the new row
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === newRowId) setNewRowId(null); // Clear newRowId if the new row is deleted
//   };

//   const handleEditRow = (row: Row) => {
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                   }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell key={column.field} align={column.align || "left"}>
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.editable &&
//                       (row.id === editingRow || row.editable) ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
// }

// const columns: Column[] = [
//   { field: "name", label: "Name" },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});

//   // Handle adding a new row
//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };

//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   // Handle editing a row
//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   // Handle saving the edited row
//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   // Handle deleting a row
//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   // Handle canceling edit
//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   // Handle changes to input fields
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                   }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell key={column.field} align={column.align || "left"}>
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable} // Edit button enabled only if editable
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable} // Disable delete if editable is false
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// working except scroll left

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       // Convert non-string and non-number types to strings for comparison
//       if (aValue == null) aValue = ""; // Treat null or undefined as empty string
//       if (bValue == null) bValue = ""; // Same for null or undefined

//       // If values are numbers, compare directly; otherwise, convert to strings
//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
//         return 0;
//       }
//     });
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell key={column.field} align={column.align || "left"}>
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
// }

// const columns: Column[] = [
//   { field: "name", label: "Name" },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       // Convert non-string and non-number types to strings for comparison
//       if (aValue == null) aValue = ""; // Treat null or undefined as empty string
//       if (bValue == null) bValue = ""; // Same for null or undefined

//       // If values are numbers, compare directly; otherwise, convert to strings
//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
//         return 0;
//       }
//     });
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: index === 0 ? 0 : "auto", // Freeze first column
//                     width: column.field === "name" ? 200 : "auto", // Set width for first column
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column, index) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: index === 0 ? "sticky" : "relative", // Stick first column
//                       left: index === 0 ? 0 : "auto", // Keep it frozen
//                       backgroundColor: index === 0 ? "#f5f5f5" : "transparent", // Add background to the first column for better visibility
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
// }

// const columns: Column[] = [
//   { field: "name", label: "Name" },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       // Convert non-string and non-number types to strings for comparison
//       if (aValue == null) aValue = ""; // Treat null or undefined as empty string
//       if (bValue == null) bValue = ""; // Same for null or undefined

//       // If values are numbers, compare directly; otherwise, convert to strings
//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
//         return 0;
//       }
//     });
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: index === 0 ? 0 : "auto", // Freeze first column
//                     width: column.field === "name" ? 200 : "auto", // Set width for first column
//                     backgroundColor: index === 0 ? "#f5f5f5" : "transparent", // Ensure first column has white background
//                     color: index === 0 ? "black" : "inherit", // Ensure text is visible in first column
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column, index) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: index === 0 ? "sticky" : "relative", // Stick first column
//                       left: index === 0 ? 0 : "auto", // Keep it frozen
//                       backgroundColor: index === 0 ? "white" : "transparent", // Add background to the first column for better visibility
//                       color: index === 0 ? "black" : "inherit", // Ensure text color is readable
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       if (aValue == null) aValue = "";
//       if (bValue == null) bValue = "";

//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
//         return 0;
//       }
//     });
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: index === 0 ? "#f5f5f5" : "transparent", // Sticky first column
//                     zIndex: index === 0 ? 3 : 2,
//                     left: index === 0 ? 0 : "auto", // Freeze first column
//                     width: column.field === "name" ? 200 : "auto", // Set width for first column
//                     overflow: "hidden", // Prevent text overflow
//                     whiteSpace: "nowrap", // Prevent text wrapping
//                     textOverflow: "ellipsis", // Ellipsis for overflowed text
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "relative",
//                       left: column.stickyLeft ? 0 : "auto",
//                       backgroundColor: column.stickyLeft
//                         ? "#f5f5f5"
//                         : "transparent", // First column background
//                       zIndex: column.stickyLeft ? 2 : 1, // Higher zIndex for sticky first column
//                       overflow: "hidden", // Prevent text overflow
//                       whiteSpace: "nowrap", // Prevent text wrapping
//                       textOverflow: "ellipsis", // Add ellipsis for text overflow
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// // Updated Row interface
// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean; // This is optional, if you want to use it for individual rows
// }

// // Updated Column interface to accept stickyLeft
// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean; // Added stickyLeft here to allow sticky first column
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true },
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       if (aValue == null) aValue = "";
//       if (bValue == null) bValue = "";

//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
//         return 0;
//       }
//     });
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: column.stickyLeft ? "sticky" : "relative",
//                     left: column.stickyLeft ? 0 : "auto",
//                     backgroundColor: column.stickyLeft
//                       ? "#f5f5f5"
//                       : "transparent", // Set background for sticky column
//                     zIndex: column.stickyLeft ? 3 : 1, // Higher zIndex for sticky first column
//                     overflow: "hidden", // Prevent text overflow
//                     whiteSpace: "nowrap", // Prevent text wrapping
//                     textOverflow: "ellipsis", // Add ellipsis for text overflow
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : "relative",
//                       left: column.stickyLeft ? 0 : "auto",
//                       backgroundColor: column.stickyLeft
//                         ? "#f5f5f5"
//                         : "transparent", // First column background
//                       zIndex: column.stickyLeft ? 2 : 1, // Higher zIndex for sticky first column
//                       overflow: "hidden", // Prevent text overflow
//                       whiteSpace: "nowrap", // Prevent text wrapping
//                       textOverflow: "ellipsis", // Add ellipsis for text overflow
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean; // Add stickyLeft property for first column
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true }, // Mark this as sticky
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       // Convert non-string and non-number types to strings for comparison
//       if (aValue == null) aValue = ""; // Treat null or undefined as empty string
//       if (bValue == null) bValue = ""; // Same for null or undefined

//       // If values are numbers, compare directly; otherwise, convert to strings
//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
//         return 0;
//       }
//     });
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     backgroundColor: "#f5f5f5",
//                     zIndex: index === 0 ? 3 : 2,
//                     left: column.stickyLeft ? 0 : undefined, // Apply sticky-left for the first column
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column, columnIndex) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : undefined,
//                       left: column.stickyLeft ? 0 : undefined, // Sticky for first column
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean; // Add stickyLeft property for first column
// }

// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true }, // Mark this as sticky
//   { field: "email", label: "Email" },
//   { field: "age", label: "Age", align: "right" },
//   { field: "dateCreated", label: "Date Created" },
//   { field: "lastLogin", label: "Last Login" },
//   { field: "actions", label: "Actions" },
// ];

// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// // export default function TableSprinkler() {
// //   const [rows, setRows] = React.useState<Row[]>(initialRows);
// //   const [editingRow, setEditingRow] = React.useState<number | null>(null);
// //   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
// //   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
// //   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

// //   const sortedRows = React.useMemo(() => {
// //     if (!sortedField) return rows;
// //     return [...rows].sort((a, b) => {
// //       let aValue = a[sortedField];
// //       let bValue = b[sortedField];

// //       // Convert non-string and non-number types to strings for comparison
// //       if (aValue == null) aValue = ""; // Treat null or undefined as empty string
// //       if (bValue == null) bValue = ""; // Same for null or undefined

// //       // If values are numbers, compare directly; otherwise, convert to strings
// //       if (typeof aValue === "number" && typeof bValue === "number") {
// //         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
// //       } else {
// //         const aStr = aValue.toString();
// //         const bStr = bValue.toString();
// //         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
// //         if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
// //         return 0;
// //       }
// //     });
// //   }, [rows, sortedField, sortOrder]);

// //   const handleSort = (field: keyof Row) => {
// //     if (sortedField === field) {
// //       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
// //     } else {
// //       setSortedField(field);
// //       setSortOrder("asc");
// //     }
// //   };

// //   const handleAddRow = () => {
// //     const newRow: Row = {
// //       id: rows.length + 1,
// //       name: "New User",
// //       email: "new.user@example.com",
// //       age: 0,
// //       dateCreated: new Date().toISOString().split("T")[0],
// //       lastLogin: new Date().toISOString(),
// //       editable: true,
// //       isNew: true,
// //     };
// //     setRows((prevRows) => [newRow, ...prevRows]);
// //     setEditingRow(newRow.id);
// //     setEditedRowData(newRow);
// //   };

// //   const handleEditRow = (row: Row) => {
// //     if (!row.editable) return;
// //     setEditingRow(row.id);
// //     setEditedRowData(row);
// //   };

// //   const handleSaveEdit = (rowId: number) => {
// //     setRows((prevRows) =>
// //       prevRows.map((row) =>
// //         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
// //       )
// //     );
// //     setEditingRow(null);
// //   };

// //   const handleDeleteRow = (id: number) => {
// //     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
// //     if (id === editingRow) setEditingRow(null);
// //   };

// //   const handleCancelEdit = () => {
// //     setEditingRow(null);
// //     setEditedRowData({});
// //   };

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
// //     field: keyof Row
// //   ) => {
// //     setEditedRowData((prevData) => ({
// //       ...prevData,
// //       [field]: e.target.value,
// //     }));
// //   };

// //   return (
// //     <div style={{ width: "100%" }}>
// //       <Button variant="contained" color="primary" onClick={handleAddRow}>
// //         Add Row
// //       </Button>

// //       <TableContainer
// //         component={Paper}
// //         style={{
// //           maxHeight: 400,
// //           overflow: "auto",
// //           position: "relative", // Ensure positioning for z-index
// //           zIndex: 4, // Set a higher z-index for TableContainer
// //         }}
// //       >
// //         <Table stickyHeader aria-label="custom table">
// //           <TableHead>
// //             <TableRow>
// //               {columns.map((column, index) => (
// //                 <TableCell
// //                   key={column.field}
// //                   align={column.align || "left"}
// //                   style={{
// //                     position: "sticky",
// //                     top: 0,
// //                     zIndex: column.stickyLeft ? 4 : undefined, // Adjust z-index to ensure the header is above other content
// //                     left: column.stickyLeft ? 0 : undefined,
// //                     backgroundColor: "red", // Set the background color for the header cells
// //                   }}
// //                 >
// //                   {column.label}
// //                   {column.field !== "actions" && (
// //                     <IconButton
// //                       size="small"
// //                       onClick={() => handleSort(column.field as keyof Row)}
// //                     >
// //                       {sortedField === column.field && sortOrder === "asc" ? (
// //                         <ArrowUpwardIcon fontSize="small" />
// //                       ) : (
// //                         <ArrowDownwardIcon fontSize="small" />
// //                       )}
// //                     </IconButton>
// //                   )}
// //                 </TableCell>
// //               ))}
// //             </TableRow>
// //           </TableHead>

// //           <TableBody>
// //             {sortedRows.map((row) => (
// //               <TableRow key={row.id}>
// //                 {columns.map((column, columnIndex) => (
// //                   <TableCell
// //                     key={column.field}
// //                     align={column.align || "left"}
// //                     style={{
// //                       position: column.stickyLeft ? "sticky" : undefined,
// //                       left: column.stickyLeft ? 0 : undefined, // Sticky for first column
// //                       backgroundColor: column.stickyLeft ? "#fff" : "", // Ensure the sticky first column has a background color
// //                       zIndex: column.stickyLeft ? 2 : undefined, // Ensure it stays on top when scrolling
// //                     }}
// //                   >
// //                     {column.field === "actions" ? (
// //                       <Stack direction="row" spacing={1}>
// //                         <Button
// //                           variant="outlined"
// //                           color="primary"
// //                           size="small"
// //                           startIcon={<EditIcon />}
// //                           onClick={() => handleEditRow(row)}
// //                           disabled={!row.editable}
// //                         >
// //                           Edit
// //                         </Button>
// //                         <Button
// //                           variant="outlined"
// //                           color="error"
// //                           size="small"
// //                           startIcon={<DeleteIcon />}
// //                           onClick={() => handleDeleteRow(row.id)}
// //                           disabled={!row.editable}
// //                         >
// //                           Delete
// //                         </Button>
// //                       </Stack>
// //                     ) : row.id === editingRow ? (
// //                       <TextField
// //                         value={editedRowData[column.field] || row[column.field]}
// //                         onChange={(e) =>
// //                           handleChange(e, column.field as keyof Row)
// //                         }
// //                         fullWidth
// //                         variant="standard"
// //                       />
// //                     ) : (
// //                       row[column.field as keyof Row]
// //                     )}
// //                   </TableCell>
// //                 ))}
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       {editingRow && (
// //         <Stack direction="row" spacing={2} marginTop={2}>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             onClick={() => handleSaveEdit(editingRow)}
// //           >
// //             Save
// //           </Button>
// //           <Button
// //             variant="outlined"
// //             color="secondary"
// //             onClick={handleCancelEdit}
// //           >
// //             Cancel
// //           </Button>
// //         </Stack>
// //       )}
// //     </div>
// //   );
// // }
// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [isUnsavedRow, setIsUnsavedRow] = React.useState<boolean>(false);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       if (aValue == null) aValue = "";
//       if (bValue == null) bValue = "";

//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
//         return 0;
//       }
//     });
//   }, [rows, sortedField, sortOrder]);
//   const isRowComplete = (row: Partial<Row>) => {
//     return row.name && row.email && row.age !== undefined;
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "",
//       email: "",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//     setIsUnsavedRow(true);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//     setIsUnsavedRow(true);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     if (!isRowComplete(editedRowData)) {
//       alert("Please fill all required fields before saving.");
//       return;
//     }
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//     setIsUnsavedRow(false);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//     setIsUnsavedRow(false);
//   };

//   // const handleCancelEdit = () => {
//   //   setEditingRow(null);
//   //   setEditedRowData({});
//   //   setIsUnsavedRow(false);
//   // };

//   const handleCancelEdit = () => {
//     if (editingRow !== null) {
//       setRows((prevRows) =>
//         prevRows.filter((row) => row.id !== editingRow || !row.isNew)
//       );
//     }
//     setEditingRow(null);
//     setEditedRowData({});
//     setIsUnsavedRow(false);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleAddRow}
//         disabled={isUnsavedRow} // Disable "Add Row" button if there is an unsaved row
//       >
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{
//           maxHeight: 400,
//           overflow: "auto",
//           position: "relative",
//           zIndex: 4,
//         }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     zIndex: column.stickyLeft ? 4 : undefined,
//                     left: column.stickyLeft ? 0 : undefined,
//                     backgroundColor: "red",
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {sortedRows.map((row, index) => (
//               <TableRow
//                 key={row.id}
//                 sx={{
//                   backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff", // Alternate background color
//                 }}
//               >
//                 {columns.map((column, columnIndex) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={{
//                       position: column.stickyLeft ? "sticky" : undefined, // Sticky positioning
//                       left: column.stickyLeft ? 0 : undefined, // Left alignment for sticky column
//                       backgroundColor: column.stickyLeft
//                         ? index % 2 === 0
//                           ? "#f9f9f9" // Alternate background for even rows in sticky column
//                           : "#ffffff" // White background for odd rows in sticky column
//                         : index % 2 === 0
//                         ? "#f9f9f9" // Alternate background for even rows in other columns
//                         : "#ffffff", // White background for odd rows in other columns
//                       zIndex: column.stickyLeft ? 2 : undefined, // Sticky column on top
//                     }}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <Button
//                           variant="outlined"
//                           color="primary"
//                           size="small"
//                           startIcon={<EditIcon />}
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="outlined"
//                           color="error"
//                           size="small"
//                           startIcon={<DeleteIcon />}
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable}
//                         >
//                           Delete
//                         </Button>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="standard"
//                       />
//                     ) : (
//                       row[column.field as keyof Row]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow && (
//         <Stack direction="row" spacing={2} marginTop={2}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//             disabled={!isRowComplete(editedRowData)} // Disable "Save" if any field is empty
//           >
//             Save
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={handleCancelEdit}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// // Define types for rows and columns
// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   isHide: boolean;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// // Define columns
// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true, isHide: false },
//   { field: "email", label: "Email", isHide: false },
//   { field: "age", label: "Age", align: "right", isHide: false },
//   { field: "dateCreated", label: "Date Created", isHide: false },
//   { field: "lastLogin", label: "Last Login", isHide: false },
//   { field: "actions", label: "Actions", isHide: false },
// ];

// // Define initial rows
// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   // Function to determine row background color
//   const getRowBackgroundColor = (index: number) => {
//     return index % 2 === 0 ? "#f9f9f9" : "#ffffff";
//   };

//   // Function to get sticky column styles
//   const getStickyColumnStyle = (column: Column, index: number) => ({
//     position: column.stickyLeft ? "sticky" : undefined,
//     left: column.stickyLeft ? 0 : undefined,
//     backgroundColor: column.stickyLeft
//       ? getRowBackgroundColor(index) // Alternate background color for sticky column
//       : "",
//     zIndex: column.stickyLeft ? 2 : undefined,
//   });

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       if (aValue == null) aValue = "";
//       if (bValue == null) bValue = "";

//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         return aStr.localeCompare(bStr) * (sortOrder === "asc" ? 1 : -1);
//       }
//     });
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setRows((prevRows) => prevRows.filter((row) => !row.isNew));
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column, index) => (
//                 <TableCell
//                   key={column.field}
//                   align={column.align || "left"}
//                   style={{
//                     position: "sticky",
//                     top: 0,
//                     zIndex: column.stickyLeft ? 4 : undefined,
//                     left: column.stickyLeft ? 0 : undefined,
//                     backgroundColor: "red", // header background color
//                   }}
//                 >
//                   {column.label}
//                   {column.field !== "actions" && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleSort(column.field as keyof Row)}
//                     >
//                       {sortedField === column.field && sortOrder === "asc" ? (
//                         <ArrowUpwardIcon fontSize="small" />
//                       ) : (
//                         <ArrowDownwardIcon fontSize="small" />
//                       )}
//                     </IconButton>
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {sortedRows.map((row, index) => (
//               <TableRow
//                 key={row.id}
//                 sx={{ backgroundColor: getRowBackgroundColor(index) }}
//               >
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.field}
//                     align={column.align || "left"}
//                     style={getStickyColumnStyle(column, index)}
//                   >
//                     {column.field === "actions" ? (
//                       <Stack direction="row" spacing={1}>
//                         <IconButton
//                           size="small"
//                           onClick={() => handleEditRow(row)}
//                           disabled={!row.editable}
//                         >
//                           <EditIcon />
//                         </IconButton>
//                         <IconButton
//                           size="small"
//                           onClick={() => handleDeleteRow(row.id)}
//                           disabled={!row.editable}
//                         >
//                           <DeleteIcon />
//                         </IconButton>
//                       </Stack>
//                     ) : row.id === editingRow ? (
//                       <TextField
//                         value={editedRowData[column.field] || row[column.field]}
//                         onChange={(e) =>
//                           handleChange(e, column.field as keyof Row)
//                         }
//                         fullWidth
//                         variant="outlined"
//                         size="small"
//                         style={{
//                           borderRadius: "8px",
//                           backgroundColor: "#f3f4f6", // Background color for input
//                           marginTop: "4px",
//                           borderColor: "#4caf50", // Custom border color
//                         }}
//                       />
//                     ) : (
//                       row[column.field]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {editingRow !== null && (
//         <Stack direction="row" spacing={2} style={{ marginTop: "16px" }}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button variant="outlined" onClick={handleCancelEdit}>
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";

// // Define types for rows and columns
// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   isHide: boolean;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// // Define columns
// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true, isHide: false },
//   { field: "email", label: "Email", isHide: false },
//   { field: "age", label: "Age", align: "right", isHide: true },
//   { field: "dateCreated", label: "Date Created", isHide: false },
//   { field: "lastLogin", label: "Last Login", isHide: true },
//   { field: "actions", label: "Actions", isHide: false },
// ];

// // Define initial rows
// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");

//   // Function to determine row background color
//   const getRowBackgroundColor = (index: number) => {
//     return index % 2 === 0 ? "#f9f9f9" : "#ffffff";
//   };

//   // Function to get sticky column styles
//   const getStickyColumnStyle = (column: Column, index: number) => ({
//     position: column.stickyLeft ? "sticky" : undefined,
//     left: column.stickyLeft ? 0 : undefined,
//     backgroundColor: column.stickyLeft
//       ? getRowBackgroundColor(index) // Alternate background color for sticky column
//       : "",
//     zIndex: column.stickyLeft ? 2 : undefined,
//   });

//   const sortedRows = React.useMemo(() => {
//     if (!sortedField) return rows;
//     return [...rows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       if (aValue == null) aValue = "";
//       if (bValue == null) bValue = "";

//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         return aStr.localeCompare(bStr) * (sortOrder === "asc" ? 1 : -1);
//       }
//     });
//   }, [rows, sortedField, sortOrder]);

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setRows((prevRows) => prevRows.filter((row) => !row.isNew));
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: 400, overflow: "auto" }}
//       >
//         <Table stickyHeader aria-label="custom table">
//           <TableHead>
//             <TableRow>
//               {columns.map(
//                 (column) =>
//                   !column.isHide && (
//                     <TableCell
//                       key={column.field}
//                       align={column.align || "left"}
//                       style={{
//                         position: "sticky",
//                         top: 0,
//                         zIndex: column.stickyLeft ? 4 : undefined,
//                         left: column.stickyLeft ? 0 : undefined,
//                         backgroundColor: "red", // header background color
//                       }}
//                     >
//                       {column.label}
//                       {column.field !== "actions" && (
//                         <IconButton
//                           size="small"
//                           onClick={() => handleSort(column.field as keyof Row)}
//                         >
//                           {sortedField === column.field &&
//                           sortOrder === "asc" ? (
//                             <ArrowUpwardIcon fontSize="small" />
//                           ) : (
//                             <ArrowDownwardIcon fontSize="small" />
//                           )}
//                         </IconButton>
//                       )}
//                     </TableCell>
//                   )
//               )}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {sortedRows.map((row, index) => (
//               <TableRow
//                 key={row.id}
//                 sx={{ backgroundColor: getRowBackgroundColor(index) }}
//               >
//                 {columns.map(
//                   (column) =>
//                     !column.isHide && (
//                       <TableCell
//                         key={column.field}
//                         align={column.align || "left"}
//                         style={getStickyColumnStyle(column, index)}
//                       >
//                         {column.field === "actions" ? (
//                           <Stack direction="row" spacing={1}>
//                             {row.id === editingRow || row.isNew ? (
//                               <>
//                                 <Button
//                                   size="small"
//                                   variant="contained"
//                                   color="primary"
//                                   onClick={() => handleSaveEdit(row.id)}
//                                 >
//                                   Save
//                                 </Button>
//                                 <Button
//                                   size="small"
//                                   variant="outlined"
//                                   onClick={handleCancelEdit}
//                                 >
//                                   Cancel
//                                 </Button>
//                               </>
//                             ) : (
//                               <>
//                                 <IconButton
//                                   size="small"
//                                   onClick={() => handleEditRow(row)}
//                                   disabled={!row.editable}
//                                 >
//                                   <EditIcon />
//                                 </IconButton>
//                                 <IconButton
//                                   size="small"
//                                   onClick={() => handleDeleteRow(row.id)}
//                                   disabled={!row.editable}
//                                 >
//                                   <DeleteIcon />
//                                 </IconButton>
//                               </>
//                             )}
//                           </Stack>
//                         ) : row.id === editingRow ? (
//                           <TextField
//                             value={
//                               editedRowData[column.field] || row[column.field]
//                             }
//                             onChange={(e) =>
//                               handleChange(e, column.field as keyof Row)
//                             }
//                             fullWidth
//                             variant="outlined"
//                             size="small"
//                             style={{
//                               borderRadius: "8px",
//                               backgroundColor: "#f3f4f6",
//                               marginTop: "4px",
//                               borderColor: "#4caf50",
//                             }}
//                           />
//                         ) : (
//                           row[column.field]
//                         )}
//                       </TableCell>
//                     )
//                 )}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* {editingRow !== null && (
//         <Stack direction="row" spacing={2} style={{ marginTop: "16px" }}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button variant="outlined" onClick={handleCancelEdit}>
//             Cancel
//           </Button>
//         </Stack>
//       )} */}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

// // Define types for rows and columns
// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   isHide: boolean;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// // Define initial rows
// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [columnsState, setColumnsState] = React.useState<Column[]>([
//     { field: "name", label: "Name", stickyLeft: true, isHide: false },
//     { field: "email", label: "Email", isHide: false },
//     { field: "age", label: "Age", align: "right", isHide: false },
//     { field: "dateCreated", label: "Date Created", isHide: false },
//     { field: "lastLogin", label: "Last Login", isHide: false },
//     { field: "actions", label: "Actions", isHide: false },
//   ]);

//   // Function to add a new row
//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "New User",
//       email: "new.user@example.com",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//   };

//   // Function to toggle column visibility
//   const toggleColumnVisibility = (field: keyof Row | "actions") => {
//     setColumnsState((prevState) =>
//       prevState.map((column) =>
//         column.field === field ? { ...column, isHide: !column.isHide } : column
//       )
//     );
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setRows((prevRows) => prevRows.filter((row) => !row.isNew));
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   // Columns definition for DataGrid
//   const dataGridColumns: GridColDef[] = columnsState
//     .filter((column) => !column.isHide) // Show only visible columns
//     .map((column) => ({
//       field: column.field === "actions" ? "actions" : column.field,
//       headerName: column.label,
//       width: 150,
//       editable: column.field !== "actions",
//       sortable: true,
//       align: column.align,
//     }));

//   // Rows for DataGrid
//   const dataGridRows: GridRowsProp = rows.map((row) => ({
//     id: row.id,
//     ...row,
//   }));

//   return (
//     <div style={{ width: "100%" }}>
//       <Button variant="contained" color="primary" onClick={handleAddRow}>
//         Add Row
//       </Button>

//       <div>
//         {/* Toggle Column Visibility Buttons */}
//         {columnsState.map(
//           (column) =>
//             column.field !== "actions" && (
//               <Button
//                 key={column.field}
//                 onClick={() => toggleColumnVisibility(column.field)}
//                 variant={column.isHide ? "outlined" : "contained"}
//               >
//                 {column.isHide
//                   ? `Show ${column.label}`
//                   : `Hide ${column.label}`}
//               </Button>
//             )
//         )}
//       </div>

//       {/* DataGrid Component */}
//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={dataGridRows}
//           columns={dataGridColumns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//           disableSelectionOnClick
//           onSelectionModelChange={(newSelection) => {
//             // Handle selection if necessary
//           }}
//           filterModel={{
//             items: [
//               { columnField: "name", operatorValue: "contains", value: "" },
//               { columnField: "email", operatorValue: "contains", value: "" },
//               { columnField: "age", operatorValue: "greaterThan", value: 0 },
//             ],
//           }}
//         />
//       </div>

//       {editingRow !== null && (
//         <Stack direction="row" spacing={2} style={{ marginTop: "16px" }}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleSaveEdit(editingRow)}
//           >
//             Save
//           </Button>
//           <Button variant="outlined" onClick={handleCancelEdit}>
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </div>
//   );
// }

// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import {
//   DataGridPro,
//   GridColDef,
//   GridRowsProp,
//   GridActionsCellItem,
// } from "@mui/x-data-grid-pro";
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomEmail,
//   randomUpdatedDate,
// } from "@mui/x-data-grid-generator";

// export default function BasicColumnPinning() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGridPro
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pinnedColumns: {
//             left: ["name"], // Pinning the 'name' column to the left
//             right: ["actions"], // Pinning the 'actions' column to the right
//           },
//         }}
//       />
//     </div>
//   );
// }

// const columns: GridColDef[] = [
//   { field: "name", headerName: "Name", width: 160, editable: true },
//   { field: "email", headerName: "Email", width: 200, editable: true },
//   { field: "age", headerName: "Age", type: "number", editable: true },
//   {
//     field: "dateCreated",
//     headerName: "Date Created",
//     type: "date",
//     width: 180,
//     editable: true,
//   },
//   {
//     field: "lastLogin",
//     headerName: "Last Login",
//     type: "dateTime",
//     width: 220,
//     editable: true,
//   },
//   {
//     field: "actions",
//     type: "actions",
//     width: 100,
//     getActions: () => [
//       <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
//       <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
//     ],
//   },
// ];

// const rows: GridRowsProp = [
//   {
//     id: 1,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 25,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 2,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 36,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 3,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 19,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 4,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 28,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 5,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 23,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 6,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 27,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 7,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 18,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 8,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 31,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 9,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 24,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
//   {
//     id: 10,
//     name: randomTraderName(),
//     email: randomEmail(),
//     age: 35,
//     dateCreated: randomCreatedDate(),
//     lastLogin: randomUpdatedDate(),
//   },
// ];

/// updated code down same as copilot
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import CloseIcon from "@mui/icons-material/Close";
// import CheckIcon from "@mui/icons-material/Check";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import {
//   Box,
//   Menu,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Typography,
// } from "@mui/material";

// // Define types for rows and columns
// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   isHide: boolean;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// // Define columns
// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true, isHide: false },
//   { field: "email", label: "Email", isHide: false },
//   { field: "age", label: "Age", align: "right", isHide: false },
//   { field: "dateCreated", label: "Date Created", isHide: false },
//   { field: "lastLogin", label: "Last Login", isHide: false },
//   { field: "actions", label: "Actions", isHide: false },
// ];

// // Define initial rows
// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 26,
//     dateCreated: "2023-07-23",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Raj",
//     email: "Raj@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 4,
//     name: "Rahul",
//     email: "Rahul@example.com",
//     age: 46,
//     dateCreated: "2023-07-29",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Smith",
//     email: "smith@example.com",
//     age: 56,
//     dateCreated: "2023-07-30",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [isUnsavedRow, setIsUnsavedRow] = React.useState<boolean>(false);
//   const [filters, setFilters] = React.useState<
//     { field: keyof Row; operator: string; value: string }[]
//   >([]);
//   const [anchorE1, setAnchorE1] = React.useState<null | HTMLElement>(null);
//   const [currentFliterField, setCurrentFilterField] = React.useState<
//     keyof Row | null
//   >(null);
//   const [currentFliterOperator, setCurrentFilterOperator] =
//     React.useState<string>("contains");
//   const [currentFliterValue, setCurrentFilterValue] =
//     React.useState<string>("");

//   const handleFilterClick = (
//     event: React.MouseEvent<HTMLElement>,
//     field: keyof Row
//   ) => {
//     setAnchorE1(event.currentTarget);
//     setCurrentFilterField(field);
//   };

//   const handleFilterClose = () => {
//     setAnchorE1(null);
//     setCurrentFilterField(null);
//     setCurrentFilterOperator("contains");
//     setCurrentFilterValue("");
//   };

//   const applyFilter = () => {
//     if (currentFliterField) {
//       setFilters((prevFilters) => {
//         const newFilters = [...prevFilters];
//         const filterIndex = newFilters.findIndex(
//           (filter) => filter.field === currentFliterField
//         );
//         if (filterIndex >= 0) {
//           newFilters[filterIndex] = {
//             field: currentFliterField,
//             operator: currentFliterOperator,
//             value: currentFliterValue,
//           };
//         } else {
//           newFilters.push({
//             field: currentFliterField,
//             operator: currentFliterOperator,
//             value: currentFliterValue,
//           });
//         }
//         return newFilters;
//       });
//     }
//     handleFilterClose();
//   };

//   // Function to determine row background color
//   const getRowBackgroundColor = (index: number) => {
//     return index % 2 === 0 ? "#f9f9f9" : "#ffffff";
//   };

//   // Function to get sticky column styles
//   const getStickyColumnStyle = (column: Column, index: number) => ({
//     position: column.stickyLeft ? "sticky" : undefined,
//     left: column.stickyLeft ? 0 : undefined,
//     backgroundColor: column.stickyLeft
//       ? getRowBackgroundColor(index) // Alternate background color for sticky column
//       : "",
//     zIndex: column.stickyLeft ? 2 : undefined,
//   });

//   const sortedRows = React.useMemo(() => {
//     let filteredRows = rows;

//     // Apply filter
//     filters.forEach(({ field, operator, value }) => {
//       if (value) {
//         filteredRows = filteredRows.filter((row) => {
//           const rowValue = row[field]?.toString().toLowerCase();
//           const filterValue = value.toLowerCase();
//           switch (operator) {
//             case "equals":
//               return rowValue === filterValue;
//             case "contains":
//               return rowValue?.includes(filterValue) ?? false;
//             case "greaterThan":
//               return parseFloat(rowValue || "") > parseFloat(filterValue);
//             case "lessThan":
//               return parseFloat(rowValue || "") < parseFloat(filterValue);
//             default:
//               return true;
//           }
//         });
//       }
//     });

//     if (!sortedField) return filteredRows;
//     return [...filteredRows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       if (aValue == null) aValue = "";
//       if (bValue == null) bValue = "";

//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "desc" ? 1 : -1;
//         return 0;
//         //return aStr.localeCompare(bStr) * (sortOrder === "asc" ? 1 : -1);
//       }
//     });
//   }, [rows, sortedField, sortOrder, filters]);

//   const isRowComlete = (row: Partial<Row>) => {
//     return row.name && row.email && row.age !== undefined;
//   };

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "",
//       email: "",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//     setIsUnsavedRow(true);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//     setIsUnsavedRow(true);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     if (!isRowComlete(editedRowData)) {
//       alert("data");
//       return;
//     }
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setRows((prevRows) => prevRows.filter((row) => !row.isNew));
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   return (
//     <>
//       <Box>
//         <div style={{ width: "100%" }}>
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>

//           <TableContainer
//             component={Paper}
//             style={{ maxHeight: 400, overflow: "auto" }}
//           >
//             <Table stickyHeader aria-label="custom table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map(
//                     (column) =>
//                       !column.isHide && (
//                         <TableCell
//                           key={column.field}
//                           align={column.align || "left"}
//                           style={{
//                             position: "sticky",
//                             top: 0,
//                             zIndex: column.stickyLeft ? 4 : undefined,
//                             left: column.stickyLeft ? 0 : undefined,
//                             backgroundColor: "red", // header background color
//                           }}
//                         >
//                           {column.label}
//                           {column.field !== "actions" && (
//                             <>
//                               <IconButton
//                                 size="small"
//                                 onClick={() =>
//                                   handleSort(column.field as keyof Row)
//                                 }
//                               >
//                                 {sortedField === column.field &&
//                                 sortOrder === "asc" ? (
//                                   <ArrowUpwardIcon fontSize="small" />
//                                 ) : (
//                                   <ArrowDownwardIcon fontSize="small" />
//                                 )}
//                               </IconButton>
//                               <IconButton
//                                 size="small"
//                                 onClick={(e) =>
//                                   handleFilterClick(
//                                     e,
//                                     column.field as keyof Row
//                                   )
//                                 }
//                               >
//                                 <MoreVertIcon fontSize="small" />
//                               </IconButton>
//                             </>
//                           )}
//                         </TableCell>
//                       )
//                   )}
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {sortedRows.map((row, index) => (
//                   <TableRow
//                     key={row.id}
//                     sx={{ backgroundColor: getRowBackgroundColor(index) }}
//                   >
//                     {columns.map(
//                       (column) =>
//                         !column.isHide && (
//                           <TableCell
//                             key={column.field}
//                             align={column.align || "left"}
//                             style={getStickyColumnStyle(column, index)}
//                           >
//                             {column.field === "actions" ? (
//                               <Stack direction="row" spacing={1}>
//                                 {row.id === editingRow || row.isNew ? (
//                                   <>
//                                     <Button
//                                       size="small"
//                                       variant="contained"
//                                       color="primary"
//                                       onClick={() => handleSaveEdit(row.id)}
//                                     >
//                                       Save
//                                     </Button>
//                                     <Button
//                                       size="small"
//                                       variant="outlined"
//                                       onClick={handleCancelEdit}
//                                     >
//                                       Cancel
//                                     </Button>
//                                   </>
//                                 ) : (
//                                   <>
//                                     <IconButton
//                                       size="small"
//                                       onClick={() => handleEditRow(row)}
//                                       disabled={!row.editable}
//                                     >
//                                       <EditIcon />
//                                     </IconButton>
//                                     <IconButton
//                                       size="small"
//                                       onClick={() => handleDeleteRow(row.id)}
//                                       disabled={!row.editable}
//                                     >
//                                       <DeleteIcon />
//                                     </IconButton>
//                                   </>
//                                 )}
//                               </Stack>
//                             ) : row.id === editingRow ? (
//                               <TextField
//                                 value={
//                                   editedRowData[column.field] ||
//                                   row[column.field]
//                                 }
//                                 onChange={(e) =>
//                                   handleChange(e, column.field as keyof Row)
//                                 }
//                                 fullWidth
//                                 variant="outlined"
//                                 size="small"
//                                 style={{
//                                   borderRadius: "8px",
//                                   backgroundColor: "#f3f4f6",
//                                   marginTop: "4px",
//                                   borderColor: "#4caf50",
//                                 }}
//                               />
//                             ) : (
//                               row[column.field]
//                             )}
//                           </TableCell>
//                         )
//                     )}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </Box>
//       <Menu
//         anchorEl={anchorE1}
//         open={Boolean(anchorE1)}
//         onClose={handleFilterClose}
//       >
//         <Box style={{ padding: "10px", width: "250px" }}>
//           <Typography>Filter</Typography>
//           <FormControl
//             fullWidth
//             variant="outlined"
//             size="small"
//             style={{ marginTop: "10px" }}
//           >
//             <InputLabel>Column</InputLabel>
//             <Select
//               value={currentFliterField || ""}
//               onChange={(e) =>
//                 setCurrentFilterField(e.target.value as keyof Row)
//               }
//               label="column"
//             >
//               {columns
//                 .filter((column) => column.field !== "actions")
//                 .map((column) => (
//                   <MenuItem key={column.field} value={column.field}>
//                     {column.label}
//                   </MenuItem>
//                 ))}
//             </Select>
//           </FormControl>
//           <FormControl
//             fullWidth
//             variant="outlined"
//             size="small"
//             style={{ marginTop: "10px" }}
//           >
//             <InputLabel>Operator</InputLabel>
//             <Select
//               value={currentFliterOperator}
//               onChange={(e) => setCurrentFilterOperator(e.target.value)}
//               label="Operator"
//             >
//               <MenuItem value="contains">Contains</MenuItem>
//               <MenuItem value="equals">Equals</MenuItem>
//               <MenuItem value="greaterThan">Greater Than</MenuItem>
//               <MenuItem value="lessThan">Less Than</MenuItem>
//             </Select>
//           </FormControl>
//           <TextField
//             fullWidth
//             variant="outlined"
//             size="small"
//             label="Value"
//             value={currentFliterValue}
//             onChange={(e) => setCurrentFilterValue(e.target.value)}
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={applyFilter}
//           >
//             Apply
//           </Button>
//         </Box>
//       </Menu>
//     </>
//   );
// }

// updated code down same as copilot
// import * as React from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import CloseIcon from "@mui/icons-material/Close";
// import CheckIcon from "@mui/icons-material/Check";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import {
//   Box,
//   Menu,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Typography,
// } from "@mui/material";

// // Define types for rows and columns
// interface Row {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: string;
//   lastLogin: string;
//   editable: boolean;
//   isNew?: boolean;
//   stickyLeft?: boolean;
// }

// interface Column {
//   field: keyof Row | "actions";
//   label: string;
//   isHide: boolean;
//   align?: "left" | "right" | "center";
//   stickyLeft?: boolean;
// }

// // Define columns
// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true, isHide: false },
//   { field: "email", label: "Email", isHide: false },
//   { field: "age", label: "Age", align: "right", isHide: false },
//   { field: "dateCreated", label: "Date Created", isHide: false },
//   { field: "lastLogin", label: "Last Login", isHide: false },
//   { field: "actions", label: "Actions", isHide: false },
// ];

// // Define initial rows
// const initialRows: Row[] = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     age: 25,
//     dateCreated: "2023-08-01",
//     lastLogin: "2023-08-07 10:15:00",
//     editable: false,
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     age: 26,
//     dateCreated: "2023-07-23",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 3,
//     name: "Raj",
//     email: "Raj@example.com",
//     age: 36,
//     dateCreated: "2023-07-21",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 4,
//     name: "Rahul",
//     email: "Rahul@example.com",
//     age: 46,
//     dateCreated: "2023-07-29",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
//   {
//     id: 5,
//     name: "Smith",
//     email: "smith@example.com",
//     age: 56,
//     dateCreated: "2023-07-30",
//     lastLogin: "2023-08-06 14:00:00",
//     editable: true,
//   },
// ];

// export default function TableSprinkler() {
//   const [rows, setRows] = React.useState<Row[]>(initialRows);
//   const [editingRow, setEditingRow] = React.useState<number | null>(null);
//   const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
//   const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
//   const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
//   const [isUnsavedRow, setIsUnsavedRow] = React.useState<boolean>(false);
//   const [filters, setFilters] = React.useState<
//     { field: keyof Row; operator: string; value: string }[]
//   >([]);
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [currentFilterField, setCurrentFilterField] = React.useState<
//     keyof Row | null
//   >(null);
//   const [currentFilterOperator, setCurrentFilterOperator] =
//     React.useState<string>("contains");
//   const [currentFilterValue, setCurrentFilterValue] =
//     React.useState<string>("");

//   const handleFilterClick = (
//     event: React.MouseEvent<HTMLElement>,
//     field: keyof Row
//   ) => {
//     const existingFilter = filters.find((filter) => filter.field === field);
//     if (existingFilter) {
//       setCurrentFilterOperator(existingFilter.operator);
//       setCurrentFilterValue(existingFilter.value);
//     } else {
//       setCurrentFilterOperator("contains");
//       setCurrentFilterValue("");
//     }
//     setAnchorEl(event.currentTarget);
//     setCurrentFilterField(field);
//   };

//   const handleFilterClose = () => {
//     setAnchorEl(null);
//     setCurrentFilterField(null);
//   };

//   const applyFilter = () => {
//     if (currentFilterField) {
//       setFilters((prevFilters) => {
//         const newFilters = [...prevFilters];
//         const filterIndex = newFilters.findIndex(
//           (filter) => filter.field === currentFilterField
//         );
//         if (filterIndex >= 0) {
//           newFilters[filterIndex] = {
//             field: currentFilterField,
//             operator: currentFilterOperator,
//             value: currentFilterValue,
//           };
//         } else {
//           newFilters.push({
//             field: currentFilterField,
//             operator: currentFilterOperator,
//             value: currentFilterValue,
//           });
//         }
//         return newFilters;
//       });
//     }
//     handleFilterClose();
//   };

//   // Function to determine row background color
//   const getRowBackgroundColor = (index: number) => {
//     return index % 2 === 0 ? "#f9f9f9" : "#ffffff";
//   };

//   // Function to get sticky column styles
//   const getStickyColumnStyle = (column: Column, index: number) => ({
//     position: column.stickyLeft ? "sticky" : undefined,
//     left: column.stickyLeft ? 0 : undefined,
//     backgroundColor: column.stickyLeft
//       ? getRowBackgroundColor(index) // Alternate background color for sticky column
//       : "",
//     zIndex: column.stickyLeft ? 2 : undefined,
//   });

//   const sortedRows = React.useMemo(() => {
//     let filteredRows = rows;

//     // Apply filter
//     filters.forEach(({ field, operator, value }) => {
//       if (value) {
//         filteredRows = filteredRows.filter((row) => {
//           const rowValue = row[field]?.toString().toLowerCase();
//           const filterValue = value.toLowerCase();
//           switch (operator) {
//             case "equals":
//               return rowValue === filterValue;
//             case "contains":
//               return rowValue?.includes(filterValue) ?? false;
//             case "greaterThan":
//               return parseFloat(rowValue || "") > parseFloat(filterValue);
//             case "lessThan":
//               return parseFloat(rowValue || "") < parseFloat(filterValue);
//             default:
//               return true;
//           }
//         });
//       }
//     });

//     if (!sortedField) return filteredRows;
//     return [...filteredRows].sort((a, b) => {
//       let aValue = a[sortedField];
//       let bValue = b[sortedField];

//       if (aValue == null) aValue = "";
//       if (bValue == null) bValue = "";

//       if (typeof aValue === "number" && typeof bValue === "number") {
//         return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
//       } else {
//         const aStr = aValue.toString();
//         const bStr = bValue.toString();
//         if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
//         if (aStr > bStr) return sortOrder === "desc" ? 1 : -1;
//         return 0;
//         //return aStr.localeCompare(bStr) * (sortOrder === "asc" ? 1 : -1);
//       }
//     });
//   }, [rows, sortedField, sortOrder, filters]);

//   const isRowComlete = (row: Partial<Row>) => {
//     return row.name && row.email && row.age !== undefined;
//   };

//   const handleSort = (field: keyof Row) => {
//     if (sortedField === field) {
//       setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
//     } else {
//       setSortedField(field);
//       setSortOrder("asc");
//     }
//   };

//   const handleAddRow = () => {
//     const newRow: Row = {
//       id: rows.length + 1,
//       name: "",
//       email: "",
//       age: 0,
//       dateCreated: new Date().toISOString().split("T")[0],
//       lastLogin: new Date().toISOString(),
//       editable: true,
//       isNew: true,
//     };
//     setRows((prevRows) => [newRow, ...prevRows]);
//     setEditingRow(newRow.id);
//     setEditedRowData(newRow);
//     setIsUnsavedRow(true);
//   };

//   const handleEditRow = (row: Row) => {
//     if (!row.editable) return;
//     setEditingRow(row.id);
//     setEditedRowData(row);
//     setIsUnsavedRow(true);
//   };

//   const handleSaveEdit = (rowId: number) => {
//     if (!isRowComlete(editedRowData)) {
//       alert("data");
//       return;
//     }
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
//       )
//     );
//     setEditingRow(null);
//   };

//   const handleDeleteRow = (id: number) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     if (id === editingRow) setEditingRow(null);
//   };

//   const handleCancelEdit = () => {
//     setRows((prevRows) => prevRows.filter((row) => !row.isNew));
//     setEditingRow(null);
//     setEditedRowData({});
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof Row
//   ) => {
//     setEditedRowData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   const clearFilter = () => {
//     if (currentFilterField) {
//       setFilters((prevFilters) =>
//         prevFilters.filter((filter) => filter.field !== currentFilterField)
//       );
//     }
//     handleFilterClose();
//   };

//   return (
//     <>
//       <Box>
//         <div style={{ width: "100%" }}>
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>

//           <TableContainer
//             component={Paper}
//             style={{ maxHeight: 400, overflow: "auto" }}
//           >
//             <Table stickyHeader aria-label="custom table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => {
//                     if (column.isHide) return null;

//                     // Check if there is an active filter on this column
//                     const isColumnFiltered = filters.some(
//                       (filter) => filter.field === column.field
//                     );

//                     return (
//                       <TableCell
//                         key={column.field}
//                         align={column.align || "left"}
//                         style={{
//                           position: "sticky",
//                           top: 0,
//                           zIndex: column.stickyLeft ? 4 : undefined,
//                           left: column.stickyLeft ? 0 : undefined,
//                           backgroundColor: "#fff", // header background color
//                         }}
//                       >
//                         {column.label}

//                         {column.field !== "actions" && (
//                           <>
//                             <IconButton
//                               size="small"
//                               onClick={() =>
//                                 handleSort(column.field as keyof Row)
//                               }
//                             >
//                               {sortedField === column.field &&
//                               sortOrder === "asc" ? (
//                                 <ArrowUpwardIcon fontSize="small" />
//                               ) : (
//                                 <ArrowDownwardIcon fontSize="small" />
//                               )}
//                             </IconButton>

//                             <IconButton
//                               size="small"
//                               onClick={(e) =>
//                                 handleFilterClick(e, column.field as keyof Row)
//                               }
//                             >
//                               <MoreVertIcon fontSize="small" />
//                             </IconButton>

//                             {/* Display Filter Icon if column has active filter */}

//                             <>
//                               {filters.some(
//                                 (filter) => filter.field === column.field
//                               ) && (
//                                 <IconButton
//                                   size="small"
//                                   onClick={(e) =>
//                                     handleFilterClick(
//                                       e,
//                                       column.field as keyof Row
//                                     )
//                                   }
//                                 >
//                                   <FilterListIcon color="primary" />
//                                 </IconButton>
//                               )}
//                             </>
//                           </>
//                         )}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {sortedRows.map((row, index) => (
//                   <TableRow
//                     key={row.id}
//                     sx={{ backgroundColor: getRowBackgroundColor(index) }}
//                   >
//                     {columns.map(
//                       (column) =>
//                         !column.isHide && (
//                           <TableCell
//                             key={column.field}
//                             align={column.align || "left"}
//                             style={getStickyColumnStyle(column, index)}
//                           >
//                             {column.field === "actions" ? (
//                               <Stack direction="row" spacing={1}>
//                                 {row.id === editingRow || row.isNew ? (
//                                   <>
//                                     <Button
//                                       size="small"
//                                       variant="contained"
//                                       color="primary"
//                                       onClick={() => handleSaveEdit(row.id)}
//                                     >
//                                       Save
//                                     </Button>
//                                     <Button
//                                       size="small"
//                                       variant="outlined"
//                                       onClick={handleCancelEdit}
//                                     >
//                                       Cancel
//                                     </Button>
//                                   </>
//                                 ) : (
//                                   <>
//                                     <IconButton
//                                       size="small"
//                                       onClick={() => handleEditRow(row)}
//                                       disabled={!row.editable}
//                                     >
//                                       <EditIcon />
//                                     </IconButton>
//                                     <IconButton
//                                       size="small"
//                                       onClick={() => handleDeleteRow(row.id)}
//                                       disabled={!row.editable}
//                                     >
//                                       <DeleteIcon />
//                                     </IconButton>
//                                   </>
//                                 )}
//                               </Stack>
//                             ) : row.id === editingRow ? (
//                               <TextField
//                                 value={
//                                   editedRowData[column.field] ||
//                                   row[column.field]
//                                 }
//                                 onChange={(e) =>
//                                   handleChange(e, column.field as keyof Row)
//                                 }
//                                 fullWidth
//                                 variant="outlined"
//                                 size="small"
//                                 style={{
//                                   borderRadius: "8px",
//                                   backgroundColor: "#f3f4f6",
//                                   marginTop: "4px",
//                                   borderColor: "#4caf50",
//                                 }}
//                               />
//                             ) : (
//                               row[column.field]
//                             )}
//                           </TableCell>
//                         )
//                     )}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleFilterClose}
//       >
//         <Box style={{ padding: "10px", width: "250px" }}>
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Typography>Filter</Typography>
//             <IconButton onClick={clearFilter} size="small">
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <FormControl
//             fullWidth
//             variant="outlined"
//             size="small"
//             style={{ marginTop: "10px" }}
//           >
//             <InputLabel>Column</InputLabel>
//             <Select
//               value={currentFilterField || ""}
//               onChange={(e) =>
//                 setCurrentFilterField(e.target.value as keyof Row)
//               }
//               label="Column"
//             >
//               {columns
//                 .filter((column) => column.field !== "actions")
//                 .map((column) => (
//                   <MenuItem key={column.field} value={column.field}>
//                     {column.label}
//                   </MenuItem>
//                 ))}
//             </Select>
//           </FormControl>
//           <FormControl
//             fullWidth
//             variant="outlined"
//             size="small"
//             style={{ marginTop: "10px" }}
//           >
//             <InputLabel>Operator</InputLabel>
//             <Select
//               value={currentFilterOperator}
//               onChange={(e) => setCurrentFilterOperator(e.target.value)}
//               label="Operator"
//             >
//               <MenuItem value="contains">Contains</MenuItem>
//               <MenuItem value="equals">Equals</MenuItem>
//               <MenuItem value="greaterThan">Greater Than</MenuItem>
//               <MenuItem value="lessThan">Less Than</MenuItem>
//             </Select>
//           </FormControl>
//           <TextField
//             fullWidth
//             variant="outlined"
//             size="small"
//             label="Value"
//             value={currentFilterValue}
//             onChange={(e) => setCurrentFilterValue(e.target.value)}
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={applyFilter}
//             style={{ marginTop: "10px" }}
//           >
//             Apply
//           </Button>
//         </Box>
//       </Menu>
//     </>
//   );
// }

import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  TextField,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

// Define types for rows and columns
interface Row {
  id: number;
  name: string;
  email: string;
  age: number;
  dateCreated: string;
  lastLogin: string;
  editable: boolean;
}

interface Column {
  field: keyof Row | "actions";
  label: string;
  isHide: boolean;
  align?: "left" | "right" | "center";
}

// Define columns
const columns: Column[] = [
  { field: "name", label: "Name", isHide: false },
  { field: "email", label: "Email", isHide: false },
  { field: "age", label: "Age", align: "right", isHide: false },
  { field: "dateCreated", label: "Date Created", isHide: false },
  { field: "lastLogin", label: "Last Login", isHide: false },
  { field: "actions", label: "Actions", isHide: false },
];

// Define initial rows
const initialRows: Row[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 25,
    dateCreated: "2023-08-01",
    lastLogin: "2023-08-07",
    editable: false,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    age: 30,
    dateCreated: "2023-07-15",
    lastLogin: "2023-08-06",
    editable: true,
  },
];

export default function TableSprinkler() {
  const [rows, setRows] = React.useState<Row[]>(initialRows);
  const [filters, setFilters] = React.useState<
    { field: keyof Row; operator: string; value: string }[]
  >([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMultiFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const applyMultiFilter = (newFilter: {
    field: keyof Row;
    operator: string;
    value: string;
  }) => {
    setFilters((prevFilters) => [...prevFilters, newFilter]);
  };

  const clearAllFilters = () => {
    setFilters([]);
    handleFilterClose();
  };

  const filteredRows = React.useMemo(() => {
    let filtered = rows;

    filters.forEach(({ field, operator, value }) => {
      if (value) {
        filtered = filtered.filter((row) => {
          const rowValue = row[field]?.toString().toLowerCase();
          const filterValue = value.toLowerCase();
          switch (operator) {
            case "equals":
              return rowValue === filterValue;
            case "contains":
              return rowValue?.includes(filterValue) ?? false;
            case "greaterThan":
              return parseFloat(rowValue || "") > parseFloat(filterValue);
            case "lessThan":
              return parseFloat(rowValue || "") < parseFloat(filterValue);
            default:
              return true;
          }
        });
      }
    });

    return filtered;
  }, [rows, filters]);

  return (
    <>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleMultiFilterClick}
        >
          Multi Filter
        </Button>
        <TableContainer
          component={Paper}
          style={{ maxHeight: 400, overflow: "auto" }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.field} align={column.align || "left"}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}
                      align={column.align || "left"}
                    >
                      {row[column.field as keyof Row]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Multi Filter Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleFilterClose}
      >
        <Box style={{ padding: "10px", width: "250px" }}>
          <Typography variant="h6">Multi Filter</Typography>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginTop: "10px" }}
          >
            <InputLabel>Column</InputLabel>
            <Select
              onChange={(e) =>
                applyMultiFilter({
                  field: e.target.value as keyof Row,
                  operator: "contains",
                  value: "value",
                })
              }
              label="Column"
            >
              {columns
                .filter((column) => column.field !== "actions")
                .map((column) => (
                  <MenuItem key={column.field} value={column.field}>
                    {column.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Apply
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={clearAllFilters}
            style={{ marginTop: "10px" }}
          >
            Clear All
          </Button>
        </Box>
      </Menu>
    </>
  );
}
