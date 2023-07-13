import React from 'react';
import Toast from './UI/toast/Toast';
import Breadcrumb from './UI/breadcrumb/Breadcrumb';
import Carousel from './UI/carousel/Carousel';
import RadioButton from './UI/radio/RadioButton';
import ToggleButton from './UI/toggle/ToggleButton';
import Checklist from './UI/checklist/Checklist';

const assignment1 = () => (
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

export default assignment1;
