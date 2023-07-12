import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";
import slide4 from "../../images/slide4.png";
import Carouselslide from './Carouselslide';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const images = [slide1, slide2, slide3, slide4];
  const TOTAL_SLIDES = images.length;

  // >> 버튼을 눌렀을 때 처리
  const NextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % TOTAL_SLIDES);
  };

  // << 버튼을 눌렀을 때 처리
  const PrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {images.map((img, index) => (
          <Carouselslide key={index} img={img} />
        ))}
      </SliderContainer>
      <Center>
        <Button onClick={PrevSlide}>{`<<`}</Button>
        <Button onClick={NextSlide}>{`>>`}</Button>
      </Center>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  height: 300px;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
`;

const Button = styled.div`
  all: unset;
  padding: 5px 10px;
  margin: 0 10px 0 10px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Center = styled.div`
  text-align: center;
`;

export default Carousel;