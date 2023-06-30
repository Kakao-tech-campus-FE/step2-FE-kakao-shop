import React from 'react';
import ToastDemo from './components/toastDemo';
import ToastProvider from './components/toast';
import Breadcrumb from './components/breadcrumb';
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
      <Breadcrumb />
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
