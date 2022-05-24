import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { deleteEmployee } from "../redux/DataSlice";
import { Link } from "react-router-dom";
import Edit from "@mui/icons-material/Edit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function AdminLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchData = useSelector((state) => {
    return state.DataReducer;
  });
  const fetchLocalStorage =
    location.pathname === "/adminLogin"
      ? JSON.parse(localStorage.getItem("employee"))
        ? JSON.parse(localStorage.getItem("employee")).employee
        : fetchData.employee
      : JSON.parse(localStorage.getItem("employee")).result;

  const fetchInformation = JSON.parse(localStorage.getItem("employee"));
  const getDepartment = (deptId) => {
    const dept =
      fetchInformation &&
      fetchInformation.department.find((department) => {
        if (department.deptId === deptId) {
          return true;
        }
        return false;
      });
    return dept.deptName || null;
  };

  const getPosition = (positionId) => {
    const post =
      fetchInformation &&
      fetchInformation.position.find((position) => {
        if (position.posId === positionId) {
          return true;
        }
        return false;
      });
    return post.posName || null;
  };
  const addEmployee = () => {
    navigate("/signUp");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography sx={{ mx: 40, my: 5 }}>
          {location.pathname === "/adminLogin"
            ? "Admin Login"
            : "Employee Login"}
        </Typography>

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 100, height: "40vh", my: 3 }}
            aria-label="customized table"
          >
            <TableHead>
              {location.pathname === "/adminLogin" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "left",
                    marginLeft: "500px",
                  }}
                >
                  <Typography>Add Employee</Typography>
                  <AddIcon
                    sx={{ cursor: "pointer" }}
                    onClick={addEmployee}
                  ></AddIcon>
                </div>
              ) : (
                ""
              )}
              <TableRow>
                <StyledTableCell>Employee</StyledTableCell>
                <StyledTableCell align="left">Department</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>

            {fetchLocalStorage &&
              fetchLocalStorage.map((row) => (
                <TableBody>
                  <StyledTableRow key={row.employeeId}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                      <br />
                      <br /> {getPosition(row.position)}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {getDepartment(row.department)}
                    </StyledTableCell>
                    <StyledTableCell>
                      {location.pathname === "/adminLogin" ? (
                        <DeleteIcon
                          onClick={() =>
                            dispatch(deleteEmployee(row.employeeId))
                          }
                        ></DeleteIcon>
                      ) : (
                        <Link to={`edit/${row.employeeId}`}>
                          <EditIcon
                            style={{ color: "black", marginRight: "10px" }}
                          />
                        </Link>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              ))}
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}
