import { Palette } from "@material-ui/icons";
import backgroundImage90s from "./img/snowing.gif";

export const lightTheme = {
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "none",
        },
      },
    },
  },
};

export const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#fafafa",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "none",
        },
      },
    },
  },
};

export const ninetysTheme = {
  palette: {
    background: {
      paper: "hotpink",
    },
  },
  typography: {
    fontFamily: "Comic Sans MS",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${backgroundImage90s})`,
        },
      },
    },
  },
};
