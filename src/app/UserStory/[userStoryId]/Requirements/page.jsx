"use client";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { useState } from "react";
import functionRequirement from "../../../../functionRequirements.json";
import accessibilityRequirement from "../../../../accessibilityRequirements.json";
import securityRequirement from "../../../../securityRequirements.json";
import performanceRequirement from "../../../../performanceRequirements.json";

const Requirements = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            value={value}
            aria-label="basic tabs example"
          >
            <Tab label="Functional" value="0" />
            <Tab label="Performance" value="1" />
            <Tab label="Security" value="2" />
            <Tab label="Accessibility" value="3" />
          </TabList>
        </Box>
        <TabPanel value="0" index="0">
          {functionRequirement.map((requirement, index) => (
            <Typography key={index}>{requirement}</Typography>
          ))}
        </TabPanel>
        <TabPanel value="1" index="1">
          {performanceRequirement.map((requirement, index) => (
            <Typography key={index}>{requirement}</Typography>
          ))}
        </TabPanel>
        <TabPanel value="2" index="2">
          {securityRequirement.map((requirement, index) => (
            <Typography key={index}>{requirement}</Typography>
          ))}
        </TabPanel>
        <TabPanel value="3" index="3">
          {accessibilityRequirement.map((requirement, index) => (
            <Typography key={index}>{requirement}</Typography>
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Requirements;
