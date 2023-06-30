import React, { useState } from 'react';
import Toast from './components/Toast/Toast';
import RadioGroup from './components/RadioGroup/RadioGroup';
import CheckList from './components/CheckList/CheckList';
import Toggle from './components/Toggle/Toggle';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleToastButtonClick = () => {
    setIsToastVisible(true);
  };

  return (
    <div className='App'>
      {isToastVisible && (
        <Toast position='bottom-left' isVisible={isToastVisible} setIsVisible={setIsToastVisible}>
          toast
        </Toast>
      )}
      <button type='button' onClick={handleToastButtonClick}>
        Toast Button
      </button>
      <RadioGroup />
      <CheckList />
      <Toggle />
      <Breadcrumb />
      <Carousel />
    </div>
  );
};

export default App;
