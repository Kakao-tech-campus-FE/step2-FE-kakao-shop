import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import images01 from "../assets/images_01.png";
import images02 from "../assets/images_02.png";
import images03 from "../assets/images_03.png";

const Window = styled.div`
  overflow: hidden;
  position: relative;
  height: 15rem;
  width: 26.6rem;
`;

const Slide = styled.div`
  display: flex;
  transition: all 0.5s ease-in-out;
`;

const SlideItem = styled.div`
  height: 15rem;
  display: flex;
`;

const Button = styled.button`
  .prevbtn {
    all: unset;
    position: absolute;
    color: white;
    top: 45%;
    left: 5%;
    font-size: 1.5rem;
  }
  .nextbtn {
    all: unset;
    position: absolute;
    color: white;
    top: 45%;
    right: 5%;
    font-size: 1.5rem;
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
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <>
      <Window>
        <Slide ref={slideRef}>
          <SlideItem>
            <img src={images01} alt="0" />
          </SlideItem>
          <SlideItem>
            <img src={images02} alt="1" />
          </SlideItem>
          <SlideItem>
            <img src={images03} alt="2" />
          </SlideItem>
        </Slide>
        <Button className="prevbtn" onClick={handlePrevSlide}>
          {"<"}
        </Button>
        <Button className="nextbtn" onClick={handleNextSlide}>
          >
        </Button>
      </Window>
    </>
  );
};

export default Carousel;
