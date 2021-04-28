import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme, NinetysTheme } from "./Theme";
import Header from "./Header";
import News, { NewsProps } from "./News";
import Control from "./Control";
import Footer from "./Footer";

const Page: React.FC = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");

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
      setDate(data.last_updated);
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
        <Header date={date} />
        <Control choice={choice} handleChangeTheme={handleChangeTheme} />
        <Grid container spacing={5} justify="center">
          {data.map((d: NewsProps) => {
            return (
              <News
                title={d.title}
                byline={d.byline}
                abstract={d.abstract}
                is90s={choice === "90s"}
                key={d.uri}
              />
            );
          })}
        </Grid>
        <Footer is90s={choice === "90s"} mode={choice} />
      </Container>
    </ThemeProvider>
  );
};

export default Page;
