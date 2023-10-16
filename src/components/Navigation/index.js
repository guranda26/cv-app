import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

// import { HashLink } from "react-router-hash-link";
import {
  faUser,
  faGraduationCap,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    id: "about",
    label: "About me",
    icon: faUser,
  },
  {
    id: "education",
    label: "Education",
    icon: faGraduationCap,
  },
  {
    id: "expertise",
    label: "Experience",
    icon: faPen,
  },
  {
    id: "skills",
    label: "Skills",
    icon: faGem,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: faSuitcase,
  },
  {
    id: "contact",
    label: "Contact",
    icon: faLocationArrow,
  },
  {
    id: "feedback",
    label: "Feedback",
    icon: faComment,
  },
];

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
                smooth
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
