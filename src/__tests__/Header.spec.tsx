import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import Header from "../Header";
import wackyReducer, { initialState } from "../connect/reducer";

it("renders with initial state", () => {
  const store = createStore(wackyReducer, initialState);
  const { asFragment } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});

it("renders with 90s mode", () => {
  const store = createStore(wackyReducer, { ...initialState, is90s: true });
  const { asFragment } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});
