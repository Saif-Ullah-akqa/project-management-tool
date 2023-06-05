import { Box, ThemeProvider } from "@mui/material";
import Dropdown from "@/components/DropDown/Dropdown";
import allProduct from "../../allProduct.json";
import NavLink from "@/components/Link/Link";
import productDetails from "../../productDetails.json";
import GroupAccordion from "@/components/GroupedAccordian/GroupAccordian";
import React, { useContext } from "react";
import { IdContext } from "../../Context/IdContext";
import { leftNav } from "../shared/styles";

const LeftNavigation = () => {
  const { id, setContextId } = useContext(IdContext); // Use the IdContext
  const routes = {
    ProductDetails: "ProductDetails",
    Workflows: "Workflows",
    ActivityLog: "ActivityLogs",
    BuildDeployement: "BuildDeployments",
  };

  const handleId = (productId) => {
    setContextId(productId);
  };
  return (
    <Box
      sx={{
        width: 1 / 5,
        borderRight: "1px solid black",
        backgroundColor: "#dedede",
      }}
    >
      <ThemeProvider theme={leftNav}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 3,
            minHeight: "100vh",
          }}
        >
          <Dropdown handleId={handleId} dropdownValues={allProduct} />

          <NavLink
            name={"Product Details"}
            route={routes.ProductDetails}
            sx={{
              "&:hover": {
                border: "1px solid #00FF00",
                color: "gray",
                backgroundColor: "lightblue",
              },
              marginTop: "10px",
            }}
          />
          <NavLink
            sx={{ marginTop: "10px" }}
            name={"Work Flow(s)"}
            route={routes.Workflows}
          />
          <NavLink
            styles={{ marginTop: "10px" }}
            name={"Activity Log"}
            route={routes.ActivityLog}
          />
          <GroupAccordion
            sx={{ backgroundColor: "none" }}
            title={"User Stories"}
            accordions={productDetails.userStories}
          />
          <NavLink
            sx={{ marginTop: "10px", textTransform: "capatalize !important" }}
            name={"Build & Deployments"}
            route={routes.BuildDeployement}
          />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default LeftNavigation;
