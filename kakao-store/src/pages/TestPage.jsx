import { createContext, useState } from 'react';
import Toast from './components/Toast';
import TopButton from './components/TopButton';
import ToggleButton from './components/ToggleButton';
import RadioButtonList from './components/RadioButtonList';
import RadioButton from './components/RadioButton';
import { Breadcrumb, BreadcrumbPortal } from './components/Breadcrumb';
import Carousel from './components/Carousel';
import CheckList from './components/CheckList';

const COLOR_LIST = {
  false: 'red',
  true: 'green'
};

export const RadioContent = createContext({});

function TestPage() {
  const [toast, setToast] = useState(false);
  const [radio, setRadio] = useState("Hello");
  const [toggle, setToggle] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setToast(true);
  }

  return (
    <>
      <header>
        <BreadcrumbPortal />
      </header>
      <Breadcrumb to="/one">url1</Breadcrumb>
      <Breadcrumb to="/two">url2</Breadcrumb>
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
      <ToggleButton getToggle={setToggle}/>
      <button onClick={handleClick}>버튼</button>
      {toast && <Toast text={radio} color={COLOR_LIST[toggle]} setToast={setToast}/>}
      <TopButton />
    </>
  );
}

export default TestPage;
