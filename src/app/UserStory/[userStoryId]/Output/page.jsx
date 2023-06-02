"use client";
import {
  Box,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import React, { useState } from "react";
import outputDesign from "../../../../Output/outputDesign.json";
import outputDevelopment from "../../../../Output/outputDevelopment.json";
import Paper from "@mui/material/Paper";
import outputTesting from "../../../../Output/outputTesting.json";
import { useParams } from "next/navigation";
import { tabStyle } from "@/components/shared/styles";

const OutPut = () => {
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
      <Typography variant="h4">{`User Story ${userStoryId}| Output`}</Typography>
      <Box sx={{ width: "100%", marginTop: 3 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              value={value}
              aria-label="basic tabs example"
            >
              <Tab label="Design" value="0" sx={tabStyle} />
              <Tab label="Development" value="1" sx={tabStyle} />
              <Tab label="Testing" value="2" sx={tabStyle} />
            </TabList>
          </Box>
          <TabPanel value="0" index="0">
            {
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Typography>Description:</Typography>
                  <Typography sx={{ marginLeft: 2 }}>
                    {outputDesign.description}
                  </Typography>
                </Box>
                <Box sx={{ marginTop: 5 }}>
                  <Typography>Design Spec - Wireframe</Typography>
                  {outputDesign.wireframeSpecs.map((item, index) => {
                    return (
                      <Typography key={index} sx={{ marginTop: 2 }}>
                        {item}
                      </Typography>
                    );
                  })}
                </Box>
                <Box sx={{ marginTop: 5 }}>
                  <Typography>Design Spec - User Journeys</Typography>
                  {outputDesign.userJourneySpecs.map((item, index) => {
                    return (
                      <Typography key={index} sx={{ marginTop: 2 }}>
                        {item}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            }
          </TabPanel>
          <TabPanel value="1" index="1">
            {outputDevelopment.map((item, index) => {
              return (
                <Box key={index}>
                  <Box>
                    <Typography variant="h5" sx={{ marginTop: 3 }}>
                      {`Pull Request # ${index + 1}`}
                      <Typography>{item.pullRequestURL}</Typography>
                    </Typography>
                  </Box>

                  {item.gitCommits.map((commit, idx) => {
                    return (
                      <Box sx={{ marginTop: 5 }} key={idx}>
                        <Typography>{`Commit # ${idx + 1}`}</Typography>
                        {commit.files.map((commitDetail, id) => {
                          return (
                            <TableContainer
                              component={Paper}
                              sx={{ marginTop: 3 }}
                            >
                              <Table>
                                <TableHead
                                  sx={{ backgroundColor: "lightgray" }}
                                >
                                  <TableRow>
                                    <TableCell>{commitDetail.path}</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>
                                      {commitDetail.fileContent}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          );
                        })}
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </TabPanel>
          <TabPanel value="2" index="2">
            <Box>
              <Box>
                <Typography variant="h5">Test Cases</Typography>
                {outputTesting.testCases.map((testCases, index) => {
                  return (
                    <TableContainer component={Paper} sx={{ marginTop: 3 }}>
                      <Table>
                        <TableHead sx={{ backgroundColor: "lightgray" }}>
                          <TableRow>
                            <TableCell>
                              <Typography fontWeight={700}>{`Scenario ${
                                index + 1
                              }`}</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Typography>{testCases.scenario}</Typography>
                              {testCases.steps.map((steps, idx) => {
                                return (
                                  <Typography key={idx}>{steps}</Typography>
                                );
                              })}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  );
                })}
              </Box>

              {outputTesting.testReports.map((testReport, index) => {
                return (
                  <Box sx={{ marginTop: 5 }}>
                    <Typography>{`Test Report - Run #${index + 1}`}</Typography>
                    <Typography sx={{ marginLeft: 3, marginTop: 3 }}>
                      Status: {testReport.testStatus}
                    </Typography>
                    {testReport.defects.map((status, idx) => {
                      return (
                        <Box
                          sx={{
                            display: "grid",
                            gap: 1,
                            border: "2px",
                            borderColor: "black",
                            columnGap: "15px",
                            gridTemplateRows: "repeat(4)",
                            gridTemplateColumns: "repeat(12, 1fr)",
                            borderStyle: "solid",
                            padding: 3,
                            marginTop: 3,
                          }}
                          key={idx}
                        >
                          <Typography
                            sx={{
                              textAlign: "right",
                              gridColumnStart: "1",
                              gridColumnEnd: "3",
                            }}
                          >
                            Defect Id:
                          </Typography>
                          <Typography
                            sx={{ gridColumnStart: "3", gridColumnEnd: "6" }}
                          >
                            {status.id}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "right",
                              gridColumnStart: "7",
                              gridColumnEnd: "9",
                            }}
                          >
                            Title:
                          </Typography>
                          <Typography
                            sx={{ gridColumnStart: "9", gridColumnEnd: "12" }}
                          >
                            {status.title}
                          </Typography>

                          <Typography
                            sx={{
                              textAlign: "right",
                              gridColumnStart: "1",
                              gridColumnEnd: "3",
                              gridRow: "2",
                            }}
                          >
                            Defect Type:{" "}
                          </Typography>
                          <Typography
                            sx={{
                              gridColumnStart: "3",
                              gridColumnEnd: "6",
                              gridRow: "2",
                            }}
                          >
                            {status.type}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "right",
                              gridColumnStart: "7",
                              gridColumnEnd: "9",
                              gridRow: "2",
                            }}
                          >
                            Defect Severity:
                          </Typography>
                          <Typography
                            sx={{
                              gridColumnStart: "9",
                              gridColumnEnd: "12",
                              gridRow: "2",
                            }}
                          >
                            {status.severity}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "right",
                              gridColumnStart: "1",
                              gridColumnEnd: "3",
                              gridRow: "3",
                            }}
                          >
                            Expected Behaviour:
                          </Typography>
                          <Typography
                            sx={{
                              gridColumnStart: "3",
                              gridColumnEnd: "6",
                              gridRow: "3",
                            }}
                          >
                            {status.expectedBehaviour}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "right",
                              gridColumnStart: "7",
                              gridColumnEnd: "9",
                              gridRow: "3",
                            }}
                          >
                            Actual Behaviour:
                          </Typography>
                          <Typography
                            sx={{
                              gridColumnStart: "9",
                              gridColumnEnd: "12",
                              gridRow: "3",
                            }}
                          >
                            {status.actualBehaviour}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "right",
                              gridColumnStart: "1",
                              gridColumnEnd: "3",
                              gridRow: "4",
                            }}
                          >
                            Linked Test Case:
                          </Typography>
                          <Typography
                            sx={{
                              gridColumnStart: "3",
                              gridColumnEnd: "6",
                              gridRow: "4",
                            }}
                          >
                            {status.linkedTestCase}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "right",
                              gridColumnStart: "7",
                              gridColumnEnd: "9",
                              gridRow: "4",
                            }}
                          >
                            Deployment:{" "}
                          </Typography>

                          {
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gridColumnStart: "9",
                                gridColumnEnd: "12",
                                gridRow: "4",
                              }}
                            >
                              <Typography>
                                Deployment: {status.deployment.name}
                              </Typography>
                              <Typography>
                                Env: {status.deployment.environment}
                              </Typography>
                              <Typography>
                                Branch: {status.deployment.branch}
                              </Typography>
                              <Typography>
                                Commit Id: {status.deployment.name}
                              </Typography>
                            </Box>
                          }
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default OutPut;
