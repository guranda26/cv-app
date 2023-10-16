import React from "react";

const Expertise = ({ data }) => {
  return (
    <section id="expertise">
      <h2 className="expertise__title">Experience</h2>
      <div className="expertise__list">
        {data.map((experience, index) => (
          <div className="expertise__item" key={index}>
            <div className="expertise__date">{experience.date}</div>
            <div className="expertise__info">
              <div className="expertise__info-company">
                {experience.info.company}
              </div>
              <div className="expertise__info-job">{experience.info.job}</div>
              <div className="expertise__info-description">
                {experience.info.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
