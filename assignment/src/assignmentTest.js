import React from 'react';
import Toast from './toast/Toast.js';
import Breadcrumb from './breadcrumb/Breadcrumb.js';
import Carousel from './carousel/Carousel.js';
import RadioButton from './radio/RadioButton.js';
import ToggleButton from './toggle/ToggleButton.js';
import Checklist from './checklist/Checklist.js';

const App = () => {
  return (
    <div>
      <Toast message="안녕하세요!" duration={3000} />
      <Breadcrumb />
      <Carousel images={['image1.jpg', 'image2.jpg', 'image3.jpg']} />
      <RadioButton options={['옵션 1', '옵션 2', '옵션 3']} />
      <Checklist items={['토퍼', '소파', '고기']} />
      <h3>할인여부</h3>
      <ToggleButton />
    </div>
  );
};

export default App;