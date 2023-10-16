import React from "react";
import "../../index.css";

const Button = ({ icon, text, onClick, id }) => {
  return (
    <button className="button" id={id} onClick={onClick}>
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
