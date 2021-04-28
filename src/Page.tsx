import React, { useState, useEffect } from "react";
import { Container, ThemeProvider, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme, NinetysTheme } from "./Theme";
import Header from "./Header";
import News from "./News";
import Control, { themeChoices } from "./Control";
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
    fetchArticles();
  }, []);

  const [theme, setTheme] = useState(lightTheme);
  const [themeChoice, setThemeChoice] = useState(themeChoices.LIGHT);
  const themeDictionary: { [key: string]: object } = {
    [themeChoices.LIGHT]: lightTheme,
    [themeChoices.DARK]: darkTheme,
    [themeChoices.NINETYS]: NinetysTheme,
  };
  const appliedTheme = createMuiTheme(theme);
  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    setThemeChoice(selected);
    setTheme(themeDictionary[selected]);
  };
  const is90s = themeChoice === themeChoices.NINETYS;

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Container>
        <Header date={date} />
        <Control
          themeChoice={themeChoice}
          handleChangeTheme={handleChangeTheme}
        />
        <News data={data} is90s={is90s} />
        <Footer themeChoice={themeChoice} is90s={is90s} />
      </Container>
    </ThemeProvider>
  );
};

export default Page;
