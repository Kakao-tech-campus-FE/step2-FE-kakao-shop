import { useState } from 'react';
import './App.css';
import Toast from './components/Toast';
import TopButton from './components/TopButton';

function App() {
  const [toast, setToast] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    setToast(true);
  }

  return (
    <>
      <button onClick={handleClick}>버튼</button>
      {toast && <Toast text="Hello, World" color="red" setToast={setToast}/>}
      <TopButton />
    </>
  );
}

export default App;
