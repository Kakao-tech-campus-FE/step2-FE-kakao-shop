import React, { useState } from "react";
import "./Carousel.css";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const handlePrevClick = (prevIndex) => {
    setIndex(prevIndex <= 0 ? 0 : prevIndex - 1);
  };
  const handleNextClick = (prevIndex) => {
    setIndex(prevIndex >= 2 ? 2 : prevIndex + 1);
  };

  return (
    <div className="carousel">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div
        className="slide"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <img src="https://wallpapercave.com/wp/wp8520253.jpg" alt="image1" />
        <img src="https://wallpapercave.com/wp/wp8520259.jpg" alt="image2" />
        <img src="https://wallpapercave.com/wp/wp8520252.jpg" alt="image3" />
      </div>
      <button
        className="prev-btn"
        onClick={() => {
          handlePrevClick(index);
        }}
      >
        <span className="material-symbols-rounded">arrow_back_ios</span>
      </button>
      <button
        className="next-btn"
        onClick={() => {
          handleNextClick(index);
        }}
      >
        <span className="material-symbols-rounded">arrow_forward_ios</span>
      </button>
    </div>
  );
};
export default Carousel;
