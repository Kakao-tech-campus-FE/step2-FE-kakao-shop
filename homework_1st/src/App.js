import logo from './logo.svg';
import './App.css';
import Toast from './components/toast';
import Toggle from './components/toggle';
import Breadcrumb from './components/breadcrumb'
import Radio from './components/radio'
import Checklist from './components/checklist'
import Carousel from './components/carousel'


function App() {
  return (
    <div className='App'>
      <Toast />
      <Toggle />
      <Breadcrumb />
      <Radio />
      <Checklist />
      <Carousel />
    </div>
  );
}

export default App;
