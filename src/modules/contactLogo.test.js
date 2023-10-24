import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContactItem } from "./contactLogo";

jest.mock("jest-mock");

test("opens link in new tab on item click", () => {
  const openLink = jest.fn();
  global.open = openLink;

  window.confirm = jest.fn(() => true);

  render(
    <ContactItem
      platform="Twitter"
      link="https://twitter.com/twitter"
      imageSrc="twitter-icon.png"
      altText="Twitter Logo"
    />
  );

  fireEvent.click(screen.getByText("https://twitter.com/twitter"));
  expect(openLink).toHaveBeenCalledWith(
    "https://twitter.com/twitter",
    "_blank"
  );
});

test("does not open link in new tab if user clicks Cancel", () => {
  const openLink = jest.fn();
  global.open = openLink;

  window.confirm = jest.fn(() => false);

  render(
    <ContactItem
      platform="Twitter"
      link="https://twitter.com/twitter"
      imageSrc="twitter-icon.png"
      altText="Twitter Logo"
    />
  );

  fireEvent.click(screen.getByText("https://twitter.com/twitter"));
  expect(openLink).not.toHaveBeenCalled();
});
