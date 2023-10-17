import React from "react";
import Button from "../Button";
import Info from "../Info";
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
      <section id="feedback" className="feedback element">
        <h2 className="feedback__title">Feedbacks</h2>
        <div className="feedback__list">
          {data.map((item, index) => (
            <div className="feedback__item" key={index}>
              <Info text={item.feedback} />

              <div className="feedback__reporter">
                <img
                  src={item.reporter.photoUrl}
                  alt={item.reporter.name}
                  className="feedback__reporter-photo"
                />
                <div className="feedback__author-details">
                  <span className="feedback__author-name">
                    {item.reporter.name}
                  </span>
                  <a
                    href={item.reporter.citeUrl}
                    className="feedback__citeurl-link"
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
      <div className="main-container-button arrow-button">
        <Button
          icon={<FontAwesomeIcon icon={faChevronUp} onClick={scrollToTop} />}
        />
      </div>
    </>
  );
};

export { Feedback };
