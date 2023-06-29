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
      <div style={{ fontSize: '2rem', padding: 30 }}>
        <Toggle
          // Accordion에 넘겨줄 props
          title="카카오테크캠퍼스 2단계 과제 2 - Toggle"
          content="박유정"
        />
      </div>
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
