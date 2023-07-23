import React from 'react';
import GNB from '../components/templates/GNB';
import Carousel from '../components/molecules/Carousel';
import MainProductsTemplate from '../components/templates/MainProductsTemplate';


const Main = () => {


  return (
    <div>
      <GNB />
      <Carousel images={
        [
          '/assets/carouselItem1.jpeg',
          '/assets/carouselItem2.jpeg',
          '/assets/carouselItem3.jpeg',
        ]
      }/>
      <MainProductsTemplate />
    </div>
  );
};

export default Main;