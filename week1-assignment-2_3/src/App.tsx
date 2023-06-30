import React from 'react';
import ToastDemo from './components/toastDemo';
import ToastProvider from './components/toast';
import RadioButton from './components/radioButton';
import ToggleButton from './components/toggleButton';
import Checklist from './components/checklist';
import CarouselDemo from './components/carouselDemo';
import './styles/app.css';

function App() {
  return (
    <div style={{ height: '3000px' }}>
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>
      <hr />
      <div style={{
        fontWeight: '700',
        fontSize: '2rem',
        margin: '2rem 1rem',
      }}
      >
        <a href="/breadcrumb">Breadcrumb</a>
      </div>
      <hr />
      <CarouselDemo />
      <hr />
      <RadioButton />
      <hr />
      <ToggleButton />
      <hr />
      <Checklist />
    </div>
  );
}

export default App;
