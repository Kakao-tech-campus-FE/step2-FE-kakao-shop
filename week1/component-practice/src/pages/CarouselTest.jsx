import Carousel from "../components/Carousel";

export default function CarouselTest() {
  const slides = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg",
      alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_640.jpg",
      alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg",
      alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <Carousel slides={slides} time={2000} />
    </>
  );
}
