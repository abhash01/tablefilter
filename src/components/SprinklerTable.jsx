import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SprinklerTable() {
  const [showEditDelete, setShowEditDelete] = React.useState(true);

  const handleToggleClick = () => {
    setShowEditDelete((prevShowEditDelete) => !prevShowEditDelete);
  };

  return (
    <div style={{ width: "100%" }}>
      <TableContainer
        component={Paper}
        style={{ maxHeight: 400, overflow: "auto" }}
      >
        <Table stickyHeader aria-label="custom table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  position: "sticky",
                  left: 0,
                  top: 0,
                  backgroundColor: "#f5f5f5",
                  zIndex: 2,
                }}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  top: 0,
                  position: "sticky",
                  backgroundColor: "#f5f5f5",
                  zIndex: 1,
                }}
              >
                Email
              </TableCell>
              <TableCell
                align="right"
                style={{
                  top: 0,
                  position: "sticky",
                  backgroundColor: "#f5f5f5",
                  zIndex: 1,
                }}
              >
                Age
              </TableCell>
              <TableCell
                style={{
                  top: 0,
                  position: "sticky",
                  backgroundColor: "#f5f5f5",
                  zIndex: 1,
                }}
              >
                Date Created
              </TableCell>
              <TableCell
                style={{
                  top: 0,
                  position: "sticky",
                  backgroundColor: "#f5f5f5",
                  zIndex: 1,
                }}
              >
                Last Login
              </TableCell>
              <TableCell
                style={{
                  top: 0,
                  position: "sticky",
                  backgroundColor: "#f5f5f5",
                  zIndex: 1,
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    position: "sticky",
                    left: 0,
                    backgroundColor: "#fff",
                    zIndex: 1,
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell>{row.dateCreated}</TableCell>
                <TableCell>{row.lastLogin}</TableCell>
                <TableCell>
                  <Stack spacing={1} direction="column">
                    {showEditDelete && (
                      <React.Fragment>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<EditIcon />}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </React.Fragment>
                    )}
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<PrintIcon />}
                    >
                      Print
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

// Sample data for table rows
const rows = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 25,
    dateCreated: "2023-08-01",
    lastLogin: "2023-08-07 10:15:00",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 36,
    dateCreated: "2023-07-21",
    lastLogin: "2023-08-06 14:00:00",
  },
  {
    id: 3,
    name: "Cathy Brown",
    email: "cathy.brown@example.com",
    age: 19,
    dateCreated: "2023-07-15",
    lastLogin: "2023-08-05 12:45:00",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@example.com",
    age: 28,
    dateCreated: "2023-06-30",
    lastLogin: "2023-08-04 09:30:00",
  },
  {
    id: 5,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    age: 23,
    dateCreated: "2023-06-20",
    lastLogin: "2023-08-03 11:20:00",
  },
  {
    id: 6,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    age: 23,
    dateCreated: "2023-06-20",
    lastLogin: "2023-08-03 11:20:00",
  },
  {
    id: 7,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    age: 23,
    dateCreated: "2023-06-20",
    lastLogin: "2023-08-03 11:20:00",
  },
  {
    id: 8,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    age: 23,
    dateCreated: "2023-06-20",
    lastLogin: "2023-08-03 11:20:00",
  },
  {
    id: 9,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    age: 23,
    dateCreated: "2023-06-20",
    lastLogin: "2023-08-03 11:20:00",
  },
  // Add more rows as needed for testing scrolling functionality
];
