import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme, NinetysTheme } from "./Theme";
import News, { NewsProps } from "./News";
import nytimesLogoLight from "./img/poweredby_nytimes_200a.png";
import nytimesLogoDark from "./img/poweredby_nytimes_200c.png";

const Page: React.FC = () => {
  const [data, setData] = useState([]);

  const fetchArticles = async () => {
    console.log("fetchArticles called");
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${
          import.meta.env.VITE_NYT_API_KEY
        }`
      );
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("useEffect Called");
    if (data.length === 0) fetchArticles();
  });

  const [theme, setTheme] = useState(lightTheme);
  const [choice, setChoice] = useState("light");
  const themeDictionary: { [key: string]: any } = {
    light: lightTheme,
    dark: darkTheme,
    "90s": NinetysTheme,
  };
  const appliedTheme = createMuiTheme(theme);
  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    setChoice(selected);
    setTheme(themeDictionary[selected]);
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Container>
        <Typography variant="h1" component="h1" align="center">
          🗞️ Wacky News Reader 🗞️
        </Typography>
        <Grid container spacing={10} justify="center">
          <Grid item>
            <RadioGroup
              name="modes"
              value={choice}
              onChange={handleChangeTheme}
              row
            >
              <FormControlLabel
                value={"light"}
                control={<Radio color="primary" />}
                label="Light Mode"
              />
              <FormControlLabel
                value={"dark"}
                control={<Radio color="primary" />}
                label="Dark Mode"
              />
              <FormControlLabel
                value={"90s"}
                control={<Radio color="primary" />}
                label="90s Mode"
              />
            </RadioGroup>
          </Grid>
        </Grid>
        <Grid container spacing={5} justify="center">
          {data.map((d: NewsProps) => {
            return (
              <News
                title={d.title}
                byline={d.byline}
                abstract={d.abstract}
                uri={d.uri}
                key={d.uri}
              />
            );
          })}
        </Grid>
        <Grid container spacing={5} justify="center">
          <Grid item>
            {choice === "dark" ? (
              <img src={nytimesLogoDark} alt="Powered by New York Times" />
            ) : (
              <img src={nytimesLogoLight} alt="Powered by New York Times" />
            )}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Page;
