import React from "react";
import { render, screen } from "@testing-library/react";
import Info from "./index";

test("renders Info component with correct content", () => {
  const title = "Sample Title";
  const text = "Sample Text";

  render(<Info title={title} text={text} />);

  const renderedTitle = screen.getByText(title);
  const renderedText = screen.getByText(text);

  expect(renderedTitle).toBeInTheDocument();
  expect(renderedText).toBeInTheDocument();
});

test("renders Info component without title", () => {
  const text = "Sample Text";

  render(<Info text={text} />);

  const renderedText = screen.getByText(text);
  expect(renderedText).toBeInTheDocument();

  const renderedTitle = screen.queryByText("Sample Title");
  expect(renderedTitle).toBeNull();
});
