import React from "react";
import About from "../../components/Box/index";
import { Timeline } from "../../components/Timeline/index";
import eventsData from "../../modules/timelineData";
import Expertise from "../../components/Expertise/index";
import Portfolio from "../../components/Portfolio/index";
import { Address } from "../../components/Address/index";
import { Feedback } from "../../components/Feedback/index";
import experiences from "../../modules/experience";
import feedbackData from "../../modules/feedbackData";

const AllComponents = () => {
  return (
    <main className="main">
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
