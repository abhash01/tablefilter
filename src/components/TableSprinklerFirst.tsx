// // updated code down same as copilot
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

//Multi filter

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

// export default function TableSprinklerFirst() {
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
//   const [filterConditions, setFilterConditions] = React.useState<
//     { field: keyof Row; operator: string; value: string }[]
//   >([]);

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

//     // Apply multiple filters
//     filterConditions.forEach(({ field, operator, value }) => {
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

//     // Sort rows if necessary
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
//       }
//     });
//   }, [rows, sortedField, sortOrder, filterConditions]);

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

//   // Add filter state to manage multiple filters

//   // Add new filter condition
//   const addFilterCondition = () => {
//     setFilterConditions((prev) => [
//       ...prev,
//       { field: "name", operator: "contains", value: "" }, // Default new filter
//     ]);
//   };

//   // Update specific filter condition
//   const updateFilterCondition = (
//     index: number,
//     updatedFilter: Partial<{
//       field: keyof Row;
//       operator: string;
//       value: string;
//     }>
//   ) => {
//     setFilterConditions((prev) =>
//       prev.map((filter, i) =>
//         i === index ? { ...filter, ...updatedFilter } : filter
//       )
//     );
//   };

//   // Remove filter condition
//   const removeFilterCondition = (index: number) => {
//     setFilterConditions((prev) => prev.filter((_, i) => i !== index));
//   };

//   // Apply all filters
//   const applyFilters = () => {
//     setFilters(filterConditions);
//   };

//   // Clear all filters
//   const clearAllFilters = () => {
//     setFilterConditions([]);
//     setFilters([]);
//   };

//   return (
//     <>
//       <Box>
//         <div style={{ width: "100%" }}>
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>

//           <TableContainer component={Paper} style={{ overflow: "auto" }}>
//             <Table stickyHeader aria-label="custom table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => {
//                     if (column.isHide) return null;

//                     // Check if there is an active filter on this column

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
//         <Box style={{ padding: "10px", width: "300px" }}>
//           <Typography variant="h6">Filters</Typography>
//           {filterConditions.map((filter, index) => (
//             <Box key={index} style={{ marginBottom: "10px" }}>
//               <FormControl
//                 fullWidth
//                 size="small"
//                 style={{ marginBottom: "5px" }}
//               >
//                 <InputLabel>Column</InputLabel>
//                 <Select
//                   value={filter.field}
//                   onChange={(e) =>
//                     updateFilterCondition(index, {
//                       field: e.target.value as keyof Row,
//                     })
//                   }
//                 >
//                   {columns
//                     .filter((col) => col.field !== "actions")
//                     .map((col) => (
//                       <MenuItem key={col.field} value={col.field}>
//                         {col.label}
//                       </MenuItem>
//                     ))}
//                 </Select>
//               </FormControl>

//               <FormControl
//                 fullWidth
//                 size="small"
//                 style={{ marginBottom: "5px" }}
//               >
//                 <InputLabel>Operator</InputLabel>
//                 <Select
//                   value={filter.operator}
//                   onChange={(e) =>
//                     updateFilterCondition(index, { operator: e.target.value })
//                   }
//                 >
//                   <MenuItem value="contains">Contains</MenuItem>
//                   <MenuItem value="equals">Equals</MenuItem>
//                   <MenuItem value="greaterThan">Greater Than</MenuItem>
//                   <MenuItem value="lessThan">Less Than</MenuItem>
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 size="small"
//                 label="Value"
//                 value={filter.value}
//                 onChange={(e) =>
//                   updateFilterCondition(index, { value: e.target.value })
//                 }
//                 style={{ marginBottom: "5px" }}
//               />

//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 size="small"
//                 onClick={() => removeFilterCondition(index)}
//               >
//                 Remove
//               </Button>
//             </Box>
//           ))}

//           <Button
//             variant="contained"
//             color="primary"
//             size="small"
//             fullWidth
//             onClick={addFilterCondition}
//           >
//             + Add Filter
//           </Button>

//           <Button
//             variant="contained"
//             color="success"
//             size="small"
//             fullWidth
//             onClick={applyFilters}
//             style={{ marginTop: "10px" }}
//           >
//             Apply Filters
//           </Button>

//           <Button
//             variant="outlined"
//             size="small"
//             fullWidth
//             onClick={clearAllFilters}
//             style={{ marginTop: "5px" }}
//           >
//             Clear All Filters
//           </Button>
//         </Box>
//       </Menu>
//     </>
//   );
// }

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

// // interface FilterCondition {
// //   field: keyof Row; // Ensure 'Row' is your data type
// //   operator: string;
// //   value: string;
// //   logicOperator?: "AND" | "OR"; // Add this if you want logical operators
// // }

// type FilterCondition = {
//   field: keyof Row; // Assuming 'Row' is the correct data type for your rows
//   operator: string;
//   value: string;
//   logicOperator?: "AND" | "OR"; // Optional property for logical operators
// };

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

// export default function TableSprinklerFirst() {
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
//   // const [filterConditions, setFilterConditions] = React.useState<
//   //   { field: keyof Row; operator: string; value: string }[]
//   // >([]);
//   const [filterConditions, setFilterConditions] = React.useState<
//     FilterCondition[]
//   >([{ field: "name", operator: "contains", value: "", logicOperator: "AND" }]);

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

