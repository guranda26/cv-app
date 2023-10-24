import React from "react";
import { render, screen } from "@testing-library/react";
import { Feedback } from "./index";

const testData = [
  {
    feedback: "Great work!",
    reporter: {
      name: "John Doe",
      photoUrl: "path/to/photo.jpg",
      citeUrl: "https://example.com",
    },
  },
];

test("renders Feedback component with correct data", () => {
  render(<Feedback data={testData} />);

  const feedbackTitle = screen.getByText("Feedbacks");
  expect(feedbackTitle).toBeInTheDocument();

  testData.forEach((item) => {
    const feedbackText = screen.getByText(item.feedback);
    const reporterName = screen.getByText(item.reporter.name);
    const citeUrlLink = screen.getByText("example.com"); // Adjust this based on your test data

    expect(feedbackText).toBeInTheDocument();
    expect(reporterName).toBeInTheDocument();
    expect(citeUrlLink).toHaveAttribute("href", item.reporter.citeUrl);
  });
});
