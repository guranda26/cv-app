import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const openLink = (link) => {
  window.open(link, "_blank");
};

const ContactItem = ({ platform, link, imageSrc, altText }) => {
  const handleLinkClick = () => {
    const confirmationMessage = `Want to open ${platform}?`;
    const additionalMessage = `${window.location.origin} wants to open your application`;
    const fullMessage = `${confirmationMessage}\n\n${additionalMessage}`;

    const shouldOpen = window.confirm(fullMessage);

    if (shouldOpen) {
      openLink(link);
    } else {
      console.log("User clicked Cancel");
    }
  };

  return (
    <li className="contact-list__item" onClick={handleLinkClick}>
      <div className="contact-list__icon">
        <img
          src={imageSrc}
          alt={altText}
          className="contact-list__icon-image"
        />
      </div>
      <div className="contact-list__icon contact-list__info">
        <p className="contact-list__icon contact-list_phone">{platform}</p>
        <span className="contact-list__link">{link}</span>
      </div>
    </li>
  );
};

const ContactInfo = ({ icon, data, type }) => {
  let content;

  if (type === "email") {
    content = (
      <Link
        to={`mailto:${data}`}
        className="contact-list__icon contact-list_email"
      >
        <FontAwesomeIcon icon={icon} className="contact-list__icon-icon" />{" "}
        {data}
      </Link>
    );
  } else if (type === "phone") {
    content = (
      <a
        href={`tel:${data}`}
        className={`contact-list__icon contact-list_${type}`}
      >
        <FontAwesomeIcon icon={icon} className="contact-list__icon-icon" />{" "}
        {data}
      </a>
    );
  } else {
    content = null;
  }

  return <li className="contact-list__item">{content}</li>;
};

export { ContactItem, ContactInfo };
