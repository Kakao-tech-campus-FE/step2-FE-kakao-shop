import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const timerRef = useRef(null);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const previousImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            nextImage();
        }, 3000);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        startTimer();
    };

    useEffect(() => {
        startTimer();

        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    return (
        <div className="carousel">
            <button className="carousel-button left" onClick={() => { previousImage(); resetTimer(); }}>
                &lt;
            </button>
            <div className="carousel-image-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={index === currentImage ? 'carousel-image active' : 'carousel-image'}
                    />
                ))}
            </div>
            <button className="carousel-button right" onClick={() => { nextImage(); resetTimer(); }}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
