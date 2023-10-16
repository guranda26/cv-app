import React from "react";
import avatarImg from "../../assets/images/avatar.png";
const PhotoBox = ({ name, title, description, avatar }) => {
  return (
    <div className="photo-box">
      <img className="photo-box__avatar" src={avatarImg} alt="Avatar" />
      <h2 className="photo-box__name">{name}</h2>
      <p className="photo-box__title">{title}</p>
      <p className="photo-box__description">{description}</p>
    </div>
  );
};

export default PhotoBox;
