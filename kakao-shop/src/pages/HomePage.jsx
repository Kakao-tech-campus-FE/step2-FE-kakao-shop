import MainProductTemplate from "../components/templates/MainProductTemplate";
import Carousel from "../components/atoms/Carousel";

/**
 * 쇼핑하기 사이트의 메인 페이지
 *
 * @returns {JSX.Element} - 메인 페이지의 JSX 요소
 */
const HomePage = () => {
  const carouselItems = [
    {
      id: 1,
      src: "carouselItem1.jpeg",
      alt: "메인 배너",
    },
    {
      id: 2,
      src: "carouselItem2.jpeg",
      alt: "메인 배너",
    },
    {
      id: 3,
      src: "carouselItem3.jpeg",
      alt: "메인 배너",
    },
  ];

  return (
    <div className="home-page">
      <section className="main-banner min-w-[1024px]">
        <Carousel items={carouselItems} />
      </section>
      <section className="main-content">
        <MainProductTemplate />
      </section>
    </div>
  );
};

export default HomePage;
