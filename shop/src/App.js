import './App.css';
import Breadcrumb from './components/Breadcrumb';
import Carousel from './components/Carousel';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Toast from './components/Toast';
import Toggle from './components/Toggle';


function App() {
  return (
    <div className="App">

      <Breadcrumb />

      <Toggle/>

      <Checkbox/>
      
      <Radio/>
      
      <Toast/>
      
      <Carousel/>

    </div>
  );
}

export default App;
