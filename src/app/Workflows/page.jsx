"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import workflows from "../../workflows.json";

const Workflow = () => {
  return (
    <Box
      sx={{
        marginLeft: 5,
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Workflow(s)</Typography>

      {workflows.map((workflow, idx) => {
        return (
          <Box sx={{ marginLeft: 2, marginTop:'3rem',display: "flex", flexDirection: "column" }} key={idx}>
            <Box sx={{ display: "flex", padding: 2 }}>
              <Typography variant="body1">{workflow.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", padding: 2 }}>
              <Typography variant="body1">{workflow.workflowState}</Typography>
            </Box>
            <Box sx={{ display: "flex", padding: 2 }}>
              <Typography variant="body1">
                {workflow.nodeGraphMarkdown}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Workflow;
