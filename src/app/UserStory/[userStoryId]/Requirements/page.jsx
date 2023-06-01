"use client";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { useState } from "react";
import functionRequirement from "../../../../Requirement/functionRequirements.json";
import accessibilityRequirement from "../../../../Requirement/accessibilityRequirements.json";
import securityRequirement from "../../../../Requirement/securityRequirements.json";
import performanceRequirement from "../../../../Requirement/performanceRequirements.json";

const Requirements = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">User Story | Output</Typography>
    <Box sx={{ width: "100%" , marginTop: 3 }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            value={value}
            aria-label="basic tabs example"
          >
            <Tab label="Functional" value="0"  sx={{
                  borderColor: "black",
                  border: "2px",
                  borderStyle: "solid",
                }}/>
            <Tab label="Performance" value="1"  sx={{
                  borderColor: "black",
                  border: "2px",
                  borderLeft:'none',
                  borderStyle: "solid",
                }}/>
            <Tab label="Security" value="2" sx={{
                  borderColor: "black",
                  border: "2px",
                  borderLeft:'none',
                  borderStyle: "solid",
                }} />
            <Tab label="Accessibility" value="3" sx={{
                  borderColor: "black",
                  border: "2px",
                  borderLeft:'none',
                  borderStyle: "solid",
                }}/>
          </TabList>
        </Box>
        <TabPanel value="0" index="0" sx={{ borderColor: "black", border: "2px", borderStyle: "solid" }}>
          {functionRequirement.map((requirement, index) => (
            <Typography sx={{marginTop:2}} key={index}>{requirement}</Typography>
          ))}
        </TabPanel>
        <TabPanel value="1" index="1" sx={{ borderColor: "black", border: "2px", borderStyle: "solid" }}>
          {performanceRequirement.map((requirement, index) => (
            <Typography sx={{marginTop:2}} key={index}>{requirement}</Typography>
          ))}
        </TabPanel>
        <TabPanel value="2" index="2" sx={{ borderColor: "black", border: "2px", borderStyle: "solid" }}>
          {securityRequirement.map((requirement, index) => (
            <Typography sx={{marginTop:2}} key={index}>{requirement}</Typography>
          ))}
        </TabPanel>
        <TabPanel value="3" index="3" sx={{ borderColor: "black", border: "2px", borderStyle: "solid" }}>
          {accessibilityRequirement.map((requirement, index) => (
            <Typography sx={{marginTop:2}} key={index}>{requirement}</Typography>
          ))}
        </TabPanel>
      </TabContext>
    </Box>
    </Box>
  );
};

export default Requirements;
