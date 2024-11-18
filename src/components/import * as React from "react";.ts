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
];

export default function TableSprinkler() {
  const [rows, setRows] = React.useState<Row[]>(initialRows);
  const [editingRow, setEditingRow] = React.useState<number | null>(null);
  const [editedRowData, setEditedRowData] = React.useState<Partial<Row>>({});
  const [sortedField, setSortedField] = React.useState<keyof Row | null>(null);
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
  const [isUnsavedRow, setIsUnsavedRow] = React.useState<boolean>(false);
  const [filters, setFilters] = React.useState<
    { field: keyof Row; operator: string; value: string }[]
  >([]);
  const [anchorE1, setAnchorE1] = React.useState<null | HTMLElement>(null);
  const [currentFliterField, setCurrentFilterField] = React.useState<
    keyof Row | null
  >(null);
  const [currentFliterOperator, setCurrentFilterOperator] =
    React.useState<string>("contains");
  const [currentFliterValue, setCurrentFilterValue] =
    React.useState<string>("");

  const handleFilterClick = (
    event: React.MouseEvent<HTMLElement>,
    field: keyof Row
  ) => {
    setAnchorE1(event.currentTarget);
    setCurrentFilterField(field);
  };

  const handleFilterClose = () => {
    setAnchorE1(null);
    setCurrentFilterField(null);
    setCurrentFilterOperator("contains");
    setCurrentFilterValue("");
  };

  const applyFilter = () => {
    if (currentFliterField) {
      setFilters((prevFilters) => {
        const newFilters = [...prevFilters];
        const filterIndex = newFilters.findIndex(
          (filter) => filter.field === currentFliterField
        );
        if (filterIndex >= 0) {
          newFilters[filterIndex] = {
            field: currentFliterField,
            operator: currentFliterOperator,
            value: currentFliterValue,
          };
        } else {
          newFilters.push({
            field: currentFliterField,
            operator: currentFliterOperator,
            value: currentFliterValue,
          });
        }
        return newFilters;
      });
    }
    handleFilterClose();
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

    // Apply filter
    filters.forEach(({ field, operator, value }) => {
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

    if (!sortedField) return filteredRows;
    return [...filteredRows].sort((a, b) => {
      let aValue = a[sortedField];
      let bValue = b[sortedField];

      if (aValue == null) aValue = "";
      if (bValue == null) bValue = "";

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      } else {
        const aStr = aValue.toString();
        const bStr = bValue.toString();
        if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
        if (aStr > bStr) return sortOrder === "desc" ? 1 : -1;
        return 0;
        //return aStr.localeCompare(bStr) * (sortOrder === "asc" ? 1 : -1);
      }
    });
  }, [rows, sortedField, sortOrder, filters]);

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

  return (
    <>
      <Box>
        <div style={{ width: "100%" }}>
          <Button variant="contained" color="primary" onClick={handleAddRow}>
            Add Row
          </Button>

          <TableContainer
            component={Paper}
            style={{ maxHeight: 400, overflow: "auto" }}
          >
            <Table stickyHeader aria-label="custom table">
              <TableHead>
                <TableRow>
                  {columns.map(
                    (column) =>
                      !column.isHide && (
                        <TableCell
                          key={column.field}
                          align={column.align || "left"}
                          style={{
                            position: "sticky",
                            top: 0,
                            zIndex: column.stickyLeft ? 4 : undefined,
                            left: column.stickyLeft ? 0 : undefined,
                            backgroundColor: "red", // header background color
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
                                  handleFilterClick(
                                    e,
                                    column.field as keyof Row
                                  )
                                }
                              >
                                <MoreVertIcon fontSize="small" />
                              </IconButton>
                            </>
                          )}
                        </TableCell>
                      )
                  )}
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
        anchorEl={anchorE1}
        open={Boolean(anchorE1)}
        onClose={handleFilterClose}
      >
        <Box style={{ padding: "10px", width: "250px" }}>
          <Typography>Filter</Typography>
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginTop: "10px" }}
          >
            <InputLabel>Column</InputLabel>
            <Select
              value={currentFliterField || ""}
              onChange={(e) =>
                setCurrentFilterField(e.target.value as keyof Row)
              }
              label="column"
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
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginTop: "10px" }}
          >
            <InputLabel>Operator</InputLabel>
            <Select
              value={currentFliterOperator}
              onChange={(e) => setCurrentFilterOperator(e.target.value)}
              label="Operator"
            >
              <MenuItem value="contains">Contains</MenuItem>
              <MenuItem value="equals">Equals</MenuItem>
              <MenuItem value="greaterThan">Greater Than</MenuItem>
              <MenuItem value="lessThan">Less Than</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            label="Value"
            value={currentFliterValue}
            onChange={(e) => setCurrentFilterValue(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={applyFilter}
          >
            Apply
          </Button>
        </Box>
      </Menu>
    </>
  );
}
