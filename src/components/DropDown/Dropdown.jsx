import React from "react";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";

const Dropdown = ({ dropdownValues, handleId }) => {
  const [productName, setProductname] = useState("Select product name");
  const handleChange = (event) => {
    const selectedProductName = event.target.value;

    setProductname(selectedProductName);
    // Find the selected product object based on the selectedProductName
    const selectedProduct = dropdownValues.find(
      (product) => product.name === selectedProductName
    );

    // Pass the id of the selected product to the parent component
    handleId(selectedProduct.id);
  };
  console.log(dropdownValues);
  return (
    <FormControl sx={{ width: 200 }} fullWidth>
      <InputLabel id="demo-simple-select-label">Select Product Name</InputLabel>
      <Select value={productName} label="Product Name" onChange={handleChange}>
        {dropdownValues.map((value, idx) => {
          return (
            <MenuItem key={idx} value={value.name}>
              {value.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
