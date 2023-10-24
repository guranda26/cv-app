import React from "react";
import { render, screen } from "@testing-library/react";
import { Address } from "./index";
import { MemoryRouter } from "react-router-dom";

test("renders Contacts section with correct data", () => {
  render(
    <MemoryRouter>
      <Address />
    </MemoryRouter>
  );

  expect(screen.getByText("Contacts")).toBeInTheDocument();
  expect(screen.getByText("592 50 53 36")).toBeInTheDocument();
  expect(screen.getByText("guralemo@gmail.com")).toBeInTheDocument();
  expect(screen.getByAltText("Twitter Logo")).toBeInTheDocument();
  expect(screen.getByAltText("Facebook Logo")).toBeInTheDocument();
  expect(screen.getByAltText("Skype Logo")).toBeInTheDocument();
});
