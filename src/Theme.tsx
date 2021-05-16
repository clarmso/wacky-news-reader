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

export const NinetysTheme = {
  palette: {
    background: {
      paper: "hotpink",
      default: "hotpink",
    },
  },
  typography: {
    fontFamily: "Comic Sans MS",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url("/src/img/pattern90s.png")`,
        },
      },
    },
  },
};
