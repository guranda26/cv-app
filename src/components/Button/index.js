import React from "react";

const Button = ({ icon, text, onClick, id }) => {
  return (
    <button
      className="button"
      id={id}
      onClick={onClick}
      data-testid="custom-id"
    >
      {icon && (
        <span className="button__icon" data-testid="button-icon">
          {icon}
        </span>
      )}
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
