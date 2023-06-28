import Carousel from "@/components/common/Carousel/Carousel";

const CarouselPage = () => {
  return (
    <Carousel
      carouselItems={Array.from({ length: 4 }).map((_, index) => {
        return {
          src: `https://fakeimg.pl/1920x1080?text=${index + 1}&font=noto`,
          alt: "placeholder",
        };
      })}
    />
  );
};

export default CarouselPage;
