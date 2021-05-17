import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Container, ThemeProvider, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Header from "./Header";
import News from "./News";
import Control from "./Control";
import Footer from "./Footer";
import { NewsItemProps } from "./News";
import { wackyState } from "./connect/reducer";

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

  const theme = useSelector((state: wackyState) => state.theme);
  const appliedTheme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Container>
        <Header date={date} />
        <Control />
        <News data={data} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

Page.defaultProps = {
  section: sections.WORLD,
};

export default Page;
