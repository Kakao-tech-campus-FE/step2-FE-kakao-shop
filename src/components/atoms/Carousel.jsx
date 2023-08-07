import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: "0px", // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 2000,
    initialSlide: 1, // 첫 컨텐츠 번호
    pauseOnFocus: true, // focus시 정지
    pauseOnHover: true, // hover시 정지
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/carouselItem1.jpeg" alt="carouselItem1" />
        </div>
        <div>
          <img src="/carouselItem2.jpeg" alt="carouselItem2" />
        </div>
        <div>
          <img src="/carouselItem3.jpeg" alt="carouselItem3" />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
