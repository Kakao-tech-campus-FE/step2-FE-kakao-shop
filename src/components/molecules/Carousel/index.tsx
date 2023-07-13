import { useState, useEffect } from "react";
import { styled } from "styled-components";
import marvel from "@assets/images/viewers-marvel.png";

interface SideProps {
  position: string;
}
interface IndexProps {
  curindex: number;
}

const Carousel = () => {
  const images = [marvel, marvel, marvel, marvel, marvel];
  const [curIndex, setCurIndex] = useState(0);

  const prev = () => {
    setCurIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const next = () => {
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
      <ImageContainer curindex={curIndex}>
        {images.map((image, index) => (
          <img src={image} key={image + index} alt={image} />
        ))}
      </ImageContainer>
      <Side position={"left"}>
        <button onClick={prev} type="button">
          &lt;
        </button>
      </Side>
      <Side position={"right"}>
        <button onClick={next} type="button">
          &gt;
        </button>
      </Side>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 700px;
  height: 400px;
  background-color: skyblue;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ImageContainer = styled.div<IndexProps>`
  display: flex;
  width: 100%;
  height: 100%;

  transform: translateX(-${({ curindex }) => curindex * 100}%);
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