//     // Apply multiple filters
//     filterConditions.forEach(({ field, operator, value }) => {
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

//     // Sort rows if necessary
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
//       }
//     });
//   }, [rows, sortedField, sortOrder, filterConditions]);

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

//   // Add filter state to manage multiple filters

//   // Add new filter condition
//   const addFilterCondition = () => {
//     setFilterConditions((prev) => [
//       ...prev,
//       { field: "name", operator: "contains", value: "", operatorType: "AND" },
//     ]);
//   };

//   // Update specific filter condition
//   const updateFilterCondition = (
//     index: number,
//     updatedFilter: Partial<{
//       field: keyof Row;
//       operator: string;
//       value: string;
//     }>
//   ) => {
//     setFilterConditions((prev) =>
//       prev.map((filter, i) =>
//         i === index ? { ...filter, ...updatedFilter } : filter
//       )
//     );
//   };

//   // Remove filter condition
//   const removeFilterCondition = (index: number) => {
//     setFilterConditions((prev) => prev.filter((_, i) => i !== index));
//   };

//   // Apply all filters
//   const applyFilters = () => {
//     const filterQuery = filterConditions.reduce((query, filter, index) => {
//       const condition = `${filter.field} ${filter.operator} '${filter.value}'`;

//       if (index === 0) {
//         return condition; // First filter doesn't need AND/OR
//       }

//       return `${query} ${filter.operatorType} ${condition}`;
//     }, "");

//     console.log("Filter Query:", filterQuery);
//     handleFilterClose();
//   };

//   const addFilterRow = () => {
//     setFilterConditions((prev) => [
//       ...prev,
//       { field: "name", operator: "equals", value: "", logicOperator: "AND" },
//     ]);
//   };

//   const handleFilterOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);

//     // If no filters exist, add one default filter
//     if (filterConditions.length === 0) {
//       setFilterConditions([{ field: "name", operator: "contains", value: "" }]);
//     }
//   };

//   const updateFilter = (
//     index: number,
//     key: keyof FilterCondition, // Use keys from FilterCondition
//     value: string
//   ) => {
//     setFilterConditions((prev) => {
//       const updated = [...prev];
//       updated[index] = { ...updated[index], [key]: value }; // Ensure the key exists in FilterCondition
//       return updated;
//     });
//   };

//   const removeFilterRow = (index: number) => {
//     setFilterConditions((prev) => prev.filter((_, i) => i !== index));
//   };

//   const clearAllFilters = () => {
//     setFilterConditions([{ field: "name", operator: "contains", value: "" }]);
//     handleFilterClose();
//   };

//   return (
//     <>
//       <Box>
//         <div style={{ width: "100%" }}>
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>

//           <TableContainer component={Paper} style={{ overflow: "auto" }}>
//             <Table stickyHeader aria-label="custom table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => {
//                     if (column.isHide) return null;

//                     // Check if there is an active filter on this column

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
//         <Box style={{ padding: "10px", width: "100%" }}>
//           <Typography variant="h6" gutterBottom>
//             Filters
//           </Typography>

//           {filterConditions.map((filter, index) => (
//             <Box
//               key={index}
//               display="flex"
//               alignItems="center"
//               gap={1}
//               style={{ marginBottom: "10px" }}
//             >
//               {/* Logical Operator Dropdown (except for the first row) */}
//               {index > 0 && (
//                 <FormControl size="small" style={{ minWidth: "80px" }}>
//                   <Select
//                     value={filter.operatorType || "AND"}
//                     onChange={(e) =>
//                       updateFilter(index, "operatorType", e.target.value)
//                     }
//                   >
//                     <MenuItem value="AND">AND</MenuItem>
//                     <MenuItem value="OR">OR</MenuItem>
//                   </Select>
//                 </FormControl>
//               )}

//               {/* Column Selector */}
//               <FormControl size="small" style={{ minWidth: "120px" }}>
//                 <Select
//                   value={filter.field || ""}
//                   onChange={(e) => updateFilter(index, "field", e.target.value)}
//                 >
//                   {columns
//                     .filter((column) => column.field !== "actions")
//                     .map((column) => (
//                       <MenuItem key={column.field} value={column.field}>
//                         {column.label}
//                       </MenuItem>
//                     ))}
//                 </Select>
//               </FormControl>

//               {/* Operator Selector */}
//               <FormControl size="small" style={{ minWidth: "120px" }}>
//                 <Select
//                   value={filter.operator || "contains"}
//                   onChange={(e) =>
//                     updateFilter(index, "operator", e.target.value)
//                   }
//                 >
//                   <MenuItem value="contains">Contains</MenuItem>
//                   <MenuItem value="equals">Equals</MenuItem>
//                   <MenuItem value="greaterThan">Greater Than</MenuItem>
//                   <MenuItem value="lessThan">Less Than</MenuItem>
//                 </Select>
//               </FormControl>

//               {/* Value Input */}
//               <TextField
//                 size="small"
//                 variant="outlined"
//                 value={filter.value || ""}
//                 onChange={(e) => updateFilter(index, "value", e.target.value)}
//                 placeholder="Value"
//                 style={{ flexGrow: 1 }}
//               />

