import { styled } from "styled-components";

export const CarouselWindow = styled.div`
  overflow: hidden;
  position: relative;
  width: 800px;
  margin: 10px;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transform: translateX(${(props) => (props.index - 1) * -800}px);
  img {
    flex-shrink: 0;
    width: 800px;
    height: 400px;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  z-index: 1;
  width: 55px;
  height: 55px;
  border: 0.5px solid white;
  border-radius: 55px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 30px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  &:first-child {
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
  }
  &:last-child {
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
  }
`;
