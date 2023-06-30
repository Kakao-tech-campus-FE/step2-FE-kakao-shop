import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Toaster from './components/Toaster'
import RadioButton from './components/RadioButton'
import CheckBox from './components/CheckBox'
import Carousel from './components/Carousel';
import Toggle from './components/Toggle';
import ComponentTest from './pages/ComponentTest';
import HomePage from './pages/Main';
import BreadTest from './pages/BreadTest';
const images = [
  'red',
  'black',
  'beige',
  'orange',
  'lightblue'
];
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ComponentTest" element={<ComponentTest />} />
        <Route path="/Toaster" element={<Toaster />} />
        <Route path="/RadioButton" element={<RadioButton />} />
        <Route path="/Carousel" element={<Carousel images={images} />} />
        <Route path="/CheckBox" element={<CheckBox />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Route path="/ComponentTest/Bread" element={<BreadTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
