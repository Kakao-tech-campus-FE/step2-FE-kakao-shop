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
    <div className="demo-page">
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>
      <hr />
      <div className="demo-category-title">
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
