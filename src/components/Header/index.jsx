import { Paper, ThemeProvider, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { headingFont } from "../shared/styles";
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
      <HomeIcon sx={{ width: 40, height: 40 }} />
      <ThemeProvider theme={headingFont}>
      <Typography
        variant="h4"
        align="right"
        sx={{ marginLeft: '35px',fontWeight:500}}
      >
        Project Management
      </Typography>
      </ThemeProvider>
    </Paper>
  );
};

export default Header;
