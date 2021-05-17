import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, ThemeProvider, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Header from "./Header";
import News from "./News";
import Control from "./Control";
import Footer from "./Footer";
import { WackyState } from "./connect/reducer";
import { fetchArticles } from "./connect/actions";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(section));
  }, [dispatch]);

  const theme = useSelector((state: WackyState) => state.theme);
  const appliedTheme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Container>
        <Header />
        <Control />
        <News />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

Page.defaultProps = {
  section: sections.WORLD,
};

export default Page;
