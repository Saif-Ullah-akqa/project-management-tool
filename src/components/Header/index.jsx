import { Paper, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

const Header = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        padding: 5,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "lightgray",
      }}
    >
      <HomeIcon sx={{ width: 50, height: 50 }} />
      <Typography
        variant="h1"
        align="right"
        sx={{ marginLeft: 5, fontSize: "50px", fontFamily: "monospace" }}
      >
        Project Management
      </Typography>
    </Paper>
  );
};

export default Header;
