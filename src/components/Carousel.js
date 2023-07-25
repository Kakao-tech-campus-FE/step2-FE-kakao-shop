import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/carouselItem1.jpeg",
    "/carouselItem2.jpeg",
    "/carouselItem3.jpeg",
  ];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImage]} alt="carousel" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
