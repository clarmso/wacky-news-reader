import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Page from "./Page";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const DarkMode: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Page />
    </ThemeProvider>
  );
};

export default DarkMode;
