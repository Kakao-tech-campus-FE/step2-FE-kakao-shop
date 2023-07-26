import { styled } from "styled-components";
import CarouselItem from "../atoms/CarouselItem";
import CarouselButton from "../atoms/CarouselButton";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  position: relative;
  width: 1400px;
  height: inherit;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledUl = styled.ul`
  display: flex;
  width: 100%;
`;

const CarouselList = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [imgList, setImgList] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (images.length !== 0) {
      const start = images[0];
      const end = images[images.length - 1];
      const newList = [end, ...images, start];

      setImgList(newList);
    }
  }, [images]);

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSwipe(1);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const moveSlideTo = (index) => {
    setTimeout(() => {
      setCurrentIndex(index);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = "";
      }
    }, 500);
  };

  const handleSwipe = (direction) => {
    const newIndex = currentIndex + direction;

    if (newIndex === images.length + 1) {
      moveSlideTo(1);
    } else if (newIndex === 0) {
      moveSlideTo(images.length);
    }
    setCurrentIndex((prev) => prev + direction);
    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = "all 0.5s ease-in-out";
    }
  };

  return (
    <Container>
      <CarouselButton direction="left" onClick={() => handleSwipe(-1)}>
        ﹤
      </CarouselButton>
      <CarouselButton direction="right" onClick={() => handleSwipe(1)}>
        ﹥
      </CarouselButton>
      <StyledUl ref={carouselRef}>
        {imgList?.map((img, index) => (
          <CarouselItem key={`${img}-${index}`} image={img} />
        ))}
      </StyledUl>
    </Container>
  );
};

export default CarouselList;
