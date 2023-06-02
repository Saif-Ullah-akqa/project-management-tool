import { Paper, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

const Header = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems:'center',
        backgroundColor:'#ededed',
        padding:'15px'
      }}
    >
      <HomeIcon sx={{ width: 30, height: 30 }} />
      <Typography
        variant="h6"
        align="right"
        sx={{ marginLeft: '35px'}}
      >
        Project Management
      </Typography>
    </Paper>
  );
};

export default Header;
