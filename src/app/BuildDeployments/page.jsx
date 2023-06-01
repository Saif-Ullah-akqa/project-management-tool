"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import buildDeployment from '../../buildDeployment.json'
const BuildDeployment = () => {
  return (
    <Box
      sx={{
        marginLeft: 5,
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">{'Build & Deployments'}</Typography>
      <Box sx={{ marginLeft: 2, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex",padding:2 }}>
          <Typography>Name:</Typography>
          <Typography variant="body1" sx={{marginLeft:2}}>{buildDeployment.name}</Typography>
        </Box>
        <Box sx={{ display: "flex",padding:2 }}>
        <Typography>Environment:</Typography>
          <Typography variant="body1" sx={{marginLeft:2}}>{buildDeployment.environment}</Typography>
        </Box>
        <Box sx={{ display: "flex",padding:2 }}>
        <Typography>Branch:</Typography>
          <Typography variant="body1" sx={{marginLeft:2}}>{buildDeployment.branch}</Typography>
        </Box>
        <Box sx={{ display: "flex",padding:2 }}>
        <Typography>Release Version:</Typography>
          <Typography variant="body1" sx={{marginLeft:2}}>{buildDeployment.releaseVersion}</Typography>
        </Box>
        <Box sx={{ display: "flex",padding:2 }}>
        <Typography>Deployment URL:</Typography>
          <Typography variant="body1" sx={{marginLeft:2}}>{buildDeployment.deploymentURL}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default BuildDeployment