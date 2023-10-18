import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import secondCard from "../../assets/images/portfolio-card2.png";
import card from "../../assets/images/portfolio-card.png";
import imagesLoaded from "imagesloaded";

import PortfolioInfo from "./info";

const Portfolio = () => {
  const [filter, setFilter] = useState("*");

  const portfolioRef = useRef(null);

  useEffect(() => {
    const iso = new Isotope(portfolioRef.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
      filter: filter,
    });

    const imagesLoad = imagesLoaded(portfolioRef.current);
    imagesLoad.on("progress", () => {
      iso.layout();
    });

    return () => {
      iso.destroy();
    };
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    if (filter === newFilter) {
      setFilter("*");
    } else {
      setFilter(newFilter);
    }
  };

  const portfolioItems = [
    {
      id: 1,
      category: "all, ui",
      title: "UI Project 1",
      description: "Some UI project description 1.",
      url: "https://example.com/ui1",
      imageUrl: card,
    },
    {
      id: 2,
      category: "all code",
      title: "Code Project 1",
      description: "Some code project description 1.",
      url: "https://example.com/code1",
      imageUrl: secondCard,
    },
    {
      id: 3,
      category: "all ui",
      title: "UI project 2",
      description: "Some mixed project description 1.",
      url: "https://example.com/mixed1",
      imageUrl: card,
    },
    {
      id: 4,
      category: "ui, code",
      title: "Code Project 2",
      description: "Another UI project description 2.",
      url: "https://example.com/another-ui2",
      imageUrl: secondCard,
    },
  ];

  return (
    <section id="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <div className="portfolio__container">
        <div className="portfolio__filter">
          <button
            onClick={() => handleFilterChange("*")}
            className={`portfolio__filter-button ${
              filter === "*" ? "active" : ""
            }`}
          >
            All
          </button>
          <span className="portfolio__filter-divider">/ </span>
          <button
            onClick={() => handleFilterChange(".ui")}
            className={`portfolio__filter-button ${
              filter === ".ui" ? "active" : ""
            }`}
          >
            UI
          </button>
          <span className="portfolio__filter-divider">/ </span>
          <button
            onClick={() => handleFilterChange(".code")}
            className={`portfolio__filter-button ${
              filter === ".code" ? "active" : ""
            }`}
          >
            Code
          </button>
        </div>
        <div className="portfolio__items" ref={portfolioRef}>
          {portfolioItems.map((item) => (
            <div key={item.id} className={`portfolio-item ${item.category}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="portfolio-item__image"
              />
              <PortfolioInfo
                title={item.title}
                description={item.description}
                url={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
