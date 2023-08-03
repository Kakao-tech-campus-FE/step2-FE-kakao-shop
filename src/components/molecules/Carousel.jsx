import { useState, useEffect, useRef } from 'react';

const Carousel = ({images}) => {
  const currentIndex = useRef(0);
  // eslint-disable-next-line 
  const [render, renderSet] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const carouselStyle = {
    width:"100%",
    height:"100%",
    overflow: "hidden",
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % images.length;
      renderSet((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);


  const transformStyle = {
    display:"flex",
    width: `${screenWidth * images.length}px`,
    transform: `translate3d(-${screenWidth * currentIndex.current}px, 0, 0)`,
    transition: "transform 2s ease"
  };

  return (
    <>
    <div className="carousel" style={carouselStyle}>
      <div className="slide-container" style={transformStyle}>
        {images.map((image, index) => (
          <img
            src={image}
            alt={`${index}th pic is missing`}
            key={index}
            style={{
              width: `${screenWidth}px`,
              height: `${screenWidth * 0.2}px`,
            }}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Carousel;