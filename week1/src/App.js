import React from 'react';
import Toggle from './components/Toggle';
import CheckList from './components/CheckList';
import RadioBtn from './components/RadioBtn';
import Carousel from './components/Carousel';
import Toast from './components/Toast';
import Breadcrumb from './components/Breadcrumb';

function App() {
  const paths = ['Home', 'Products', 'Shoes', 'Running Shoes'];
  return (
    <>
      <Breadcrumb paths={paths} />
      <Toggle />
      <Toast message="토스트메시지!" />
      <Carousel />
      <div style={{ padding: 30, fontSize: '20px' }}>
        <CheckList />
      </div>
      <div style={{ padding: 30, fontSize: '20px' }}>
        <RadioBtn />
      </div>
    </>
  );
}

export default App;
