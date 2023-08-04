import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Window = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  margin-bottom: 5rem;
`;

const Slide = styled.div`
  display: flex;
`;

const SlideItem = styled.div`
  display: flex;
`;

const ButtonGroup = styled.div`
  button {
    all: unset;
    position: absolute;
    color: white;
    top: 45%;
    font-size: 2rem;
    cursor: pointer;
  }
  .prevbtn {
    left: 5%;
  }
  .nextbtn {
    right: 5%;
  }
`;

const Carousel = () => {
  const [currentSlide, setSlide] = useState(0);
  const slideRef = useRef(null);

  const handlePrevSlide = () => {
    currentSlide !== 0 ? setSlide(currentSlide - 1) : setSlide(currentSlide);
  };

  const handleNextSlide = () => {
    currentSlide !== 2 ? setSlide(currentSlide + 1) : setSlide(currentSlide);
  };

  useEffect(() => {
    slideRef.current.style.transition = `all 0.5s ease-in-out`;
    slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`;
  }, [currentSlide]);

  const staticServerUri = process.env.REACT_APP_PATH || "";

  const carousel = [
    `${staticServerUri}/carouselItem1.jpeg`,
    `${staticServerUri}/carouselItem2.jpeg`,
    `${staticServerUri}/carouselItem3.jpeg`,
  ];

  return (
    <Window>
      <Slide ref={slideRef}>
        <SlideItem>
          {carousel.map((item, idx) => {
            return <img src={item} key={idx} alt={`${currentSlide + 1}`} />;
          })}
        </SlideItem>
      </Slide>
      <ButtonGroup>
        <button className="prevbtn" onClick={handlePrevSlide}>
          {"<"}
        </button>
        <button className="nextbtn" onClick={handleNextSlide}>
          >
        </button>
      </ButtonGroup>
    </Window>
  );
};

export default Carousel;
