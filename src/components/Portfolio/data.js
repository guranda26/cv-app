import React from "react";

const PortfolioInfo = ({ title, text, description, url }) => {
  return (
    <div className="portfolio__info">
      <h3 className="portfolio__title">{title}</h3>
      <p className="portfolio__content">{text}</p>
      <p className="portfolio__content">{description}</p>
      <a
        className="portfolio__link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source
      </a>
    </div>
  );
};

export default PortfolioInfo;
