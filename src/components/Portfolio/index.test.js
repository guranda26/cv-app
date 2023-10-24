import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Portfolio from "./index";

test("renders Portfolio component with initial state", () => {
  render(<Portfolio />);

  const titleElement = screen.getByText("Portfolio");
  expect(titleElement).toBeInTheDocument();

  const allButton = screen.getByText("All");
  const uiButton = screen.getByText("UI");
  const codeButton = screen.getByText("Code");
  expect(allButton).toBeInTheDocument();
  expect(uiButton).toBeInTheDocument();
  expect(codeButton).toBeInTheDocument();

  const uiProject = screen.getByText("UI Project 1");
  const codeProject = screen.getByText("Code Project 1");
  expect(uiProject).toBeInTheDocument();
  expect(codeProject).toBeInTheDocument();
});

test("filters portfolio items when filter buttons are clicked", () => {
  render(<Portfolio />);

  const uiProject = screen.getByText("UI Project 1");
  const codeProject = screen.getByText("Code Project 1");
  expect(uiProject).toBeVisible();
  expect(codeProject).toBeVisible();

  const uiButton = screen.getByText("UI");
  fireEvent.click(uiButton);

  expect(uiProject).toBeVisible();
  expect(codeProject).not.toBeVisible();

  const codeButton = screen.getByText("Code");
  fireEvent.click(codeButton);

  expect(uiProject).not.toBeVisible();
  expect(codeProject).toBeVisible();
});
