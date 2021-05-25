import { render } from "@testing-library/react";
import MyLink from "../MyLink";

it("renders properly", () => {
  const { asFragment } = render(
    <MyLink href="https://duckduckgo.com">Duck!</MyLink>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});

it("set isInherit property", () => {
  const { asFragment } = render(
    <MyLink isInherit={true} href="https://duckduckgo.com">
      Duck!
    </MyLink>
  );
  const renderedHtml = asFragment();
  expect(renderedHtml).toMatchSnapshot();
});
