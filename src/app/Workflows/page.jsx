"use client";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import mermaid from "mermaid";
import "../page.module.css";
import workflows from "../../workflows.json";

const Workflow = () => {
  useEffect(() => {
    mermaid.initialize({
      /* Configuration options */
    });
  }, []);

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
          <Box
            sx={{
              marginLeft: 2,
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
            }}
            key={idx}
          >
            <Box sx={{ display: "flex", padding: 2 }}>
              <Typography fontSize={"1rem"}>{workflow.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", padding: 2 }}>
              <Typography variant="body1">{workflow.workflowState}</Typography>
            </Box>
            <Box
              sx={{ p: "12px" }}
              className="mermaid"
              dangerouslySetInnerHTML={{ __html: workflow.nodeGraphMarkdown }}
            ></Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Workflow;
