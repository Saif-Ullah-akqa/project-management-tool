"use client";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import tasksDesign from "../../../../Tasks/tasksDesign.json";
import tasksDevelopment from "../../../../Tasks/tasksDevelopment.json";
import tasksTesting from "../../../../Tasks/tasksTesting.json";
import Link from "next/link";

const Tasks = () => {
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
      <Box sx={{ width: "100%", marginTop: 3 }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              value={value}
              aria-label="basic tabs example"
            >
              <Tab
                label="Design"
                value="0"
                sx={{
                  borderColor: "black",
                  border: "2px",
                  borderStyle: "solid",
                }}
              />
              <Tab
                label="Development"
                value="1"
                sx={{
                  borderColor: "black",
                  border: "2px",
                  borderStyle: "solid",
                  borderLeft: "none",
                }}
              />
              <Tab
                label="Testing"
                value="2"
                sx={{
                  borderColor: "black",
                  border: "2px",
                  borderStyle: "solid",
                  borderLeft: "none",
                }}
              />
            </TabList>
          </Box>
          <TabPanel
            value="0"
            index="0"
            sx={{ borderColor: "black", border: "2px", borderStyle: "solid" }}
          >
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Outputs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasksDesign.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        {task.outputLinks.map((link, idx) => {
                          return (
                            <Link key={idx} href={link.url}>
                              {link.name}
                            </Link>
                          );
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel
            value="1"
            index="1"
            sx={{ borderColor: "black", border: "2px", borderStyle: "solid" }}
          >
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Outputs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasksDevelopment.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        {task.outputLinks.map((link, idx) => {
                          return (
                            <Link key={idx} href={link.url}>
                              {link.name}
                            </Link>
                          );
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel
            value="2"
            index="2"
            sx={{ borderColor: "black", border: "2px", borderStyle: "solid" }}
          >
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Outputs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tasksTesting.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        {task.outputLinks.map((link, idx) => {
                          return (
                            <Link key={idx} href={link.url}>
                              {link.name}
                            </Link>
                          );
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Tasks;
