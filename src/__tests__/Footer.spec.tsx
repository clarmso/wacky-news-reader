import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import Footer from "../Footer";
import wackyReducer, { initialState } from "../connect/reducer";

it("renders with initial state", () => {
  const store = createStore(wackyReducer, initialState);
  const { asFragment } = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});

it.skip("renders with 90s mode", () => {
  const stateWith90s = { ...initialState, is90s: true };
  const store = createStore(wackyReducer, stateWith90s);
  const { asFragment } = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});
