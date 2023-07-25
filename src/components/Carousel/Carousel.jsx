import React from "react";
import { useState } from "react";
import "./Carousel.css";
import Container from "../atoms/Container";
import Photo from "../atoms/Photo";
import Button from "../atoms/Button";
import Box from "../atoms/Box";

function Carousel({ images }) {
  const [curImgIdx, setCurImgIdx] = useState(0);

  const handleNextImg = () => {
    setCurImgIdx((prevImgIdx) => (prevImgIdx + 1) % images.length);
  };

  const handlePrevImg = () => {
    setCurImgIdx(
      (prevImgIdx) => (prevImgIdx - 1 + images.length) % images.length
    );
  };

  return (
    <Container className="flex relative overflow-hidden">
      {images.map((image, idx) => (
        <Photo src={image} alt={`carouselImage-${idx}`} className="w-screen" />
      ))}
      <Button
        onClick={handlePrevImg}
        className=" w-10 h-10 absolute top-32 left-3 transform -translate-x-1 -translate-y-1/2"
      >
        {"<"}
      </Button>
      <Button
        onClick={handleNextImg}
        className=" w-10 h-10 absolute top-32 right-3 transform -translate-x-1 -translate-y-1/2"
      >
        {">"}
      </Button>
    </Container>
  );
}

export default Carousel;
