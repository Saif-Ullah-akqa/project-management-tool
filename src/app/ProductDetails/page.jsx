"use client";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import productDetails from "../../productDetails.json";

const ProductDetailsPage = () => {
  return (
    <Box
      sx={{
        margin: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Product Details</Typography>
      <Box
        sx={{
          margin: 2,
          display: "grid",
          gridTemplateRows: "repeat(4)",
          gridTemplateColumns: "repeat(8, 1fr)",
          rowGap:'30px',
          columnGap:'20px'
        }}
      >
        <Typography sx={{ textAlign: "right", gridColumn: "span 1" }}>
          Name:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            gridColumnStart: "2",
          }}
        >
          {productDetails.name}
        </Typography>
        <Typography
          sx={{ textAlign: "right", gridRow: "2", gridColumn: "span 1" }}
        >
          Description:
        </Typography>
        <Typography variant="body1" sx={{ gridRow: "2",gridColumnEnd:"8", gridColumnStart: "2" }}>
          {productDetails.description}
        </Typography>

        <Typography  sx={{ textAlign: "right", gridRow: "3", gridColumn: "span 1" }}>Git Repo:</Typography>
        <Link underline="none" href={productDetails.gitRepository} variant="body1" sx={{gridRow: "3",gridColumnEnd:"8", gridColumnStart: "2" }}>
          {productDetails.gitRepository}
        </Link>
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
