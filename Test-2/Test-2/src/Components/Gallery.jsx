import React from "react";
import ImageCard from "./ImageCard";
import Tiger from "../assets/Tiger.jpg";
const Gallery = () => {
  const images = [
    {
      id: 1,
      title: "Tiger",
      src: Tiger
    },

     {
      id: 2,
      title: "Shark",
      src: "/Shark.jpg"
    }
  ];

  return (
    <>
      <h2>Gallery</h2>

      <div className="gallery">
        {images.map(img => (
          <ImageCard
            key={img.id}
            src={img.src}
            title={img.title}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
