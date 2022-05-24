import * as React from "react";
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
import { addEmployee } from "../redux/DataSlice";
import {  useParams } from "react-router";
import EditData from "./EditData";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const [positionData, setPositionData] = React.useState([]);
  const [enable, setEnable] = React.useState(true);
  const [signUp, setSignUp] = React.useState({
    username: "",
    password: "",
    department: "",
    position: "",
    zone: "",
  });

  const params = useParams();
  const dispatch = useDispatch();
  const fetchData = useSelector((state) => {
    return state.DataReducer;
  });

  const editData = useSelector((state) => {
    console.log(state)
    const filteredData = state.DataReducer.employee.filter((emp) => {
      return emp.employeeId == params.id;
    });
    console.log('filter',filteredData)
    var object = filteredData.reduce(
      (obj, item) => (
        (obj["employeeId"] = item.employeeId),
        (obj["name"] = item.name),
        (obj["password"] = item.password),
        (obj["department"] = item.department),
        (obj["position"] = item.position),
        (obj["zone"] = item.zone),
        obj
      ),
      {}
    );
    return object;
  });
console.log('editData',editData.length)
  const departmentData = fetchData.department;
  const zoneData = fetchData.zone;
  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEmployee(signUp));
    navigate('/adminLogin')
  };

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
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: "70vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Grid item xs={6} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {editData.length !== undefined ? (
              <EditData data={editData} />
            ) : (
              <>
                <Typography component="h1" variant="h5">
                  Add Employee
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="userName"
                    label="userName"
                    name="username"
                    autoComplete="userName"
                    autoFocus
                    value={signUp.username}
                    onChange={handleChangeData}
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
                    value={signUp.password}
                    onChange={handleChangeData}
                  />
                  <FormControl fullWidth sx={{ my: 2 }}>
                    <InputLabel id="demo-simple-select-label">
                      Department
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={signUp.department}
                      label="Department"
                      name="department"
                      onChange={handleChangeData}
                    >
                      {departmentData.map((data) => (
                        <MenuItem value={data.deptId}>{data.deptName}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ my: 2 }} disabled={enable}>
                    <InputLabel id="demo-simple-select-label">
                      Position
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={signUp.position}
                      label="Position"
                      name="position"
                      onChange={handleChangeData}
                    >
                      {positionData.map((pos) => (
                        <MenuItem value={pos.posId}>{pos.posName}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ my: 2 }}>
                    <InputLabel id="demo-simple-select-label">Zone</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={signUp.zone}
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
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
