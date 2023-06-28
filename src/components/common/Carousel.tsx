import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface CarouselProps {
  width: number;
  height: number;
  images: string[];
}
interface ViewerProps {
  width: number;
  height: number;
}
interface ContainerProps extends ViewerProps {
  index: number;
}
interface BtnProps extends ViewerProps {
  direction: 'left' | 'right';
}
export default function Carousel({ width, height, images }: CarouselProps) {
  const [curIndex, setCurIndex] = useState(0);
  const movePrev = () => {
    if (curIndex === 0) {
      setCurIndex(images.length - 1);
    } else {
      setCurIndex((prev) => prev - 1);
    }
  };
  const moveNext = () => {
    if (curIndex === images.length - 1) {
      setCurIndex(0);
    } else {
      setCurIndex((prev) => prev + 1);
    }
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      moveNext();
    }, 3000);
    return () => clearTimeout(timerId);
  }, [curIndex]);

  return (
    <Viewer width={width} height={height}>
      <Container width={width} height={height} index={curIndex}>
        {images.map((image, index) => (
          <img key={image + index} src={image} width={width} height={height} alt="캐러셀 이미지" />
        ))}
      </Container>
      <CarouselBtn width={width} height={height} direction="left" onClick={movePrev} />
      <CarouselBtn width={width} height={height} direction="right" onClick={moveNext} />
    </Viewer>
  );
}

const Viewer = styled.div<ViewerProps>`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
const Container = styled.div<ContainerProps>`
  display: flex;
  transform: translateX(${(props) => -(props.width * props.index)}px);
  transition: 0.2s;
`;
const CarouselBtn = styled.button<BtnProps>`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  position: absolute;
  top: ${(props) => props.height / 2 - 15}px;
  ${(props) => (props.direction === 'right' ? 'right: 3%;' : 'left: 3%;')}
  &:after {
    content: ${(props) => (props.direction === 'right' ? "'>' " : "'<'")};
  }
  &:hover {
    color: gray;
  }
`;
