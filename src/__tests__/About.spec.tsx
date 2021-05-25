import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import About from "../About";

it("renders link", () => {
  const { asFragment } = render(<About />);
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});

it("shows modal", async () => {
  const { getByText } = render(<About />);
  const aboutLink = getByText("About");
  fireEvent.click(aboutLink);
  await waitFor(() => screen.getByText("About Wacky News Reader"));
});
