import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPageComponent from "./mainPage";

jest.mock("../components/Panel/index", () => {
  return () => <div data-testid="panel-component">Panel Component</div>;
});

jest.mock("../pages/Inner/allComponent", () => {
  return () => <div data-testid="all-components">All Components</div>;
});

describe("MainPageComponent", () => {
  it("renders Panel and AllComponents components", () => {
    render(
      <Router>
        <MainPageComponent />
      </Router>
    );

    expect(screen.getByTestId("panel-component")).toBeInTheDocument();

    expect(screen.getByTestId("all-components")).toBeInTheDocument();
  });

  it("renders AllComponents component with correct route", () => {
    render(
      <Router>
        <MainPageComponent />
      </Router>
    );

    expect(screen.getByTestId("all-components")).toBeInTheDocument();
  });
});
