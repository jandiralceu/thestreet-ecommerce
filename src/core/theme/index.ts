import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#452b4f",
    },
    secondary: {
        main: "#fe805d",
    }
  },
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
    caption: {
      color: "#424242",
    },
  },
});

export default theme;
