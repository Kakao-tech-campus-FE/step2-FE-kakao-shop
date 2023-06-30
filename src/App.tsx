import React, { useState } from 'react';
import Toast from './components/Toast/Toast';
import RadioGroup from './components/RadioGroup/RadioGroup';
import CheckList from './components/CheckList/CheckList';
import Toggle from './components/Toggle/Toggle';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToastButtonClick = () => {
    setIsVisible(true);
  };

  return (
    <div className='App'>
      {isVisible && <Toast position='bottom-left'>toast</Toast>}
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
