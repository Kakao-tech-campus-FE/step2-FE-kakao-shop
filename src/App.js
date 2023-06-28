import React, { useState } from 'react';
import Toast from './components/Toast';
import Slider from './components/Slider';
import Radio from './components/Radio';

function App() {
  const [toast, setToast] = useState(false);
  const [carousel, setCarousel] = useState(false);
  const [radio, setRadio] = useState(false);

  const handleToastClick = () => {
    setToast(true);
  };

  const handleCarouselClick = () => {
    setCarousel(!carousel);
    setRadio(false);
  }

  const handleRadioClick = () => {
    setRadio(!radio);
    setCarousel(false);
  }

  return (
    <div>
      <ul>
        <li onClick={handleToastClick}>
          toast
          {toast && (
            <Toast
              setToast={setToast}
              text="카카오 테크 캠퍼스 과제1 UI 컴포넌트 Toast"
            />
          )}
        </li>
        <li>breadCrumbs</li>
        <li onClick={handleCarouselClick}>carousel</li>
        <li onClick={handleRadioClick}>radioButton</li>
        <li>toggleButton</li>
        <li>checkList</li>
      </ul>
      {carousel && (<Slider />)}
      {radio && (<Radio />)}
    </div>
  );
}

export default App;
