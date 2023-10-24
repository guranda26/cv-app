import React from "react";
import { render, screen } from "@testing-library/react";
import AllComponents from "./allComponent";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/store";

test("renders AllComponents with child components", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <AllComponents />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByTestId("about-component")).toBeInTheDocument();
  expect(screen.getByTestId("timeline-component")).toBeInTheDocument();
  expect(screen.getByTestId("expertise-component")).toBeInTheDocument();
  expect(screen.getByTestId("skills-component")).toBeInTheDocument();
  expect(screen.getByTestId("portfolio-component")).toBeInTheDocument();
  expect(screen.getByTestId("address-component")).toBeInTheDocument();
  expect(screen.getByTestId("feedback-component")).toBeInTheDocument();
});
