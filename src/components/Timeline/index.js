import React from "react";

const Timeline = ({ data }) => {
  return (
    <section id="education">
      <h2 className="education__title">Education</h2>
      <div className="education__timeline">
        <div className="education__timeline-container">
          {data.map((event, index) => (
            <div className="education__timeline-event" key={index}>
              <div className="timeline-event__date">
                {event.date} <div className="timeline-event__line"></div>
              </div>
              <div className="timeline-event__details">
                <div className="timeline-event__title">{event.title}</div>
                <div className="timeline-event__text">{event.text}</div>
                <div className="timeline-event__arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline };
