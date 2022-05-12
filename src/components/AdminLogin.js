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
  const fetchData = useSelector((state) => {
    return state.DataReducer;
  });
  let res=[];
  const sortDepartment = fetchData.employee.map((data) => {
    console.log(data);
    fetchData.department.map((dept) => {
      const newres = dept.deptId === data.department ? dept.deptName : null;
      res.push(newres)
      console.log("res", res);
    //   return {data,department:res}
    });
  });
console.log('sort',sortDepartment)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700, height: "80vh", my: 6 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Employee</StyledTableCell>
                <StyledTableCell align="center">Department</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fetchData.employee.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
}
