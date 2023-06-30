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
      <p>토스트</p>
      {isToastVisible && (
        <Toast position='bottom-left' isVisible={isToastVisible} setIsVisible={setIsToastVisible}>
          toast
        </Toast>
      )}
      <button type='button' onClick={handleToastButtonClick}>
        Toast Button
      </button>

      <p>라디오버튼</p>
      <RadioGroup />

      <p>체크리스트</p>
      <CheckList />

      <p>토글버튼</p>
      <Toggle />

      <p>브래드크럼</p>
      <Breadcrumb />

      <p>캐러셀</p>
      <Carousel />
    </div>
  );
};

export default App;
