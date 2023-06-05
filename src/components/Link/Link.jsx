import React from "react";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";

const NavLink = ({ route, name, styles }) => {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Link
        fontFamily={"roboto"}
        underline="none"
        color={"black"}
        sx={{
          "&:hover": {
            borderBottom: "1px solid #000",
          },
          marginTop: "10px",
        }}
        href={`/${route}`}
      >
        {name}
      </Link>
    </Box>
  );
};

export default NavLink;
