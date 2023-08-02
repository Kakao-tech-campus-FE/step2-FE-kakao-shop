import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import carouselItem1 from "@/assets/carouselItem1.jpeg";
import carouselItem2 from "@/assets/carouselItem2.jpeg";
import carouselItem3 from "@/assets/carouselItem3.jpeg";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  top: calc(50% - 1rem);
  z-index: 1;

  font-size: 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  display: inline-flex;
`;

const Slide = styled.img`
  width: 100%;
`;

const DotContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0.5rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.button`
  padding: 0.25rem;
  background-color: rgba(0, 0, 0, 0);
  color: #00000075;
  border: none;
  cursor: pointer;

  &.active {
    color: #ffffff75;
  }
`;

const SLIDE_EXAMPLE = [
  {
    src: carouselItem1,
  },
  {
    src: carouselItem2,
  },
  {
    src: carouselItem3,
  },
];

function Carousel({ time, arrowButton, dotButton, slideArray, ...props }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideRef = useRef();

  const handleNextSlide = () => {
    if (currentSlideIndex >= slideArray.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(slideArray.length - 1);
    } else {
      setCurrentSlideIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    if (!slideRef || !slideRef.current) return;
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translate(-${currentSlideIndex}00%)`;

    const timer = setTimeout(handleNextSlide, time);
    return () => clearTimeout(timer);
  }, [currentSlideIndex, time, handleNextSlide]);

  return (
    <Container {...props}>
      <SliderContainer ref={slideRef}>
        {slideArray.map((item, index) => (
          <Slide key={index} src={item.src} alt={item.alt} />
        ))}
      </SliderContainer>

      {dotButton && (
        <DotContainer>
          {slideArray.map((item, index) => (
            <Dot
              key={index}
              className={index === currentSlideIndex && "active"}
              onClick={() => setCurrentSlideIndex(index)}
            >
              ●
            </Dot>
          ))}
        </DotContainer>
      )}

      {arrowButton && (
        <>
          <Button onClick={handlePrevSlide} style={{ left: "1rem" }}>
            <img
              alt="previous"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfElEQVR4nO2XMQqAMBAEh1Ms9C/6AittlXxB/IL+3yYBG8HGbJAbSD3LkhwX+DG1SmzAChxAn1teAQE445mU8g1oc9YebvId6Fz+Nea14xcOf2p5GFXjtZgAphw4CQ+R8CYS3kTCmyiqiUq5lj+FmBFgwBK/ZgNCGqX8NRevhSysSiahIgAAAABJRU5ErkJggg=="
            />
          </Button>
          <Button onClick={handleNextSlide} style={{ right: "2rem" }}>
            <img
              alt="next"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAe0lEQVR4nO2XMQqAMBAEBxWLe4z4ASuxVAQ/YP6g/xckgo1lPCW7kHqH5e7Iwk9UeZo3wAZMQOEB0AN7fDNQvg1gQPgCxHqDWASBkkAzcUrbcUlJPJ3tjpwAzPM2mMxR7Gjg0suyXrXg+S0fvDtBG6vZ6FXNAGov4+Q6AC9HLK6rbqMeAAAAAElFTkSuQmCC"
            />
          </Button>
        </>
      )}
    </Container>
  );
}

Carousel.propTypes = {
  time: PropTypes.number,
  arrowButton: PropTypes.bool,
  dotButton: PropTypes.bool,
  slideArray: PropTypes.array,
};

Carousel.defaultProps = {
  time: 2000,
  arrowButton: true,
  dotButton: true,
  slideArray: SLIDE_EXAMPLE,
};

export default Carousel;
