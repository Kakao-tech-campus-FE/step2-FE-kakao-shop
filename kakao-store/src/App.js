import './styles/App.css';
import { useState } from "react";

import ToggleButton from './components/togglebutton/ToggleButton';
import Checklist from './components/checklist/Checklist';
import RadioButton from './components/radiobutton/RadioButton';
import Carousel from './components/carousel/Carousel';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Toast from './components/toast/Toast';

import imgfile1 from './images/image1.png';
import imgfile2 from './images/image2.png';
import imgfile3 from './images/image3.png';

function App() {
  const [activeLabel, setActiveLabel] = useState('toggle');

  const handleLabelClick = (label) => {
    setActiveLabel(label);
  };

  /* Toggle Button
  1. ToggleButton 컴포넌트에 label과 onToggle prop을 전달
  */
  const ToggleButtonSection = () => {
    const handleToggle = (isToggled) => {
      console.log('Toggle State:', isToggled);
    };

    return (
      <div>
        <h1>Toggle Button</h1>
        <ToggleButton label="왕왕토글!" onToggle={handleToggle} />
      </div>
    );
  };

  /* Checklist
  1. Checklist 컴포넌트에 items prop으로 배열을 전달
  */
  const ChecklistSection = () => {
    const handleChecklistChange = (checkedItems) => {
      console.log('Checked Items:', checkedItems);
    };

    return (
      <div>
        <h1>Checklist</h1>
        <Checklist
          items={['Item 1', 'Item 2', 'Item 3']}
          onChange={handleChecklistChange}
        />
      </div>
    );
  };

  /* Radio Button
  1. radioOptions 배열에 value와 label을 가진 객체를 저장
  2. RadioButton 컴포넌트에 options prop으로 radioOptions 배열을 전달
  */
  const RadioButtonSection = () => {
    const radioOptions = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    const handleOptionChange = (option) => {
      console.log('Selected Option:', option);
    };

    return (
      <div>
        <h1>RadioButton</h1>
        <RadioButton options={radioOptions} onChange={handleOptionChange} />
      </div>
    );
  };

  /* Carousel
  1.carouselImages 배열에 이미지 파일 경로를 저장
  2. Carousel 컴포넌트에 images prop으로 carouselImages 배열을 전달
  */
  const CarouselSection = () => {
    const carouselImages = [
      imgfile1,
      imgfile2,
      imgfile3,
    ];

    return (
      <div>
        <h1>Carousel</h1>
        <Carousel images={carouselImages} />
      </div>
    );
  };


  /* Breadcrumbs
  1. 나열할 label과 id를 가진 배열 breadcrumbPaths을 생성
  2. map()은 각 요소를 순휘하여 각 요소에 콜백 함수를 실행하고 새 배열을 생성
  3. 각 경로 요소는 span 태그로 key 속성에는 경로의id값 적용
  4. activeLabel 값이 breadcrumb.id와 일치하는 경우 active 클래스가 추가되어 해당 경로가 활성화된 상태로 스타일링
  5. onClick 이벤트 핸들러는 사용자가 경로를 클릭할 때 실행. handleLabelClick 함수를 호출하며, 현재 클릭된 경로의 id를 인자로 전달'
  */
  const BreadcrumbsSection = () => {
    const breadcrumbPaths = [
      { label: 'Toggle Button', id: 'toggle' },
      { label: 'Checklist', id: 'checklist' },
      { label: 'Radio', id: 'radio' },
      { label: 'Carousel', id: 'carousel' },
      { label: 'Toast', id: 'toast' },
    ];

    return (
      <div className="breadcrumbs">
        {breadcrumbPaths.map((breadcrumb) => (
          <span
            key={breadcrumb.id}
            className={activeLabel === breadcrumb.id ? 'active' : ''}
            onClick={() => handleLabelClick(breadcrumb.id)}
          >
            {breadcrumb.label}
          </span>
        ))}
      </div>
    );
  };

  /*
  Toast Section
  1. 버튼을 누를때마다 handleButtonClick함수가 실행되며 showToast를 true로 변경
  2. 동시에 Toast 컴포넌트에 message와 동작 시간과 인자로 보낼 함수를 같이 보냄
  3. 지정된 시간이 지나면 showToast를 flase로 하여 Toast작동을 중지
  */
  const ToastSection = () => {
    const [showToast, setShowToast] = useState(false);

    const handleButtonClick = () => {
      setShowToast(true);
    };

    const handleCloseToast = () => {
      setShowToast(false);
    };

    return (
      <div>
        <h1>Toast</h1>
        <button onClick={handleButtonClick}>Show Toast</button>
        {showToast && (
          <Toast message="뿅!" duration={30000} onClose={handleCloseToast} />
        )}
      </div>
    );
  };
  /* 
  1. BreadcrumbsSection 컴포넌트를 App 컴포넌트에 추가
  2. activeLabel 상태값을 추가하고, 기본값은 toggle로 설정
  3. handleLabelClick 함수를 생성하고, 인자로 전달된 label을 activeLabel 상태값으로 설정
  4. activeLabel 상태값에 따라 렌더링할 컴포넌트를 조건부 렌더링으로 구현
  */
  return (
    <div className='App'>
      <BreadcrumbsSection />

      {activeLabel === 'toggle' && <ToggleButtonSection />}
      {activeLabel === 'checklist' && <ChecklistSection />}
      {activeLabel === 'radio' && <RadioButtonSection />}
      {activeLabel === 'carousel' && <CarouselSection />}
      {activeLabel === 'toast' && <ToastSection />}
    </div>
  );
}

export default App;
