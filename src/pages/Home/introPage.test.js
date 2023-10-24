import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import IntroPage from "./introPage";

test("renders IntroPage component", () => {
  const { getByText, getByAltText } = render(
    <Router>
      <IntroPage />
    </Router>
  );

  expect(screen.getByAltText("background")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(
    screen.getByText("Programmer. Creative. Innovator")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Know more")).toBeInTheDocument();
});
