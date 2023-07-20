import { styled } from "styled-components";

const StyledLi = styled.li`
  flex: none;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: contain;
`;

const StyledImg = styled.img`
  flex-shrink: 0;
  height: inherit;
`;

const CarouselItem = ({ image }) => {
  return (
    <StyledLi>
      <StyledImg src={image} alt="Carousel Image" />
    </StyledLi>
  );
};

export default CarouselItem;
