import React from "react";
const Box = ({ title, content, headingClassname, contentClassName }) => {
  return (
    <div>
      <h1 className={headingClassname}>{title}</h1>
      <p className={contentClassName}>{content}</p>
    </div>
  );
};

export default Box;
