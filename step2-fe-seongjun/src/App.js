import React, { useState, useEffect } from 'react';
import './App.css';
import Toggle from "./components/toggle";
import Radio from "./components/radio";
import Toast from "./components/toast";
import Breadcrumbs from "./components/breadcrumbs";
import Carousel from './components/carousel';
import Todo from './components/todo';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type';

const msgList = { // toast massage
  luck: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는..."
};

function Home() {
  return <h1>Home</h1>;
}

function Title() {
  return <h1>Week1_KangSeongjun</h1>;
}

function Product() {
  return <h1>Product 1</h1>;
}

function App() {
  const [theme, setTheme] = useState('');
  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const [itemInput, setItemInput] = useState('');
  const [error, setError] = useState(false);
  const [items, setItems] = useState([
    { id: 1, text: '데일리 학습일지 작성하기' },
    { id: 2, text: '모각코 챌린지' },
    { id: 3, text: '수요일 특강!!' },
  ]);

  const handleRadio = (e) => { 
    setTheme(e.target.value);
  };
  
  const handleToast = (type) => { // toast pop-up
    if (!toast) {
      setToast(true);
      setToastMsg(msgList[type]);
    }
  };


  useEffect(()=> { // toast useEffect 사라지기
    if (toast) {
      setTimeout(() => {
        setToast(false);
        setToastMsg("");
      }, 3000);
    }
  }, [toast]);

  const addItem = (e) => {
    e.preventDefault();

    if (!itemInput) {
      setError(true);
      return;
    }

    setItems([...items, { id: Math.random(), text: itemInput }]);
    setItemInput('');
    setError(false);
  };

  const removeItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  return (
    <Router>
      <div className="App">
        <Breadcrumbs />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products"  element={<Title/>}/>
            <Route exact path="/products/1" element={<Product/>}/>
        </Routes>
        <h1>Week1_KangSeongjun</h1>
        {/* toggle */}
        <div className='toggle-container'>
          <p>#Did you do h/w?</p><Toggle/>  
        </div>
        {/* radio */}
        <div className='radio-container'>
          <p>#select a theme</p>
          <Radio
            name="theme"
            id="dark"
            value="dark"
            text="dark"
            onChange={handleRadio}
            checked={theme==='dark'}
          />
          <Radio
            name="theme"
            id="light"
            value="light"
            text="light"
            onChange={handleRadio}
            checked={theme==='light'}
          />
        </div>
        {/* toast */}
        <div className='toast-container'>
          <p>#행운을 잡으세요! toast!</p>
          <button className='toast-button' onClick={()=> handleToast("luck")}>click to get luck!</button>
          <Toast msg={toastMsg} show={toast}/>
        </div>
        {/* carousel */}
        <div className='carousel-container'>
          <p>#Carousel!</p>
          <Carousel />
        </div>
        {/* checklist */}
        <div className="checklist-container">
          <p>#오늘 할일!!</p>
          <form className="check-form" onSubmit={addItem}>
            <input
              type="text"
              className='check-input'
              value={itemInput}
              onChange={e => setItemInput(e.target.value)}
              placeholder="할 일 추가"
            />
            <button type="submit" className="check-submit">ADD</button>
          </form>
          <ul className="list-group">
            {items.map(item => (
              <Todo
                key={item.id}
                id={item.id}
                text={item.text}
                onRemove={removeItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
