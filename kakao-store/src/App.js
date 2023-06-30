import { createContext, useState } from 'react';
import './App.css';
import Toast from './components/Toast';
import TopButton from './components/TopButton';
import ToggleButton from './components/ToggleButton';
import RadioButtonList from './components/RadioButtonList';
import RadioButton from './components/RadioButton';
import { Breadcrumb, BreadcrumbPortal } from './components/Breadcrumb';
import Carousel from './components/Carousel';
import CheckList from './components/CheckList';

const COLOR_LIST = ['green', 'red'];

export const RadioContent = createContext({});

function App() {
  const [toast, setToast] = useState(false);
  const [radio, setRadio] = useState("Hello");
  let colorState = false;

  const handleClick = (e) => {
    e.preventDefault();
    setToast(true);
  }

  const getToggle = (toggle) => {
    colorState = toggle;
  }

  return (
    <>
      <header>
        <BreadcrumbPortal />
      </header>
      <Breadcrumb to="/one">One</Breadcrumb>
      <Breadcrumb to="/two">Two</Breadcrumb>
      <Carousel></Carousel>
      <CheckList></CheckList>
      <RadioButtonList label="메세지" value={radio} onChange={setRadio}>
        <RadioButton value="Hello" defaultChecked>
          Hello
        </RadioButton>
        <RadioButton value="World">
          World
        </RadioButton>
      </RadioButtonList>
      <ToggleButton getToggle={getToggle}/>
      <button onClick={handleClick}>버튼</button>
      {toast && <Toast text={radio} color={COLOR_LIST[colorState]} setToast={setToast}/>}
      <TopButton />
    </>
  );
}

export default App;
