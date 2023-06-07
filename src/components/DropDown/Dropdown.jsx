import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

const TIMEOUT_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

const Dropdown = ({ dropdownValues, handleId }) => {
  const [productName, setProductname] = useState("");

  useEffect(() => {
    const storedProductName = localStorage.getItem("selectedProductName");
    const storedTimestamp = localStorage.getItem("selectedProductTimestamp");

    if (
      storedProductName &&
      storedTimestamp &&
      Date.now() - parseInt(storedTimestamp) < TIMEOUT_DURATION
    ) {
      setProductname(storedProductName);
    } else {
      clearLocalStorage();
    }
  }, []);

  const handleChange = (event) => {
    const selectedProductName = event.target.value;

    setProductname(selectedProductName);
    localStorage.setItem("selectedProductName", selectedProductName);
    localStorage.setItem(
      "selectedProductTimestamp",
      Date.now().toString()
    );

    const selectedProduct = dropdownValues.find(
      (product) => product.name === selectedProductName
    );
    handleId(selectedProduct.id);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("selectedProductName");
    localStorage.removeItem("selectedProductTimestamp");
    setProductname("");
  };

  return (
    <FormControl sx={{ width: 250 ,marginTop:3}} fullWidth>
      <InputLabel id="demo-simple-select-label">Select Product Name</InputLabel>
      <Select
        value={productName}
        label="Product Name"
        onChange={handleChange}
      >
        {dropdownValues.map((value, idx) => {
          return (
            <MenuItem key={idx} value={value.name} sx={{backgroundColor:'transparent'}}>
              {value.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
