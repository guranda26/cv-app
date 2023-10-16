import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Feedback = ({ data }) => {
  return (
    <>
      <section id="feedback" className="element">
        <h2>Feedbacks</h2>
        <div className="feedback-list">
          {data.map((item, index) => (
            <div className="feedback-item" key={index}>
              <div className="feedback-text">{item.feedback}</div>
              <div className="feedback-reporter">
                <img
                  src={item.reporter.photoUrl}
                  alt={item.reporter.name}
                  className="reporter-photo"
                />
                <div className="author-details">
                  <span className="author-name">{item.reporter.name}</span>
                  <a
                    href={item.reporter.citeUrl}
                    className="citeurl-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.reporter.citeUrl.replace(
                      /^(https?:\/\/)?(www\.)?/,
                      ""
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="main-container-button">
        <Button
          icon={<FontAwesomeIcon icon={faChevronUp} onClick={scrollToTop} />}
        />
      </div>
    </>
  );
};

export { Feedback };
