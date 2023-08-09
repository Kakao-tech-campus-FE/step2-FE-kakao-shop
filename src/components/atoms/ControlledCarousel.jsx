import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const staticServerUrl = process.env.REACT_APP_PATH || '';
function ControlledCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mb-10">
      <Slider {...settings} className="p">
        <div>
          <img src={`${staticServerUrl}/carouselItem1.jpeg`} alt="" />
        </div>
        <div>
          <img src={`${staticServerUrl}/carouselItem2.jpeg`} alt="" />
        </div>
        <div>
          <img src={`${staticServerUrl}/carouselItem3.jpeg`} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default ControlledCarousel;
