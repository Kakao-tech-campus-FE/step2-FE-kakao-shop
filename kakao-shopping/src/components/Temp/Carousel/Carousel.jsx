import React from "react";
import "./Carousel.css";

export const Slide = (props) => {
    return <div className="slide" {...props}></div>;
};

export const Carousel = ({ children, style }) => {
    const [slide, setSlide] = React.useState(0);
    const [slideAnimation, setSlideAnimation] = React.useState("");
    const slideArr = React.Children.map(children, (child, i) => {
        if (child.type.name === "Slide") {
            return <Slide {...child.props}></Slide>;
        }
    });

    let child_count = 0;
    React.Children.forEach(children, (child) => {
        if (child.type.name === "Slide") {
            child_count += 1;
        }
    });

    const getSlideNum = (n) => {
        if (n < 0) return (n + child_count) % child_count;
        else return n % child_count;
    };

    const handleSlide = (dir) => {
        setSlide((prev) => getSlideNum(prev + dir));
        console.log(slide);
    };

    return (
        <div className={`carousel`} style={style}>
            <div className={`carousel-area ${slideAnimation}`}>
                {slideArr[getSlideNum(slide - 1)]}
                {slideArr[getSlideNum(slide)]}
                {slideArr[getSlideNum(slide + 1)]}
            </div>
            <button
                className="material-symbols-outlined carousel-left"
                onClick={() => {
                    handleSlide(-1);
                    setSlideAnimation("slide-left");
                }}
            >
                arrow_back_ios
            </button>
            <button
                className="material-symbols-outlined carousel-right"
                onClick={() => {
                    handleSlide(1);
                    setSlideAnimation("slide-right");
                }}
            >
                arrow_forward_ios
            </button>
        </div>
    );
};

export default { Slide, Carousel };
