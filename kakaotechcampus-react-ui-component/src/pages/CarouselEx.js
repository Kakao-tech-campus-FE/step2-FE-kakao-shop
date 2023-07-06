import React from 'react';
import '../styles/CarouselEx.css';
import Carousel from "../components/Carousel";

const CarouselEx = () => {
    const images = [
        'https://www.apple.com/v/home/bb/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_large.jpg',
        'https://www.apple.com/v/home/bb/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg',
        'https://www.apple.com/v/home/bb/images/heroes/iphone-14/hero_iphone14_yellow__eun20sn4imi6_large.jpg',
    ];

    return (
        <div>
            <h2>캐러셀</h2>
            <Carousel images={images} />
            <p>min-width: 1000px 입니다.</p>
            <p>1. MacBook Air 15</p>
            <p>2. iPhone 14 Pro</p>
            <p>3. iPhone 14</p>
        </div>
    );
};

export default CarouselEx;
