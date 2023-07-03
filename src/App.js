import React from 'react';
import Toast from './components/Toast';
import Breadcrumb from './components/Breadcrumb';
import Carousel from './components/Carousel';
import RadioButton from './components/RadioButton';
import ToggleButton from './components/ToggleButton';
import Checklist from './components/Checklist';

const App = () => {
  const images = [
    'https://i.ibb.co/zry6D96/carousel-Item1.jpg',
    'https://i.ibb.co/chBQWjj/carousel-Item2.jpg',
    'https://i.ibb.co/kDPkZWz/carousel-Item3.jpg',
  ];
  
  return (
    <div className="App">
      <Toast message="This is Toast message!" />
      <Breadcrumb paths={['Home>', 'Shop>', 'Detail']} />
      <Carousel images={images} />
      <RadioButton />
      <ToggleButton />
      <Checklist options={['Check 1', 'Check 2', 'Check 3']} />
    </div>
  );
};

export default App;
