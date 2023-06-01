"use client";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { useState } from "react";
import tasksDesign from "../../../../tasksDesign.json";
import tasksDevelopment from "../../../../tasksDevelopments.json";
import tasksTesting from "../../../../tasksTestings.json";

const Tasks = () => {
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
            <Tab label="Design" value="0" />
            <Tab label="Development" value="1" />
            <Tab label="Testing" value="2" />
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
        
      </TabContext>
    </Box>
  );
};

export default Tasks;
