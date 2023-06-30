import React, { useState } from 'react';
import Toast from './components/Toast/Toast';
import RadioGroup from './components/RadioGroup/RadioGroup';

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
    </div>
  );
};

export default App;
