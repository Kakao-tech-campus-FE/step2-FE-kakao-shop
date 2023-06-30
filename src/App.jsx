import './App.css';
import Breadcrumb from './components/Breadcrumb';
import Carousel from './components/Carousel';
import Checklist from './components/Checkbox';
import RadioBtn from './components/RadioBtn';
import Toast from './components/Toast';
import ToggleBtn from './components/ToggleBtn';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <>
      <Breadcrumb />
      <div style={{ border: '1px solid #ededed', margin: '2rem' }}></div>
      <Carousel />
      <div style={{ border: '1px solid #ededed', margin: '2rem' }}></div>
      <Checklist />
      <div style={{ border: '1px solid #ededed', margin: '2rem' }}></div>
      <RadioBtn />
      <div style={{ border: '1px solid #ededed', margin: '2rem' }}></div>
      <Toast />
      <div style={{ border: '1px solid #ededed', margin: '2rem' }}></div>
      <ToggleBtn />
    </>
  );
}

export default App;
