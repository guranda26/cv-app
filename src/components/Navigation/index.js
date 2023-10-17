import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import sections from "../../modules/navigationData";
import scrollToElement from "../../modules/scrollElement";
const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    scrollToElement(sectionId);
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        {sections &&
          sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleLinkClick(section.id)}
              className="nav-bar__item"
            >
              <NavLink
                to={`/inner#${section.id}`}
                style={{
                  textDecoration: "none",
                  color: activeLink === section.id ? "#26c17e" : "",
                  transition: "color 0.3s ease",
                }}
                className="nav-bar__link"
              >
                <span className="nav-bar__icon icon">
                  <FontAwesomeIcon icon={section.icon} />
                </span>
                <span className="nav-bar__label">{section.label}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
