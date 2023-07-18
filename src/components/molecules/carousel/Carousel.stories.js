import Carousel from "./Carousel.jsx";
import carouselItem1 from "@/assets/carouselItem1.jpeg";
import carouselItem2 from "@/assets/carouselItem2.jpeg";
import carouselItem3 from "@/assets/carouselItem3.jpeg";

const SLIDE_EXAMPLE = [
  {
    src: carouselItem1,
    alt: "오뚜기 인기라면 특가",
  },
  {
    src: carouselItem2,
    alt: "LG전자 연말 결산 세일",
  },
  {
    src: carouselItem3,
    alt: "주방/생활가전 특가",
  },
];

export default {
  title: "organisms/Carousel",
  tags: ["autodocs"],
  component: Carousel,
  argTypes: {
    width: { control: "text" },
    time: { control: "number" },
    arrowButton: { control: "boolean" },
    dotButton: { control: "boolean" },
    slideArray: { control: "array" },
  },
};

export const Default = {
  width: "600px",
  time: 2000,
  arrowButton: true,
  dotButton: true,
  slideArray: [...SLIDE_EXAMPLE],
};
