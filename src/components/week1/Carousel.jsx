import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/carouselItem1.jpeg",
    "/carouselItem2.jpeg",
    "/carouselItem3.jpeg",
  ];
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel hidden">
      <div className="carousel-images">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <button onClick={handlePrevious}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
