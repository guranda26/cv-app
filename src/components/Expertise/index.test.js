import React from "react";
import { render, screen } from "@testing-library/react";
import Expertise from "./index";

const testData = [
  {
    date: "2022 - Present",
    info: {
      company: "Example Company",
      job: "Software Engineer",
      description: "Worked on various software projects.",
    },
  },
];

test("renders Expertise component with correct data", () => {
  render(<Expertise data={testData} />);

  const expertiseTitle = screen.getByText("Experience");
  expect(expertiseTitle).toBeInTheDocument();

  testData.forEach((experience) => {
    const dateElement = screen.getByText(experience.date);
    const companyElement = screen.getByText(experience.info.company);
    const jobElement = screen.getByText(experience.info.job);
    const descriptionElement = screen.getByText(experience.info.description);

    expect(dateElement).toBeInTheDocument();
    expect(companyElement).toBeInTheDocument();
    expect(jobElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
