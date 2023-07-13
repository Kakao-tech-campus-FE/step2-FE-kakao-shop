import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumbs from './components/breadcrumb.jsx';
import ToastComponent from './components/toast.jsx';
import CarouselComponent from './components/carousel.jsx';
import ToggleButton from './components/toggle.jsx';
import RadioButtons from './components/radio.jsx';
import Checkbox from './components/check.jsx';

function App() {
  return (
    <div className="App">
      <Breadcrumbs />
      <ToastComponent />
      <CarouselComponent />
      <ToggleButton />
      <RadioButtons />
      <Checkbox />
    </div>
  );
}

export default App;