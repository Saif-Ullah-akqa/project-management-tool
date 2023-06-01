"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import productDetails from "../../productDetails.json";

const ProductDetailsPage = () => {
  return (
    <Box
      sx={{
        marginLeft: 5,
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">Product Details</Typography>
      <Box sx={{ marginLeft: 2, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex",padding:5 }}>
          <Typography>Name:</Typography>
          <Typography variant="body1" sx={{marginLeft:2}}>{productDetails.name}</Typography>
        </Box>
        <Box sx={{ display: "flex",padding:5 }}>
        <Typography>Description:</Typography>
          <Typography variant="body1" sx={{marginLeft:2}}>{productDetails.description}</Typography>
        </Box>
        <Box sx={{ display: "flex",padding:5 }}>
        <Typography>Git Repository:</Typography>
          <Typography variant="body1" sx={{marginLeft:2}}>{productDetails.gitRepository}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
