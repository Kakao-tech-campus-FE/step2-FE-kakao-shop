import { useEffect, useRef, useState } from 'react';
import './carousel.css';

const Carousel = ({ data }) => {
    const totalImageCount = data.img.length - 1;
    const [currentIdx, setCurrentIdx] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentIdx === totalImageCount) {
            setCurrentIdx(0);
        } else {
            setCurrentIdx((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIdx === 0) {
            setCurrentIdx(totalImageCount);
        } else {
            setCurrentIdx((prev) => prev - 1);
        }
    };

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transition = `all 0.5s ease-in-out`;
            slideRef.current.style.transform = `translateX(-${currentIdx * 312}px)`; // currentIdx에 해당하는 이미지 위치로 이동!
        }
    }, [currentIdx]);

    return (
        <div className="Carousel">
            <div className="ImageBox" ref={slideRef}>
                {data.img.map((e, idx) => (
                    <div className="ImageList" key={idx}>
                        <img src={e} />
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button onClick={prevSlide}>◀︎</button>
                <button onClick={nextSlide}>▶︎</button>
            </div>
        </div>
    );
};

export default Carousel;
