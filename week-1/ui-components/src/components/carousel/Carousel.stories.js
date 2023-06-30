import Carousel from "./Carousel.jsx";

export default {
  title: "Carousel",
  tags: ["autodocs"],
  component: Carousel,
  argTypes: {
    width: { control: "text" },
    time: { control: "number" },
    arrowButton: { control: "boolean" },
    dotButton: { control: "boolean" },
  },
};

export const Default = {
  width: "600px",
  time: 2000,
  arrowButton: true,
  dotButton: true,
};
