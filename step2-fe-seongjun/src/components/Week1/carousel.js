import React, { useState } from 'react';
import "../style/carousel.css";

const Carousel = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (e) => {
    const value = e.target.getAttribute('data-value');
    if (value !== null) {
      setSelected(Number(value));
    }
  };

  const style =
    selected >= 1
      ? { transform: `translateX(-${selected * 300}px)` }
      : {};

  const renderIndicator = [];
  for (let i = 0; i < 3; i++) {
    renderIndicator.push(
      <li
        data-value={i}
        key={i}
        className={selected === i ? 'active' : ''}
      ></li>
    );
  }

  return (
    <div className="slider">
      <div className="slide-items" style={style}>
        <div className="item">Slide 1</div>
        <div className="item">Slide 2</div>
        <div className="item">Slide 3</div>
      </div>
      <ul onClick={handleClick} className="indicators">
        {renderIndicator}
      </ul>
    </div>
  );
};

export default Carousel;