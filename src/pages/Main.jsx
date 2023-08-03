import React from 'react';
import GNB from '../components/templates/GNB';
import Carousel from '../components/molecules/Carousel';
import MainProductsTemplate from '../components/templates/MainProductsTemplate';

const staticServerUrl = process.env.REACT_APP_PATH || "";

const Main = () => {


  return (
    <div>
      <GNB />
      <Carousel images={
        [
          staticServerUrl + '/assets/carouselItem1.jpeg',
          staticServerUrl + '/assets/carouselItem2.jpeg',
          staticServerUrl + '/assets/carouselItem3.jpeg',
        ]
      }/>
      <div className='flex justify-center'>
        <MainProductsTemplate />
      </div>
    </div>
  );
};

export default Main;