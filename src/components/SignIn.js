import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "react-router";
import { useState } from "react";
import { adminSignIn } from "../redux/DataSlice";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
const theme = createTheme();

export default function SignIn() {
  const [user, setUser] = useState({ username: "", password: "" });
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const loginSuccess = useSelector((state) => {
    return state.DataReducer;
  });
  const switchUser = location.pathname === "/admin" ? "Admin" : "Employee";

  console.log(location, loginSuccess);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (switchUser === "Admin") {
      dispatch(adminSignIn(user));
      if (loginSuccess.result === true) {
          navigate('/adminLogin')
      }
    }
    console.log("user", user);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        sx={{
          my: 8,
          height: "70vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Grid item xs={6} sm={8} md={5} component={Paper} elevation={6} square>
          {!loginSuccess.result && (
            <Alert
              variant="filled"
              severity="error"
              sx={{ marginTop: 6, mx: 3 }}
            >
              Invalid Credentials !!!
            </Alert>
          )}
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in as {switchUser}
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
                label="Username"
                name="userName"
                autoComplete="userName"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
