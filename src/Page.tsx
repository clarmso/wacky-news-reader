import React, { useState, useEffect, useCallback } from "react";
import { Container, ThemeProvider, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme, NinetysTheme } from "./Theme";
import Header from "./Header";
import News from "./News";
import Control, { themeChoices } from "./Control";
import Footer from "./Footer";
import { NewsItemProps } from "./News";

export const sections = {
  BOOKS: "books",
  FOOD: "food",
  HEALTH: "health",
  SCIENCE: "science",
  SPORTS: "sports",
  TRAVEL: "travel",
  WORLD: "world",
};

type PageProps = {
  section: string;
};

const Page: React.FC<PageProps> = ({ section }) => {
  const [data, setData] = useState<NewsItemProps[]>([]);
  const [date, setDate] = useState<string>("");

  const fetchArticles = useCallback(async () => {
    try {
      const url = new URL(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json`
      );
      const apiKey = "" + import.meta.env.VITE_NYT_API_KEY;
      url.searchParams.append("api-key", apiKey);
      const response = await fetch(url.href);
      const data = await response.json();

      setData(data.results);
      setDate(data.last_updated);
    } catch (error) {
      console.log(error);
    }
  }, [section]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const [theme, setTheme] = useState<object>(lightTheme);
  const [themeChoice, setThemeChoice] = useState<string>(themeChoices.LIGHT);
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
        <Header date={date} is90s={is90s} />
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

Page.defaultProps = {
  section: sections.WORLD,
};

export default Page;
