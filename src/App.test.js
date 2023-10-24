import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Import the Provider component from react-redux
import store from "./app/store";
import App from "./App";

test("renders IntroPageComponent when path is /", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const introPageText = screen.getByText("Programmer. Creative. Innovator");
  expect(introPageText).toBeInTheDocument();
});

test("renders MainPageComponent when path is /inner/*", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/inner/some-page"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const mainPageText = screen.getByText("Feedbacks");
  expect(mainPageText).toBeInTheDocument();
});
