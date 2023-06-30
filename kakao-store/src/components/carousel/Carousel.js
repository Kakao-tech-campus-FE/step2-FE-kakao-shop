import React, { useState } from 'react';
import './Carousel.css'; 

/*
1. Carousel 컴포넌트는 전달받은 images 배열을 map()으로 순회하여 각 이미지 파일 경로를 img 태그의 src 속성에 적용
2. Carousel 컴포넌트는 현재 이미지의 인덱스를 나타내는 currentIndex 상태값을 가짐
3. Prev 버튼을 클릭하면 handlePrev 함수가 실행되며, currentIndex 상태값이 0이면 images 배열의 마지막 인덱스로 변경, 그렇지 않으면 -1
4. Next 버튼을 클릭하면 handleNext 함수가 실행되며, currentIndex 상태값이 images 배열의 마지막 인덱스이면 0으로 변경, 그렇지 않으면 +1
5. img 태그의 className 속성에는 currentIndex 상태값과 현재 순회하고 있는 인덱스가 일치하는 경우 active 클래스가 추가되어 해당 이미지가 활성화된 상태로 스타일링
*/
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handlePrev}>
        Prev
      </button>

      <div className="carousel-content">
        {images.map((image, index) => (
          <img
            key={index}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            src={image}
            alt={`Carousel Image ${index}`}
          />
        ))}
      </div>

      <button className="carousel-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
  
};

export default Carousel;
