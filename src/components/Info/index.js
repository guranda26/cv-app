import React from "react";
import "../../App.css";

const Info = ({ title, text }) => {
  const infoStyle = {
    backgroundColor: "#eee",
    padding: "15px",
    position: "relative",
  };

  return (
    <div style={infoStyle} className="info__details">
      {title && <h3 className="info__title">{title}</h3>}
      <p className="info__text">{text}</p>
    </div>
  );
};

export default Info;
