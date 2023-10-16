import React from "react";
import About from "../components/Box/about";
import { Timeline } from "../components/Timeline/index";
import eventsData from "../components/Timeline/data";
import Expertise from "../components/Expertise/index";
import Portfolio from "../components/Portfolio/index";
import { Address } from "../components/Address/index";
import { Feedback } from "../components/Feedback/index";
import experiences from "../components/Expertise/experience";
import feedbackData from "../components/Feedback/data";

const AllComponents = () => {
  return (
    <main>
      <section className="main-container">
        <About />
        <Timeline data={eventsData} />
        <Expertise data={experiences} />
        <Portfolio />
        <Address />
        <Feedback data={feedbackData} />
      </section>
    </main>
  );
};

export default AllComponents;
