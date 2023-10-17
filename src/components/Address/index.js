import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ContactItem, ContactInfo } from "../../services/contactLogo";
import twitterImg from "../../assets/images/icons/twitter-icon.png";
import facebookImg from "../../assets/images/icons/facebook-icon.png";
import skypeImg from "../../assets/images/icons/skype-icon.png";
import PhoneContact from "../../services/contactPhone";
export function Address() {
  return (
    <section id="contact">
      <h2>Contacts</h2>
      <ul className="contact-list">
        <PhoneContact />
        <ContactInfo icon={faEnvelope} data="guralemo@gmail.com" type="email" />
        <ContactItem
          platform="Twitter"
          link="https://twitter.com/twitter"
          imageSrc={twitterImg}
          altText="Twitter Logo"
        />
        <ContactItem
          platform="Facebook"
          link="https://www.facebook.com/facebook"
          imageSrc={facebookImg}
          altText="Facebook Logo"
        />
        <ContactItem
          platform="Skype"
          link="https://www.skype.com/"
          imageSrc={skypeImg}
          altText="Skype Logo"
        />
      </ul>
    </section>
  );
}
