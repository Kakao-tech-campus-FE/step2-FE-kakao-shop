import React, { useState } from 'react';


const WantedImg = ["/img/forcarousel/red.png","/img/forcarousel/orange.png","/img/forcarousel/yellow.png","/img/forcarousel/green.png","/img/forcarousel/blue.png"];

const Carousel = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
        <button onClick={prevSlide}>&lt;</button>
        <img src={images[currentIndex]} alt="carousel slide" />
        <button onClick={nextSlide}>&gt;</button>
        </div>
    );
};
  
  export default Carousel;