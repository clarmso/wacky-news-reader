import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import News from "../News";
import wackyReducer, { initialState } from "../connect/reducer";
import { themeChoices } from "../SetTheme";
import { ninetysTheme, lightTheme } from "../Theme";

it("renders with initial state", () => {
  const store = createStore(wackyReducer, initialState);
  const { asFragment } = render(
    <Provider store={store}>
      <News />
    </Provider>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});

it("renders with 90s mode", () => {
  const store = createStore(wackyReducer, {
    ...initialState,
    is90s: true,
    theme: ninetysTheme,
    themeChoice: themeChoices.NINETYS,
    news: [
      {
        title: "15 New Books to Watch For in May",
        byline: "By Joumana Khatib",
        abstract:
          "Buzzy new novels from Stacey Abrams, Jean Hanff Korelitz and Andy Weir; Michael Lewis’s take on the pandemic; Chimamanda Ngozi Adichie’s ode to grief and more.",
        updated_date: "2021-04-30T22:45:16-04:00",
        is90s: true,
        url: "https://www.nytimes.com/2021/04/28/books/may-2021-new-books.html",
        uri: "nyt://article/582af77c-6524-5a5c-8549-1536a31e8b82",
      },
    ],
  });
  const { asFragment } = render(
    <Provider store={store}>
      <News />
    </Provider>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});

it("renders with one news item", () => {
  const store = createStore(wackyReducer, {
    ...initialState,
    is90s: false,
    theme: lightTheme,
    themeChoice: themeChoices.LIGHT,
    news: [
      {
        title: "15 New Books to Watch For in May",
        byline: "By Joumana Khatib",
        abstract:
          "Buzzy new novels from Stacey Abrams, Jean Hanff Korelitz and Andy Weir; Michael Lewis’s take on the pandemic; Chimamanda Ngozi Adichie’s ode to grief and more.",
        updated_date: "2021-04-30T22:45:16-04:00",
        is90s: false,
        url: "https://www.nytimes.com/2021/04/28/books/may-2021-new-books.html",
        uri: "nyt://article/582af77c-6524-5a5c-8549-1536a31e8b82",
      },
    ],
  });
  const { asFragment } = render(
    <Provider store={store}>
      <News />
    </Provider>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});
