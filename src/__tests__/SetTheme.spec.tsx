import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import SetTheme from "../SetTheme";
import wackyReducer, { initialState } from "../connect/reducer";

it("renders with initial state", () => {
  const store = createStore(wackyReducer, initialState);
  const { asFragment } = render(
    <Provider store={store}>
      <SetTheme />
    </Provider>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});
