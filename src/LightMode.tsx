import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Page from "./Page";

const theme = createMuiTheme({});

const LightMode: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page />
    </ThemeProvider>
  );
};

export default LightMode;