//               {/* Delete Filter Button */}
//               {index > 0 && (
//                 <IconButton
//                   size="small"
//                   onClick={() => removeFilterRow(index)}
//                   color="error"
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               )}
//             </Box>
//           ))}

//           {/* Add Filter Button */}
//           <Button
//             variant="outlined"
//             color="primary"
//             size="small"
//             onClick={addFilterRow}
//           >
//             + Add Filter
//           </Button>

//           {/* Action Buttons */}
//           <Box
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "10px",
//             }}
//           >
//             <Button
//               variant="outlined"
//               color="secondary"
//               size="small"
//               onClick={clearAllFilters}
//               style={{ marginRight: "10px" }}
//             >
//               Clear All Filters
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={applyFilters}
//             >
//               Apply Filters
//             </Button>
//           </Box>
//         </Box>
//       </Menu>
//     </>
//   );
// }

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

// interface FilterCondition {
//   field: string;
//   operator: string; // 'contains', 'greaterThan', etc.
//   value: string;
//   operatorType?: string; // 'AND' or 'OR', optional
//   logicOperator?: string; // Add this to include logicOperator
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

// export default function TableSprinklerFirst() {
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
//   const [filterConditions, setFilterConditions] = React.useState<
//     FilterCondition[]
//   >([{ field: "name", operator: "contains", value: "", logicOperator: "AND" }]);

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

//     // Apply multiple filters
//     filterConditions.forEach(({ field, operator, value }) => {
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

//     // Sort rows if necessary
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
//       }
//     });
//   }, [rows, sortedField, sortOrder, filterConditions]);

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

//   // Add new filter condition
//   const addFilterCondition = () => {
//     setFilterConditions((prev) => [
//       ...prev,
//       { field: "name", operator: "contains", value: "", operatorType: "AND" },
//     ]);
//   };

//   // Update specific filter condition
//   const updateFilterCondition = (
//     index: number,
//     updatedFilter: Partial<{
//       field: keyof Row;
//       operator: string;
//       value: string;
//     }>
//   ) => {
//     setFilterConditions((prev) =>
//       prev.map((filter, i) =>
//         i === index ? { ...filter, ...updatedFilter } : filter
//       )
//     );
//   };

//   // Apply all filters
//   const applyFilters = () => {
//     const filterQuery = filterConditions.reduce((query, filter, index) => {
//       const condition = `${filter.field} ${filter.operator} '${filter.value}'`;

//       if (index === 0) {
//         return condition; // First filter doesn't need AND/OR
//       }

//       // Ensure operatorType is valid (defaults to "AND" if undefined)
//       const operatorType = filter.operatorType || "AND";
//       return `${query} ${operatorType} ${condition}`;
//     }, "");

//     console.log("Filter Query:", filterQuery);
//     handleFilterClose();
//   };

//   const addFilterRow = () => {
//     setFilterConditions((prev) => [
//       ...prev,
//       { field: "name", operator: "equals", value: "", logicOperator: "AND" },
//     ]);
//   };

//   const handleFilterOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);

//     // If no filters exist, add one default filter
//     if (filterConditions.length === 0) {
//       setFilterConditions([{ field: "name", operator: "contains", value: "" }]);
//     }
//   };

//   const updateFilter = (
//     index: number,
//     key: keyof FilterCondition, // Use keys from FilterCondition
//     value: string
//   ) => {
//     setFilterConditions((prev) => {
//       const updated = [...prev];
//       updated[index] = { ...updated[index], [key]: value }; // Ensure the key exists in FilterCondition
//       return updated;
//     });
//   };

//   const removeFilterRow = (index: number) => {
//     setFilterConditions((prev) => prev.filter((_, i) => i !== index));
//   };

//   const clearAllFilters = () => {
//     setFilterConditions([{ field: "name", operator: "contains", value: "" }]);
//     handleFilterClose();
//   };

//   return (
//     <>
//       <Box>
//         <div style={{ width: "100%" }}>
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>

//           <TableContainer component={Paper} style={{ overflow: "auto" }}>
//             <Table stickyHeader aria-label="custom table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => {
//                     if (column.isHide) return null;

//                     // Check if there is an active filter on this column

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
//         <Box style={{ padding: "10px", width: "100%" }}>
//           <Typography variant="h6" gutterBottom>
//             Filters
//           </Typography>

//           {filterConditions.map((filter, index) => (
//             <Box
//               key={index}
//               display="flex"
//               alignItems="center"
//               gap={1}
//               style={{ marginBottom: "10px" }}
//             >
//               {/* Logical Operator Dropdown (except for the first row) */}
//               {index > 0 && (
//                 <FormControl size="small" style={{ minWidth: "80px" }}>
//                   <Select
//                     value={filter[index]?.operatorType || "AND"} // Using index if filter is an array
//                     onChange={(e) =>
//                       updateFilter(index, "operatorType", e.target.value)
//                     }
//                   >
//                     <MenuItem value="AND">AND</MenuItem>
//                     <MenuItem value="OR">OR</MenuItem>
//                   </Select>
//                 </FormControl>
//               )}

