import React from "react";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";

const NavLink = ({ route, name, styles }) => {
  return (
    <Box>
      <Link
        underline="none"
        variant="button"
        color={"black"}
        sx={styles}
        href={`/${route}`}
      >
        {name}
      </Link>
    </Box>
  );
};

export default NavLink;
