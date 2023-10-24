import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Button from "./index";

test("renders button with text", () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText("Click me");
  expect(buttonElement).toBeInTheDocument();
});

test("renders button with icon", () => {
  const mockIcon = <div className="icon" />;
  render(<Button icon={mockIcon} />);
  const iconElement = screen.getByTestId("button-icon");
  expect(iconElement).toBeInTheDocument();
});

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn();
  render(<Button text="Click me" onClick={handleClick} />);
  const buttonElement = screen.getByText("Click me");

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("renders button with data-testid", async () => {
  render(<Button text="Click me" id="custom-id" />);
  await waitFor(() => {
    const buttonElement = screen.getByTestId("custom-id");
    expect(buttonElement).toBeInTheDocument();
  });
});
