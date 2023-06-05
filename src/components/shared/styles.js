import { createTheme } from "@mui/material";

export const tabStyle={
    textTransform: "capitalize",
    borderColor: "black",
    borderBottom: "0px",
    borderStyle: "solid",
    '&:focus': {
        color: 'black',
      }
}
export const headingFont = createTheme({
    typography: {
      fontFamily: ['Ultra', 'serif'
      ].join(','),
  },});
  
export  const bodyFont = createTheme({
    typography: {
      fontFamily: [
        'Slabo 27px', 'serif'
      ].join(','),
  },});
  export  const leftNav = createTheme({
    typography: {
      fontFamily: [
        'Roboto', 'sans-serif'
      ].join(','),
  },});