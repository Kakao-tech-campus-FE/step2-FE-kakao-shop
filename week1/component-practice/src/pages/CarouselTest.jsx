import Carousel from "../components/Carousel";

export default function CarouselTest() {
  const slides = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg",
      alt: "Astronomy, Bright, Beautiful wallpaper image.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_640.jpg",
      alt: "Beach, Sea, Free wallpaper image.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg",
      alt: "Forest, Trees, Mac wallpaper image.",
    },
  ];
  return (
    <>
      <Carousel slides={slides} time={2000} />
      <p style={{ fontSize: "0.7rem" }}>
        사진은 pixabay의 무료 배경화면을 사용했습니다.
      </p>
    </>
  );
}
