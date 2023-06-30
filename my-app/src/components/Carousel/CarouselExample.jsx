import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import Slide from "./Slide";
import slide1 from "../../assets/image/slide1.png";
import slide2 from "../../assets/image/slide2.png";
import slide3 from "../../assets/image/slide3.png";

const Container = styled.div`
  margin: 20px;
  width: 50%;
  overflow: hidden;
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
`;

const TOTAL_SLIDES = 2;

export default function CarouselExample() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 1s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <Slider ref={slideRef}>
        <Slide image={slide1} />
        <Slide image={slide2} />
        <Slide image={slide3} />
      </Slider>
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </Container>
  );
}
