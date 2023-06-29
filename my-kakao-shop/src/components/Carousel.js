import {useState} from "react";
import CarouselSlide from "./CarouselSlide";

const SLIDE_STATE = {
    PREV_INDEX: -1,
    CURRENT_INDEX: 0,
    NEXT_INDEX: 1,
    HIDE_INDEX: 2,
}
const Carousel = ({images}) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const slideState = (index) => {
        if (index === current) {
            return SLIDE_STATE.CURRENT_INDEX;
        } else if (index === current - 1 || (current === 0 && index === length - 1)) {
            return SLIDE_STATE.PREV_INDEX
        } else if (index === current + 1 || (current === length - 1 && index === 0)) {
            return SLIDE_STATE.NEXT_INDEX
        } else {
            return SLIDE_STATE.HIDE_INDEX
        }
    }

    return (
        <section className="carousel">
            <button className={"carousel-button carousel-button-left"} onClick={prevSlide}>&lt;</button>
            <div className="carousel-images">
                {images.map((image, index) => {
                    return (
                        <CarouselSlide key={index} image={image} slideState={slideState(index)}/>
                    );
                })}
            </div>
            <button className={"carousel-button carousel-button-right"} onClick={nextSlide}>&gt;</button>
        </section>
    )
}

export default Carousel;
export {SLIDE_STATE};