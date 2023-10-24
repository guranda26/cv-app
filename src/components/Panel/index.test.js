import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Panel from "./index";

test("renders Panel component with initial state", () => {
  render(
    <Router>
      <Panel />
    </Router>
  );

  const nameElement = screen.getByText("John Doe");
  expect(nameElement).toBeInTheDocument();

  const goBackButton = screen.getByText("Go back");
  expect(goBackButton).toBeInTheDocument();
  fireEvent.click(goBackButton);
});
