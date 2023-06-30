import React from 'react';
import BreadCrumb from './component/BreadCrumb';
import Carousel from './component/Carousel';
import ToggleButton from './component/ToggleButton';
import RadioButton from './component/RadioButton';
import CheckList from './component/CheckList';
import Toast from './component/Toast';

function App() {
  const items = ['dish', 'dinner', 'menu'];
  const slides = [
    'img/dish1.jpg',
    'img/dish2.jpg',
    'img/dish3.jpg',
  ];

  return (
    <div>
      <h1>1주차 과제</h1>
      <h4> 저녁메뉴 고르기 (브래드크럼) </h4>
      <BreadCrumb items={items} separator=" > " />
      <div>
        <h4> 메뉴 후보 (캐러셀) </h4>
        <Carousel slides={slides} />
      </div>
      <div>
      <h4> 음료를 골라주세요 (라디오버튼) </h4>
        <RadioButton />
      </div>
      <div>
      <h4> 수저 젓가락 선택 (토글버튼) </h4>
        <ToggleButton />
      </div>
      <div>
      <h4> 내일의 메뉴 후보 추가하기 (체크리스트) </h4>
        <CheckList />
      </div>
      <div>
      <h4> 마무리 (토스트) </h4>
        <Toast message="맛있는 저녁 드세요" time={3000}/>
      </div>
    </div>
  );
};

export default App;