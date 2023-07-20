import { styled } from "styled-components";
import CarouselList from "../molecules/CarouselList";

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #eee;
  border-bottom: 1px solid #bbb;
  position: relative;
  top: 80px;
`;

const CAROUSEL_IMAGES = [
  "../../../assets/carouselItem1.jpeg",
  "../../../assets/carouselItem2.jpeg",
  "../../../assets/carouselItem3.jpeg",
];

const Carousel = () => {
  return (
    <Container>
      <CarouselList images={CAROUSEL_IMAGES} />
    </Container>
  );
};

export default Carousel;
