import React from "react";
const Box = ({ title, content, headingClassname, contentClassName }) => {
  return (
    <div>
      <h2 className={headingClassname}>{title}</h2>
      <p className={contentClassName}>{content}</p>
    </div>
  );
};

export default Box;
