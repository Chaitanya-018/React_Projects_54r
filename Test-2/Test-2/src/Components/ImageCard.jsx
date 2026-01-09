import React from "react";

const ImageCard = ({ src, title }) => {
  return (
    <>
      <div className="card">
        <img src={src} alt={title} width="150" height="150" />
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default ImageCard;
