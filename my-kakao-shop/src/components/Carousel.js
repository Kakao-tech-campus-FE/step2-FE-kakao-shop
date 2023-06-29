import {useState} from "react";

const Carousel = ({images}) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section className="carousel">
            <button className={"carousel-button carousel-button-left"} onClick={prevSlide}>&lt;</button>
            <div className="carousel-images">
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            className={index === current ? "carousel-image carousel-image-active" : "carousel-image"}
                            src={image}
                            alt="carousel"
                        />
                    );
                })}
            </div>
            <button className={"carousel-button carousel-button-right"} onClick={nextSlide}>&gt;</button>
        </section>
    )
}

export default Carousel;