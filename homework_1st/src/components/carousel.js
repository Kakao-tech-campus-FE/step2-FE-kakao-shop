import React, { useState } from 'react';
import '../styles/carousel.css'

const Carousel = () => {
    const [slideNumb, setSlideNumb] = useState(0);

    const handleNextSlide = () => {
        setSlideNumb((prevNumb) => prevNumb + 1);
    };

    const handlePrevSlide = () => {
        setSlideNumb((prevNumb) => prevNumb - 1);
    };

    const handleSlideClick = (slideIndex) => {
        setSlideNumb(slideIndex);
    };

    return (
        <div className="carousel">
            <div className="slide-container" style={{ transform: `translateX(-${slideNumb * 100}vw)` }}>
                <div className="slide-box">
                    <img src={process.env.PUBLIC_URL + '/images/car1.png'} alt="Car 1" />
                </div>
                <div className="slide-box">
                    <img src={process.env.PUBLIC_URL + '/images/car2.png'} alt="Car 2" />

                </div>
                <div className="slide-box">
                    <img src={process.env.PUBLIC_URL + '/images/car3.png'} alt="Car 3" />

                </div>
            </div>
            <button className="slide-prev" onClick={handlePrevSlide}>이전</button>
            <button className="slide-1" onClick={() => handleSlideClick(0)}>1</button>
            <button className="slide-2" onClick={() => handleSlideClick(1)}>2</button>
            <button className="slide-3" onClick={() => handleSlideClick(2)}>3</button>
            <button className="slide-next" onClick={handleNextSlide}>다음</button>
        </div>
    );
};

export default Carousel;
