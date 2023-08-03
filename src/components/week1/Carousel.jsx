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
    <div className="carousel hidden w-[1045px] relative">
      <div className="carousel-images">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className="flex justify-between px-2">
        <button
          className="badge text-blue-400 bg-slate-100 rounded-md text-xs p-1"
          onClick={handlePrevious}
        >
          Prev
        </button>
        <button
          className="badge text-blue-400 bg-slate-100 rounded-md text-xs p-1"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
