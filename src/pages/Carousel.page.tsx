import Carousel from "@components/Carousel/Carousel.component";

const CarouselPage = () => {
  return (
    <div style={{ width: "1920px", height: "1080px" }}>
      <Carousel
        carouselItems={Array.from({ length: 4 }).map((_, index) => {
          return {
            src: `https://fakeimg.pl/1920x1080?text=${index + 1}&font=noto`,
            alt: "placeholder",
          };
        })}
      />
    </div>
  );
};

export default CarouselPage;
