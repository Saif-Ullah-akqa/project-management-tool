"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import activityLog from "../../activityLog.json";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ActivityLogs = () => {
  return (
    <Box
      sx={{
        margin: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Activity Logs</Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead sx={{backgroundColor:'gray'}}>
            <TableRow>
              <TableCell>Timestamps</TableCell>
              <TableCell>Workflows</TableCell>
              <TableCell>Log</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activityLog.map((logEntry, index) => (
              <TableRow key={index} style ={ index % 2? { background : "lightgray" }:{ background : "white" }}>
                <TableCell>{logEntry.timestamp}</TableCell>
                <TableCell>{logEntry.workflowNode}</TableCell>
                <TableCell>{logEntry.log}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ActivityLogs;
