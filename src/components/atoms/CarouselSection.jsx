import { Carousel } from "flowbite-react";

const customTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    base: "h-2 w-2 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    snap: "snap-x",
  },
};

const CarouselSection = () => {
  return (
    <div className="product-section flex mx-auto mt-[79px] min-w-[1280px] max-w-[1500px] h-[300px] z-0">
      <Carousel theme={customTheme}>
        <img
          alt="carousel-img-1"
          src={`${process.env.PUBLIC_URL}/carousel1.jpeg`}
        />
        <img
          alt="carousel-img-2"
          src={`${process.env.PUBLIC_URL}/carousel2.jpeg`}
        />
        <img
          alt="carousel-img-3"
          src={`${process.env.PUBLIC_URL}/carousel3.jpeg`}
        />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
