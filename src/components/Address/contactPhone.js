import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactInfo } from "./contactLogo";

const choosePlatform = ({ platform, link }) => {
  const confirmationMessage = `Want to open ${platform}?`;
  const additionalMessage = `${window.location.origin} wants to open your application`;
  const fullMessage = `${confirmationMessage}\n\n${additionalMessage}`;
  const shouldOpen = window.confirm(fullMessage);
  if (shouldOpen) {
    window.open(link);
  }
};
const PhoneContact = () => {
  const handlePhoneClick = () => {
    const skypeLink = "https://www.skype.com";
    choosePlatform({ platform: "Skype", link: skypeLink });
  };

  return (
    <div onClick={handlePhoneClick}>
      <ContactInfo icon={faPhone} data="592 50 53 36" type="phone" />
    </div>
  );
};

export default PhoneContact;
