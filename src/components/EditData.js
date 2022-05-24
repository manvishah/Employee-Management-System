import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { editEmployee } from "../redux/DataSlice";
import { useNavigate } from "react-router-dom";
const EditData = ({ data }) => {
  console.log(data);
  const [editData, setEditData] = useState({
    employeeId: data.employeeId,
    name: data.name,
    password: data.password,
    department: data.department,
    position: data.position,
    zone: data.zone,
  });
  const [positionData, setPositionData] = useState([]);
  const [enable, setEnable] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const fetchData = useSelector((state) => {
    return state.DataReducer;
  });
  console.log(fetchData);
  const navigate=useNavigate();


  const handleChangeData = (e) => {
    if (e.target.name === "department") {
      setEnable(false);

      const data = fetchData.position.filter((pos) => {
        if (pos.deptId === e.target.value) {
          return pos.posName;
        }
      });
      setPositionData(data);
    }
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const departmentData = fetchData.department;
  const zoneData = fetchData.zone;
  const fetchPositionData = fetchData.position;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editData);
    dispatch(editEmployee(editData));
    navigate('/employee')

  };

  return (
    <div>
      <Typography component="h1" variant="h5">
        Edit Employee
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="name"
          name="name"
          autoComplete="name"
          autoFocus
          value={editData.name}
          onChange={handleChangeData}
          disabled
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={editData.password}
          onChange={handleChangeData}
        />
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={editData.department}
            label="Department"
            name="department"
            onChange={handleChangeData}
          >
            {departmentData.map((data) => (
              <MenuItem value={data.deptId}>{data.deptName}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel id="demo-simple-select-label">Position</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={editData.position}
            label="Position"
            name="position"
            onChange={handleChangeData}
            disabled={enable}
          >
            {positionData.length > 0
              ? positionData.map((pos) => (
                  <MenuItem value={pos.posId}>{pos.posName}</MenuItem>
                ))
              : fetchPositionData.map((pos) => (
                  <MenuItem value={pos.posId}>{pos.posName}</MenuItem>
                ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel id="demo-simple-select-label">Zone</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={editData.zone}
            label="zone"
            name="zone"
            onChange={handleChangeData}
          >
            {zoneData.map((zone) => (
              <MenuItem value={zone.zoneId}>{zone.zoneName}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default EditData;
