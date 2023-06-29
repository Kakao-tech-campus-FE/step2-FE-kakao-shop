import { useState, useEffect } from "react";
import { styled } from "styled-components";
import marvel from "@assets/images/viewers-marvel.png";

interface SideProps {
  position: string;
}
interface IndexProps {
  curIndex: number;
}

const Carousel = () => {
  const images = [marvel, marvel, marvel, marvel, marvel];
  const [curIndex, setCurIndex] = useState(0);

  const Prev = () => {
    setCurIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const Next = () => {
    setCurIndex((prevIndex) =>
      prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Wrapper>
      <ImageContainer curIndex={curIndex}>
        {images.map((image, index) => (
          <img src={image} key={index} />
        ))}
      </ImageContainer>
      <Side position={"left"}>
        <button onClick={Prev}>&lt;</button>
      </Side>
      <Side position={"right"}>
        <button onClick={Next}>&gt;</button>
      </Side>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  width: 700px;
  height: 400px;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled.div<IndexProps>`
  display: flex;
  width: 100%;
  height: 100%;

  transform: translateX(-${({ curIndex }) => curIndex * 100}%);
  transition: transform 0.5s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Side = styled.div<SideProps>`
  position: absolute;
  ${({ position }) => (position === "right" ? "right: 20px;" : "left: 20px;")}
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 60px;
    height: 100px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 32px;
    color: white;
    z-index: 2;
  }

  &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.1s ease;
    }

    &::before {
      background-color: rgb(0 0 0 / 30%);
      z-index: 1;
      opacity: 0;
    }
    &:hover::before,
    {
      opacity: 1;
    }
  }
`;

const Bullets = styled.div`
  display: flex;
`;
const Bullet = styled.div`
  &::before {
    content: "●";
  }
`;
