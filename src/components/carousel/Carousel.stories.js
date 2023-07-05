import Carousel from "./Carousel.jsx";
import carouselItem1 from "../../assets/carouselItem1.jpeg";
import carouselItem2 from "../../assets/carouselItem2.jpeg";
import carouselItem3 from "../../assets/carouselItem3.jpeg";

const SLIDE_EXAMPLE = [
  {
    src: carouselItem1,
  },
  {
    src: carouselItem2,
  },
  {
    src: carouselItem3,
  },
];

export default {
  title: "Carousel",
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
