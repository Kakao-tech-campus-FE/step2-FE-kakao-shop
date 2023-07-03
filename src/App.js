
import './App.css';

import Breadcrumb from './components/Breadcrumb';
import Carousel from './components/Carousel';
import Checklist from './components/Checklist';
import Radio from './components/Radio';
import Toast from './components/Toast';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <h1>과제 2,3 정답</h1>

      <Toast />
      <Breadcrumb />
      <Carousel />
      <Radio />
      <Toggle />
      <Checklist />

    </div>
  );
}

export default App;