//               {/* Column Selector */}
//               <FormControl size="small" style={{ minWidth: "120px" }}>
//                 <Select
//                   value={filter.field || ""}
//                   onChange={(e) => updateFilter(index, "field", e.target.value)}
//                 >
//                   {columns
//                     .filter((column) => column.field !== "actions")
//                     .map((column) => (
//                       <MenuItem key={column.field} value={column.field}>
//                         {column.label}
//                       </MenuItem>
//                     ))}
//                 </Select>
//               </FormControl>

//               {/* Operator Selector */}
//               <FormControl size="small" style={{ minWidth: "120px" }}>
//                 <Select
//                   value={filter.operator || "contains"}
//                   onChange={(e) =>
//                     updateFilter(index, "operator", e.target.value)
//                   }
//                 >
//                   <MenuItem value="contains">Contains</MenuItem>
//                   <MenuItem value="equals">Equals</MenuItem>
//                   <MenuItem value="greaterThan">Greater Than</MenuItem>
//                   <MenuItem value="lessThan">Less Than</MenuItem>
//                 </Select>
//               </FormControl>

//               {/* Value Input */}
//               <TextField
//                 size="small"
//                 variant="outlined"
//                 value={filter.value || ""}
//                 onChange={(e) => updateFilter(index, "value", e.target.value)}
//                 placeholder="Value"
//                 style={{ flexGrow: 1 }}
//               />

//               {/* Delete Filter Button */}
//               {index > 0 && (
//                 <IconButton
//                   size="small"
//                   onClick={() => removeFilterRow(index)}
//                   color="error"
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               )}
//             </Box>
//           ))}

//           {/* Add Filter Button */}
//           <Button
//             variant="outlined"
//             color="primary"
//             size="small"
//             onClick={addFilterRow}
//           >
//             + Add Filter
//           </Button>

//           {/* Action Buttons */}
//           <Box
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "10px",
//             }}
//           >
//             <Button
//               variant="outlined"
//               color="secondary"
//               size="small"
//               onClick={clearAllFilters}
//               style={{ marginRight: "10px" }}
//             >
//               Clear All Filters
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={applyFilters}
//             >
//               Apply Filters
//             </Button>
//           </Box>
//         </Box>
//       </Menu>
//     </>
//   );
// }

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
//   width: number;
// }

// interface FilterCondition {
//   field: string;
//   operator: string; // 'contains', 'greaterThan', etc.
//   value: string;
//   operatorType?: string; // 'AND' or 'OR', optional
//   logicOperator?: string; // Add this to include logicOperator
// }

// // Define columns
// const columns: Column[] = [
//   { field: "name", label: "Name", stickyLeft: true, width: 200, isHide: false },
//   { field: "email", label: "Email", width: 200, isHide: false },
//   { field: "age", label: "Age", width: 200, align: "right", isHide: false },
//   { field: "dateCreated", label: "Date Created", width: 200, isHide: false },
//   { field: "lastLogin", label: "Last Login", width: 200, isHide: false },
//   { field: "actions", label: "Actions", width: 200, isHide: false },
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

// export default function TableSprinklerFirst() {
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
//   const [filterConditions, setFilterConditions] = React.useState<
//     FilterCondition[]
//   >([{ field: "name", operator: "contains", value: "", logicOperator: "AND" }]);
//   const [columnWidths, setColumnWidths] = React.useState(
//     columns.reduce((acc, col) => ({ ...acc, [col.field]: col.width }), {})
//   );
//   const [draggingColumn, setDraggingColumn] = React.useState<string | null>(
//     null
//   );
//   const [startX, setStartX] = React.useState(0);
//   const [startWidth, setStartWidth] = React.useState(0);

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

//     // Apply multiple filters
//     filterConditions.forEach(({ field, operator, value }) => {
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

//     // Sort rows if necessary
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
//       }
//     });
//   }, [rows, sortedField, sortOrder, filterConditions]);

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

//   // Apply all filters
//   const applyFilters = () => {
//     const filterQuery = filterConditions.reduce((query, filter, index) => {
//       const condition = `${filter.field} ${filter.operator} '${filter.value}'`;

//       if (index === 0) {
//         return condition; // First filter doesn't need AND/OR
//       }

//       // Ensure operatorType is valid (defaults to "AND" if undefined)
//       const operatorType = filter.operatorType || "AND";
//       return `${query} ${operatorType} ${condition}`;
//     }, "");

//     console.log("Filter Query:", filterQuery);
//     handleFilterClose();
//   };

//   const addFilterRow = () => {
//     setFilterConditions((prev) => [
//       ...prev,
//       { field: "name", operator: "equals", value: "", logicOperator: "AND" },
//     ]);
//   };

//   const updateFilter = (
//     index: number,
//     key: keyof FilterCondition, // Use keys from FilterCondition
//     value: string
//   ) => {
//     setFilterConditions((prev) => {
//       const updated = [...prev];
//       updated[index] = { ...updated[index], [key]: value }; // Ensure the key exists in FilterCondition
//       return updated;
//     });
//   };

//   const removeFilterRow = (index: number) => {
//     setFilterConditions((prev) => prev.filter((_, i) => i !== index));
//   };

