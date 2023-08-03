// import React, { useState } from 'react';
// import './Carousel.css';

// function Carousel({ images }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1,
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1,
//     );
//   };

//   return (
//     <div className="carousel">
//       <button onClick={handlePrevious}>이전 상품</button>
//       <img src={images[currentIndex]} alt="carousel" />
//       <button onClick={handleNext}>다음 상품</button>
//     </div>
//   );
// }

// export default Carousel;
