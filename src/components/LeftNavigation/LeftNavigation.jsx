import { Box } from "@mui/material";
import Dropdown from "@/components/DropDown/Dropdown";
import allProduct from "../../allProduct.json";
import NavLink from "@/components/Link/Link";
import productDetails from "../../productDetails.json";
import GroupAccordion from "@/components/GroupedAccordian/GroupAccordian";
import React, { useContext } from "react";
import { IdContext } from '../../IdContext'; // Import the IdContext

const LeftNavigation = () => {
  const { id, setContextId } = useContext(IdContext); // Use the IdContext
  const routes = {
    ProductDetails: 'ProductDetails',
    Workflows: 'Workflows',
    ActivityLog: 'ActivityLogs',
    BuildDeployement: 'BuildDeployments'
  };

  const accordions = [
    { title: "Accordion 1", content: "Content 1" },
    { title: "Accordion 2", content: "Content 2" },
    { title: "Accordion 3", content: "Content 3" },
  ];

  const handleId = (productId) => {
    setContextId(productId);
  };

  console.log(id);

  return (
    <Box sx={{ width: 1 / 4, display: 'flex', flexDirection: 'column', padding: 3, borderRight: '1px solid black' }} >
      <Dropdown handleId={handleId} dropdownValues={allProduct} />
      <Box sx={{ marginTop: 15, height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <NavLink name={'Product Details'} route={routes.ProductDetails} />
        <NavLink sx={{ marginTop: 2 }} name={'Work Flow(s)'} route={routes.Workflows} />
        <NavLink styles={{ marginTop: 2 }} name={'Activity Log'} route={routes.ActivityLog} />
        <GroupAccordion sx={{ marginTop: 2 }} title={"User Stories"} accordions={productDetails.userStories} />
        <NavLink sx={{ marginTop: 2 }} name={'Build & Deployments'} route={routes.BuildDeployement} />
      </Box>
    </Box>
  );
};

export default LeftNavigation;
