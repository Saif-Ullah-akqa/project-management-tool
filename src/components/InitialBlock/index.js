import { Box, Typography } from '@mui/material'
import React from 'react'

const MainScreen = () => {
  return (
    <Box
    sx={{
      margin: 5,
      display: "flex",
      flexDirection: "column",
    }}
  >    <Typography variant='h2'>Welcome!</Typography>
  </Box>
  )
}

export default MainScreen