import React, { useEffect } from "react";
import { useState } from "react";
import Container from "../../common/atoms/Container";
import Button from "../../common/atoms/Button";
import "../../../styles/molecules/Carousel.css";

export default function MainCarousel({ images }) {
  const [curImgIdx, setCurImgIdx] = useState(1);
  // 기존 이미지 배열을 복제하여 사용할 새로운 배열을 만듭니다.
  const [extendedImages, setExtendedImages] = useState([...images]);
  const [carouselTransition, setCarouselTransition] = useState(
    "transform 0.25s ease-in-out",
  );

  const moveToNthSlide = (index) => {
    // transition을 없애고, 이미지를 이동
    // transition의 설정시간보다 setTimeout의 시간이 길어야함
    setTimeout(() => {
      setCarouselTransition("none");
      setCurImgIdx(index);
    }, 250);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextImg = () => {
    const nextImgIdx = curImgIdx + 1;
    if (nextImgIdx === images.length + 1) {
      moveToNthSlide(1);
    }
    setCurImgIdx((prev) => {
      setCarouselTransition("transform 0.25s ease-in-out");
      return prev + 1;
    });
  };

  const handlePrevImg = () => {
    const nextImgIdx = curImgIdx - 1;
    if (nextImgIdx === 0) {
      moveToNthSlide(images.length);
    }
    setCurImgIdx((prev) => {
      setCarouselTransition("transform 0.25s ease-in-out");
      return prev - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => handleNextImg(), 2500);
    return () => clearInterval(interval);
  }, [handleNextImg]);

  useEffect(() => {
    setExtendedImages([images.at(-1), ...images, images[0]]);
  }, [images]);

  return (
    <Container className="carousel-container">
      {extendedImages.map((image, idx) => (
        <img
          src={image}
          alt={`carouselImage-${idx}`}
          key={idx}
          style={{
            transform: `translateX(-${curImgIdx * 100}%)`,
            transition: carouselTransition,
          }}
        />
      ))}
      <Button onClick={handlePrevImg} className="carousel-left-button">
        {"<"}
      </Button>
      <Button onClick={handleNextImg} className="carousel-right-button">
        {">"}
      </Button>
      <div className="carousel-dot-container">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot ${
              curImgIdx % images.length === idx ? "carousel-dot-selected" : ""
            }`}
          ></span>
        ))}
      </div>
    </Container>
  );
}
