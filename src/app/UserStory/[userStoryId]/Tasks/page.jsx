"use client";
import { Box, Link, Tab, Typography } from "@mui/material";
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
import { useParams } from "next/navigation";
import { tabStyle } from "@/components/shared/styles";

const Tasks = () => {
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
      <Typography variant="h4">{`User Story ${userStoryId}| Tasks`}</Typography>
      <Box sx={{ width: "100%", marginTop: 3 }}>
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
              <Tab
                label="Design"
                value="0"
                sx={tabStyle}
              />
              <Tab
                label="Development"
                value="1"
                sx={tabStyle}
              />
              <Tab
                label="Testing"
                value="2"
                sx={tabStyle}
              />
            </TabList>
          </Box>
          <TabPanel
            value="0"
            index="0"
            
          >
            <TableContainer component={Paper} sx={{ marginTop: 2,backgroundColor:'transparent' }}>
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
                            <Link underline="none" key={idx} href={link.url}>
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
            
          >
            <TableContainer component={Paper} sx={{ marginTop: 2 ,backgroundColor:'transparent'}}>
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
                            <Link underline="none" key={idx} href={link.url}>
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
            
          >
            <TableContainer component={Paper} sx={{ marginTop: 2,backgroundColor:'transparent' }}>
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
                            <Link underline="none" key={idx} href={link.url}>
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
