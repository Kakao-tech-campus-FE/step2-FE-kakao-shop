import React, { useState } from "react";

const Carousel = () => {
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

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div className="carousel">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImage]} alt="carousel" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
