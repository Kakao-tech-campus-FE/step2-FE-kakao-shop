import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import useThrottling from '../../hooks/useThrottling';

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
  transition: number;
}
interface BtnProps extends ViewerProps {
  direction: 'left' | 'right';
}
export default function Carousel({ width, height, images }: CarouselProps) {
  const carouselImages = useMemo(() => [images[images.length - 1], ...images, images[0]], [images]);
  const [curIndex, setCurIndex] = useState(1);
  const [transition, setTransition] = useState(300);

  const movePrev = () => {
    setTransition(300);
    setCurIndex((prev) => prev - 1);
    if (curIndex <= 1) {
      setTimeout(() => {
        setTransition(0);
        setCurIndex(carouselImages.length - 2);
      }, 300);
    }
  };
  const moveNext = () => {
    setTransition(300);
    setCurIndex((prev) => prev + 1);
    if (curIndex >= carouselImages.length - 2) {
      setTimeout(() => {
        setTransition(0);
        setCurIndex(1);
      }, 300);
    }
  };

  const prev = useThrottling(movePrev, 300);
  const next = useThrottling(moveNext, 300);
  useEffect(() => {
    const timerId = setTimeout(() => {
      next();
    }, 3000);
    return () => clearTimeout(timerId);
  }, [curIndex]);

  return (
    <Viewer width={width} height={height}>
      <Container transition={transition} className="isLast" width={width} height={height} index={curIndex}>
        {carouselImages.map((image, index) => (
          <img key={image + index} src={image} width={width} height={height} alt="캐러셀 이미지" />
        ))}
      </Container>
      <CarouselBtn width={width} height={height} direction="left" onClick={prev} />
      <CarouselBtn width={width} height={height} direction="right" onClick={next} />
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
  transition: ${(props) => props.transition}ms;
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
