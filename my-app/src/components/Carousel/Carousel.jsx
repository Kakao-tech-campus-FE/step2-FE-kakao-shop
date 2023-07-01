import React from "react";
import { useState } from "react";
import "./Carousel.css";

function Carousel(props) {
  const [curImgIdx, setCurImgIdx] = useState(0);

  // Q) circular하게 작동하는 구현방식???
  const handleNextImg = () => {
    setCurImgIdx((prevImgIdx) => (prevImgIdx + 1) % props.images.length);
  };

  const handlePrevImg = () => {
    setCurImgIdx(
      (prevImgIdx) =>
        (prevImgIdx - 1 + props.images.length) % props.images.length
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${curImgIdx * 100}vw)` }}
      >
        {props.images.map((image, index) => (
          <img src={image} alt="" key={index} style={{ width: "100vw" }} />
        ))}
      </div>
      <div className="carousel-context">
        <button id="left-btn" onClick={handlePrevImg}>
          &#8249;
        </button>
        <div className="carousel-text">
          <p id="title">{props.texts[curImgIdx].title}</p>
          <p id="context">{props.texts[curImgIdx].context}</p>
        </div>
        <button id="right-btn" onClick={handleNextImg}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
