import { styled, css } from "styled-components";

const StyledButton = styled.button`
  z-index: 2;
  display: block;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;
  position: absolute;
  top: 125px;
  ${(props) =>
    props.$align === "left" &&
    css`
      left: 100px;
    `}
  ${(props) =>
    props.$align === "right" &&
    css`
      right: 100px;
    `}
  font-size: 22px;
  text-align: center;
  color: #eee;
  border: 1px solid rgba(255, 255, 255, 0.23);
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.04);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const CarouselButton = ({ direction, children, onClick }) => {
  return (
    <StyledButton $align={direction} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CarouselButton;
