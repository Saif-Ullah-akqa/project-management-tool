"use client";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { useState } from "react";
import functionRequirement from "../../../../Requirement/functionRequirements.json";
import accessibilityRequirement from "../../../../Requirement/accessibilityRequirements.json";
import securityRequirement from "../../../../Requirement/securityRequirements.json";
import { useParams } from "next/navigation";
import performanceRequirement from "../../../../Requirement/performanceRequirements.json";
import { tabStyle } from "@/components/shared/styles";

const Requirements = () => {
  const [value, setValue] = useState("0");
  const param = useParams();
  const userStoryId = param.userStoryId;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        margin: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">{`User Story ${userStoryId} | Requirement`}</Typography>
      <Box sx={{ marginTop: 3 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              TabProps={{
                sx: {
                  "&.Mui-selected": {
                    color: "black", // Set the desired color for the focused state
                  },
                },
              }}
              TabIndicatorProps={{
                style: { color: "black", backgroundColor: "black" },
              }}
              onChange={handleChange}
              value={value}
              aria-label="basic tabs example"
            >
              <Tab label="Functional" value="0" sx={tabStyle} />
              <Tab label="Performance" value="1" sx={tabStyle} />
              <Tab label="Security" value="2" sx={tabStyle} />
              <Tab label="Accessibility" value="3" sx={tabStyle} />
            </TabList>
          </Box>
          <TabPanel value="0" index="0">
            {functionRequirement.map((requirement, index) => (
              <Typography sx={{ marginTop: 2 }} key={index}>
                {requirement}
              </Typography>
            ))}
          </TabPanel>
          <TabPanel value="1" index="1">
            {performanceRequirement.map((requirement, index) => (
              <Typography sx={{ marginTop: 2 }} key={index}>
                {requirement}
              </Typography>
            ))}
          </TabPanel>
          <TabPanel value="2" index="2">
            {securityRequirement.map((requirement, index) => (
              <Typography sx={{ marginTop: 2 }} key={index}>
                {requirement}
              </Typography>
            ))}
          </TabPanel>
          <TabPanel value="3" index="3">
            {accessibilityRequirement.map((requirement, index) => (
              <Typography sx={{ marginTop: 2 }} key={index}>
                {requirement}
              </Typography>
            ))}
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Requirements;
