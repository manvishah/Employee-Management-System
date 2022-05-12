import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Grid from "@mui/material/Grid";
const Confirm = () => {
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          my: 30,
          mx: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" component={Link} to="/admin">
          Log In As Admin
        </Button>

        <Button
          variant="contained"
          sx={{ my: "5px" }}
          component={Link}
          to="/employee"
        >
          Log In As Employee
        </Button>
      </Stack>
    </div>
  );
};

export default Confirm;
