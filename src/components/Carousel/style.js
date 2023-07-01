import { styled } from "styled-components";

export const CarouselWindow = styled.div`
  position: relative;
  margin: 10px;
  width: 800px;
  overflow: hidden;
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
  z-index: 1;
  color: white;
  font-size: 30px;
  border: 0.5px solid white;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  width: 55px;
  height: 55px;
  border-radius: 55px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  &:first-child {
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:last-child {
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