//   const clearAllFilters = () => {
//     setFilterConditions([{ field: "name", operator: "contains", value: "" }]);
//     handleFilterClose();
//   };

//   const onMouseDown = (e: React.MouseEvent<HTMLElement>, field: string) => {
//     setDraggingColumn(field);
//     setStartX(e.clientX);
//     setStartWidth(columnWidths[field]);
//   };

//   const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
//     if (draggingColumn) {
//       const newWidth = Math.max(50, startWidth + e.clientX - startX); // Ensure min-width 50px
//       setColumnWidths((prevWidths) => ({
//         ...prevWidths,
//         [draggingColumn]: newWidth,
//       }));
//     }
//   };

//   const onMouseUp = () => {
//     setDraggingColumn(null);
//   };

//   React.useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) =>
//       onMouseMove(e as unknown as React.MouseEvent<HTMLElement>);
//     document.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <Box>
//         <div style={{ width: "100%" }}>
//           <Button variant="contained" color="primary" onClick={handleAddRow}>
//             Add Row
//           </Button>

//           <TableContainer component={Paper} style={{ overflow: "auto" }}>
//             <Table stickyHeader aria-label="custom table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column) => {
//                     if (column.isHide) return null;

//                     // Check if there is an active filter on this column

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
//                           width: columnWidths[column.field],
//                           position: "relative",
//                         }}
//                       >
//                         {column.label}
//                         <div
//                           style={{
//                             position: "absolute",
//                             right: 0,
//                             top: 0,
//                             bottom: 0,
//                             width: "5px",
//                             cursor: "col-resize",
//                           }}
//                           onMouseDown={(e) => onMouseDown(e, column.field)}
//                         />
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
//                             style={{ width: columnWidths[column.field] }}
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
//         <Box style={{ padding: "10px", width: "100%" }}>
//           <Typography variant="h6" gutterBottom>
//             Filters
//           </Typography>

//           {filterConditions.map((filter, index) => (
//             <Box
//               key={index}
//               display="flex"
//               alignItems="center"
//               gap={1}
//               style={{ marginBottom: "10px" }}
//             >
//               {/* Logical Operator Dropdown (except for the first row) */}
//               {index > 0 && (
//                 <FormControl size="small" style={{ minWidth: "80px" }}>
//                   <Select
//                     value={filter[index]?.operatorType || "AND"} // Using index if filter is an array
//                     onChange={(e) =>
//                       updateFilter(index, "operatorType", e.target.value)
//                     }
//                   >
//                     <MenuItem value="AND">AND</MenuItem>
//                     <MenuItem value="OR">OR</MenuItem>
//                   </Select>
//                 </FormControl>
//               )}

//               {/* Column Selector */}
//               <FormControl size="small" style={{ minWidth: "120px" }}>
//                 <Select
//                   value={filter.field || ""}
//                   onChange={(e) => updateFilter(index, "field", e.target.value)}
//                 >
//                   {columns
//                     .filter((column) => column.field !== "actions")
//                     .map((column) => (
//                       <MenuItem key={column.field} value={column.field}>
//                         {column.label}
//                       </MenuItem>
//                     ))}
//                 </Select>
//               </FormControl>

//               {/* Operator Selector */}
//               <FormControl size="small" style={{ minWidth: "120px" }}>
//                 <Select
//                   value={filter.operator || "contains"}
//                   onChange={(e) =>
//                     updateFilter(index, "operator", e.target.value)
//                   }
//                 >
//                   <MenuItem value="contains">Contains</MenuItem>
//                   <MenuItem value="equals">Equals</MenuItem>
//                   <MenuItem value="greaterThan">Greater Than</MenuItem>
//                   <MenuItem value="lessThan">Less Than</MenuItem>
//                 </Select>
//               </FormControl>

//               {/* Value Input */}
//               <TextField
//                 size="small"
//                 variant="outlined"
//                 value={filter.value || ""}
//                 onChange={(e) => updateFilter(index, "value", e.target.value)}
//                 placeholder="Value"
//                 style={{ flexGrow: 1 }}
//               />

//               {/* Delete Filter Button */}
//               {index > 0 && (
//                 <IconButton
//                   size="small"
//                   onClick={() => removeFilterRow(index)}
//                   color="error"
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               )}
//             </Box>
//           ))}

//           {/* Add Filter Button */}
//           <Button
//             variant="outlined"
//             color="primary"
//             size="small"
//             onClick={addFilterRow}
//           >
//             + Add Filter
//           </Button>

//           {/* Action Buttons */}
//           <Box
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               marginTop: "10px",
//             }}
//           >
//             <Button
//               variant="outlined"
//               color="secondary"
//               size="small"
//               onClick={clearAllFilters}
//               style={{ marginRight: "10px" }}
//             >
//               Clear All Filters
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={applyFilters}
//             >
//               Apply Filters
//             </Button>
//           </Box>
//         </Box>
//       </Menu>
//     </>
//   );
// }

// filter UI working

import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FilterListIcon from "@mui/icons-material/FilterList";
import Autocomplete from "@mui/material/Autocomplete"; // For better column selection
import Input from "@mui/material/Input"; // Bottom border only input component

