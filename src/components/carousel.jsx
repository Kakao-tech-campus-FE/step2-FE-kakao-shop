import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/carousel.css';

const CarouselComponent = () => {
  const items = [
    {
      src: './images/image1.jpg',
      altText: '짱구1',
    },
    {
      src: './images/image2.jpg',
      altText: '짱구2',
    },
    {
      src: './images/image3.jpg',
      altText: '짱구3',
    }
  ];

  return (
    <div className="CarouselContainer">
      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
        {items.map((item, index) => (
          <div key={index} className="CarouselItem">
            <img src={item.src} alt={item.altText} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
