import React, { useState } from 'react';
import Toast from './components/Toast/Toast';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToastButtonClick = () => {
    setIsVisible(true);
  };

  return (
    <div className='App'>
      {isVisible && <Toast>toast</Toast>}
      <button type='button' onClick={handleToastButtonClick}>
        Toast Button
      </button>
    </div>
  );
};

export default App;