import {
  Box,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

// Define types for rows and columns
interface Row {
  id: number;
  name: string;
  email: string;
  age: number;
  dateCreated: string;
  lastLogin: string;
  editable: boolean;
  isNew?: boolean;
  stickyLeft?: boolean;
}

interface Column {
  field: keyof Row | "actions";
  label: string;
  isHide: boolean;
  align?: "left" | "right" | "center";
  stickyLeft?: boolean;
}

interface FilterCondition {
  field: string;
  operator: string; // 'contains', 'greaterThan', etc.
  value: string;
  operatorType?: string; // 'AND' or 'OR', optional
  logicOperator?: string; // Add this to include logicOperator
}

// Define columns
const columns: Column[] = [
  { field: "name", label: "Name", stickyLeft: true, isHide: false },
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
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 25,
    dateCreated: "2023-08-01",
    lastLogin: "2023-08-07 10:15:00",
    editable: false,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 26,
    dateCreated: "2023-07-23",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 3,
    name: "Raj",
    email: "Raj@example.com",
    age: 36,
    dateCreated: "2023-07-21",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 4,
    name: "Rahul",
    email: "Rahul@example.com",
    age: 46,
    dateCreated: "2023-07-29",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 5,
    name: "Smith",
    email: "smith@example.com",
    age: 56,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 6,
    name: "Anurag",
    email: "Anurag@example.com",
    age: 66,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 7,
    name: "Akhil",
    email: "Akhil@example.com",
    age: 76,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 8,
    name: "Dilip",
    email: "Dilip@example.com",
    age: 86,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 9,
    name: "Mayank",
    email: "Mayank@example.com",
    age: 96,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 10,
    name: "Ajay",
    email: "Ajay@example.com",
    age: 106,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 11,
    name: "Mayank",
    email: "Mayank@example.com",
    age: 96,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 12,
    name: "Ajay",
    email: "Ajay@example.com",
    age: 106,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 13,
    name: "Mayank",
    email: "Mayank@example.com",
    age: 96,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 14,
    name: "Ajay",
    email: "Ajay@example.com",
    age: 106,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 15,
    name: "Mayank",
    email: "Mayank@example.com",
    age: 96,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 16,
    name: "Ajay",
    email: "Ajay@example.com",
    age: 106,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 17,
    name: "Mayank",
    email: "Mayank@example.com",
    age: 96,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
  {
    id: 18,
    name: "Ajay",
    email: "Ajay@example.com",
    age: 106,
    dateCreated: "2023-07-30",
    lastLogin: "2023-08-06 14:00:00",
    editable: true,
  },
];

export default function TableSprinklerFirst() {
  const [rows, setRows] = React.useState<Row[]>(initialRows);
  const [editingRow, setEditingRow] = React.useState<number | null>(null);
  const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
  const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
  const [isUnsavedRow, setIsUnsavedRow] = React.useState<boolean>(false);
  const [filters, setFilters] = React.useState<
    { field: keyof Row; operator: string; value: string }[]
  >([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentFilterField, setCurrentFilterField] = React.useState<
    keyof Row | null
  >(null);
  const [currentFilterOperator, setCurrentFilterOperator] =
    React.useState<string>("contains");
  const [currentFilterValue, setCurrentFilterValue] =
    React.useState<string>("");
  const [filterConditions, setFilterConditions] = React.useState<
    FilterCondition[]
  >([{ field: "name", operator: "contains", value: "", logicOperator: "AND" }]);

  const handleFilterClick = (
    event: React.MouseEvent<HTMLElement>,
    field: keyof Row
  ) => {
    const existingFilter = filters.find((filter) => filter.field === field);
    if (existingFilter) {
      setCurrentFilterOperator(existingFilter.operator);
      setCurrentFilterValue(existingFilter.value);
    } else {
      setCurrentFilterOperator("contains");
      setCurrentFilterValue("");
    }
    setAnchorEl(event.currentTarget);
    setCurrentFilterField(field);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
    setCurrentFilterField(null);
  };

  // Function to determine row background color
  const getRowBackgroundColor = (index: number) => {
    return index % 2 === 0 ? "#f9f9f9" : "#ffffff";
  };

  // Function to get sticky column styles
  const getStickyColumnStyle = (column: Column, index: number) => ({
    position: column.stickyLeft ? "sticky" : undefined,
    left: column.stickyLeft ? 0 : undefined,
    backgroundColor: column.stickyLeft
      ? getRowBackgroundColor(index) // Alternate background color for sticky column
      : "",
    zIndex: column.stickyLeft ? 2 : undefined,
  });
  const sortedRows = React.useMemo(() => {
    let filteredRows = rows;

    // Apply filters
    filterConditions.forEach(({ field, operator, value }) => {
      if (value) {
        filteredRows = filteredRows.filter((row) => {
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

    // Sort rows if sortedField is set
    if (sortedField) {
      return [...filteredRows].sort((a, b) => {
        let aValue = a[sortedField];
        let bValue = b[sortedField];

        if (aValue == null) aValue = ""; // Ensure null/undefined is treated as empty
        if (bValue == null) bValue = "";

        // Handle numeric sorting
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        }

        // Handle string sorting
        const aStr = aValue.toString().toLowerCase();
        const bStr = bValue.toString().toLowerCase();

        if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
        if (aStr > bStr) return sortOrder === "desc" ? 1 : -1;
        return 0;
      });
    }

    return filteredRows;
  }, [rows, sortedField, sortOrder, filterConditions]);

  const isRowComlete = (row: Partial<Row>) => {
    return row.name && row.email && row.age !== undefined;
  };

  const handleSort = (field: keyof Row) => {
    if (sortedField === field) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortedField(field);
      setSortOrder("asc");
    }
  };

  const handleAddRow = () => {
    const newRow: Row = {
      id: rows.length + 1,
      name: "",
      email: "",
      age: 0,
      dateCreated: new Date().toISOString().split("T")[0],
      lastLogin: new Date().toISOString(),
      editable: true,
      isNew: true,
    };
    setRows((prevRows) => [newRow, ...prevRows]);
    setEditingRow(newRow.id);
    setEditedRowData(newRow);
    setIsUnsavedRow(true);
  };

  const handleEditRow = (row: Row) => {
    if (!row.editable) return;
    setEditingRow(row.id);
    setEditedRowData(row);
    setIsUnsavedRow(true);
  };

  const handleSaveEdit = (rowId: number) => {
    if (!isRowComlete(editedRowData)) {
      alert("data");
      return;
    }
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, ...editedRowData, isNew: false } : row
      )
    );
    setEditingRow(null);
  };

  const handleDeleteRow = (id: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    if (id === editingRow) setEditingRow(null);
  };

  const handleCancelEdit = () => {
    setRows((prevRows) => prevRows.filter((row) => !row.isNew));
    setEditingRow(null);
    setEditedRowData({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Row
  ) => {
    setEditedRowData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  // Apply all filters
  const applyFilters = () => {
    const filterQuery = filterConditions.reduce((query, filter, index) => {
      const condition = `${filter.field} ${filter.operator} '${filter.value}'`;

      if (index === 0) {
        return condition; // First filter doesn't need AND/OR
      }

      // Ensure operatorType is valid (defaults to "AND" if undefined)
      const operatorType = filter.operatorType || "AND";
      return `${query} ${operatorType} ${condition}`;
    }, "");

    console.log("Filter Query:", filterQuery);
    handleFilterClose();
  };

  const addFilterRow = () => {
    setFilterConditions((prev) => [
      ...prev,
      { field: "name", operator: "equals", value: "", logicOperator: "AND" },
    ]);
  };

  const updateFilter = (
    index: number,
    key: keyof FilterCondition, // Use keys from FilterCondition
    value: string
  ) => {
    setFilterConditions((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [key]: value }; // Ensure the key exists in FilterCondition
      return updated;
    });
  };

  const removeFilterRow = (index: number) => {
    setFilterConditions((prev) => prev.filter((_, i) => i !== index));
  };

  const clearAllFilters = () => {
    setFilterConditions([{ field: "name", operator: "contains", value: "" }]);
    handleFilterClose();
  };

  return (
    <>
      <Box>
        <div style={{ width: "100%" }}>
          <Button variant="contained" color="primary" onClick={handleAddRow}>
            Add Row
          </Button>

          <TableContainer
            component={Paper}
            style={{ overflow: "auto", maxHeight: "100vh" }}
          >
            <Table stickyHeader aria-label="custom table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => {
                    if (column.isHide) return null;

                    // Check if there is an active filter on this column

                    return (
                      <TableCell
                        key={column.field}
                        align={column.align || "left"}
                        style={{
                          position: "sticky",
                          top: 0,
                          zIndex: column.stickyLeft ? 4 : undefined,
                          left: column.stickyLeft ? 0 : undefined,
                          backgroundColor: "#fff", // header background color
                        }}
                      >
                        {column.label}

                        {column.field !== "actions" && (
                          <>
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleSort(column.field as keyof Row)
                              }
                            >
                              {sortedField === column.field &&
                              sortOrder === "asc" ? (
                                <ArrowUpwardIcon fontSize="small" />
                              ) : (
                                <ArrowDownwardIcon fontSize="small" />
                              )}
                            </IconButton>

                            <IconButton
                              size="small"
                              onClick={(e) =>
                                handleFilterClick(e, column.field as keyof Row)
                              }
                            >
                              <MoreVertIcon fontSize="small" />
                            </IconButton>

                            {/* Display Filter Icon if column has active filter */}

                            <>
                              {filters.some(
                                (filter) => filter.field === column.field
                              ) && (
                                <IconButton
                                  size="small"
                                  onClick={(e) =>
                                    handleFilterClick(
                                      e,
                                      column.field as keyof Row
                                    )
                                  }
                                >
                                  <FilterListIcon color="primary" />
                                </IconButton>
                              )}
                            </>
                          </>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>

              <TableBody>
                {sortedRows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ backgroundColor: getRowBackgroundColor(index) }}
                  >
                    {columns.map(
                      (column) =>
                        !column.isHide && (
                          <TableCell
                            key={column.field}
                            align={column.align || "left"}
                            style={getStickyColumnStyle(column, index)}
                          >
                            {column.field === "actions" ? (
                              <Stack direction="row" spacing={1}>
                                {row.id === editingRow || row.isNew ? (
                                  <>
                                    <Button
                                      size="small"
                                      variant="contained"
                                      color="primary"
                                      onClick={() => handleSaveEdit(row.id)}
                                    >
                                      Save
                                    </Button>
                                    <Button
                                      size="small"
                                      variant="outlined"
                                      onClick={handleCancelEdit}
                                    >
                                      Cancel
                                    </Button>
                                  </>
                                ) : (
                                  <>
                                    <IconButton
                                      size="small"
                                      onClick={() => handleEditRow(row)}
                                      disabled={!row.editable}
                                    >
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton
                                      size="small"
                                      onClick={() => handleDeleteRow(row.id)}
                                      disabled={!row.editable}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </>
                                )}
                              </Stack>
                            ) : row.id === editingRow ? (
                              <TextField
                                value={
                                  editedRowData[column.field] ||
                                  row[column.field]
                                }
                                onChange={(e) =>
                                  handleChange(e, column.field as keyof Row)
                                }
                                fullWidth
                                variant="outlined"
                                size="small"
                                style={{
                                  borderRadius: "8px",
                                  backgroundColor: "#f3f4f6",
                                  marginTop: "4px",
                                  borderColor: "#4caf50",
                                }}
                              />
                            ) : (
                              row[column.field]
                            )}
                          </TableCell>
                        )
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleFilterClose}
      >
        <Box
          style={{
            padding: "20px",
            width: "100%",
            maxWidth: "600px",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>

          {filterConditions.map((filter, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={2}
              style={{
                marginBottom: "15px",
                flexWrap: "nowrap",
                paddingBottom: "10px", // Ensure some space between rows
                boxSizing: "border-box",
              }}
            >
              {/* Cross Button for Deleting Filter */}
              {index > 0 ? (
                <IconButton
                  size="small"
                  onClick={() => removeFilterRow(index)} // Remove filter for rows after the first
                  color="error"
                >
                  <CloseIcon />
                </IconButton>
              ) : (
                // For the first row, clear all filters and close the menu
                <IconButton
                  size="small"
                  onClick={() => {
                    clearAllFilters(); // Clear all filters
                    handleFilterClose(); // Close the filter menu
                  }}
                  color="error"
                >
                  <CloseIcon />
                </IconButton>
              )}

              {/* Logical Operator Dropdown (Only show after the first row) */}
              <FormControl
                size="small"
                style={{
                  minWidth: "80px",
                  marginTop: "15px", // Space for alignment when Add Filter is clicked
                  visibility: index === 0 ? "hidden" : "visible", // Hide for the first filter row
                }}
              >
                <Select
                  value={filter.operatorType || "AND"}
                  onChange={(e) =>
                    updateFilter(index, "operatorType", e.target.value)
                  }
                  input={<Input />}
                  style={{
                    width: "80px", // Ensure consistent width with other controls
                  }}
                >
                  <MenuItem value="AND">AND</MenuItem>
                  <MenuItem value="OR">OR</MenuItem>
                </Select>
              </FormControl>

              {/* Column Selector */}
              <FormControl
                variant="standard"
                size="small"
                sx={{ minWidth: 120 }}
              >
                <InputLabel>Column</InputLabel>
                <Select
                  value={filter.field || ""}
                  onChange={(e) => updateFilter(index, "field", e.target.value)}
                  renderValue={(selected) =>
                    selected ? selected : "Select Column"
                  }
                  inputProps={{ disableUnderline: false }} // Ensure underline is visible
                >
                  {columns
                    .filter((column) => column.field !== "actions")
                    .map((column) => (
                      <MenuItem key={column.field} value={column.field}>
                        {column.field}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              {/* Operator Selector */}
              <FormControl size="small" style={{ minWidth: "120px" }}>
                <InputLabel>Operator</InputLabel>
                <Select
                  value={filter.operator || "contains"}
                  onChange={(e) =>
                    updateFilter(index, "operator", e.target.value)
                  }
                  input={<Input />}
                >
                  <MenuItem value="contains">Contains</MenuItem>
                  <MenuItem value="equals">Equals</MenuItem>
                  <MenuItem value="greaterThan">Greater Than</MenuItem>
                  <MenuItem value="lessThan">Less Than</MenuItem>
                </Select>
              </FormControl>

              {/* Value Input */}
              <FormControl
                size="small"
                style={{ flexGrow: 1, minWidth: "150px" }}
              >
                <TextField
                  label="Value"
                  size="small"
                  variant="standard" // This ensures only bottom border
                  value={filter.value || ""}
                  onChange={(e) => updateFilter(index, "value", e.target.value)}
                  placeholder="Value"
                  style={{ width: "100%" }}
                  InputLabelProps={{
                    shrink: true, // Ensures the label remains fixed above the input
                  }}
                />
              </FormControl>
            </Box>
          ))}

          {/* Button Row */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            style={{
              marginTop: "15px",
              flexWrap: "nowrap", // Ensure they stay in one row
            }}
          >
            {/* Add Filter Button */}
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={addFilterRow}
            >
              + Add Filter
            </Button>

            {/* Clear All Filters and Apply Filters Buttons */}
            <Box display="flex" gap={1}>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={applyFilters}
              >
                Apply Filters
              </Button>
            </Box>
          </Box>
        </Box>
      </Menu>
    </>
  );
}
