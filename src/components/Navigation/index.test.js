import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import sections from "../../modules/navigationData";
import Nav from "./index";

test("renders navigation links with correct labels", () => {
  render(
    <Router>
      <Nav sections={sections} />
    </Router>
  );

  sections.forEach((section) => {
    const link = screen.getByText(section.label);
    expect(link).toBeInTheDocument();
  });
});

test("activates correct link when clicked", () => {
  render(
    <Router>
      <Nav sections={sections} />
    </Router>
  );

  const sectionToClick = sections.find((section) => section.id === "about");
  const link = screen.getByText(sectionToClick.label);
  fireEvent.click(link);
});
