import React, { useState } from "react";
import PhotoBox from "../PhotoBox";
import Nav from "../Navigation";
import Button from "../Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Panel = () => {
  const [navHide, setNavHide] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const toggleNavVisibility = () => {
    setNavHide(!navHide);
    setIsButtonActive(!isButtonActive);
  };
  return (
    <>
      <aside className={`aside ${navHide ? "aside--hidden" : ""}`}>
        {" "}
        <PhotoBox name="John Doe" avatar="..assets/images" />
        <Nav></Nav>
        <Link to="/">
          <Button
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            text="Go back"
            id="aside-button_left"
            className="aside__button"
          />
        </Link>
      </aside>{" "}
      <div
        className={`main-container-button ${
          isButtonActive
            ? "main-container-button--left-aligned"
            : "main-container-button--nav"
        }`}
      >
        <Button
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={toggleNavVisibility}
          className="main-container-button__button"
        />
      </div>
    </>
  );
};

export default Panel;
