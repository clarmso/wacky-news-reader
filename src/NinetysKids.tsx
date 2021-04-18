import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Page from "./Page";

const NinetysTheme = createMuiTheme({
  palette: {
    background: {
      paper: "hotpink",
      default: "hotpink",
    },
  },
  typography: {
    fontFamily: "Comic Sans MS",
  },
});

const NinetysKids: React.FC = () => {
  return (
    <ThemeProvider theme={NinetysTheme}>
      <CssBaseline />
      <Page />
    </ThemeProvider>
  );
};

export default NinetysKids;
