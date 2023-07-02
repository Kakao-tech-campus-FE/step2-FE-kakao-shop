import './styles/App.css';
import Radio from './components/Radio';
import Checklist from './components/Checklist';
import Toggle from './components/Toggle';
import Breadcrumbs from './components/Breadcrumbs';
import Toast from './components/Toast';
import Carousel from './components/Carousel';
//import { createContext, useState, useRef } from 'react';

function App() {
  return (
    <div className="App">
      <Breadcrumbs/>
      <Carousel />
      <Toggle />
      <Toast />
      <Radio />
      <Checklist />
    </div>
  );
}

export default App;
