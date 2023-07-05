import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from '../src/pages/RegisterPage';
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';
// import Breadcrumb from './components/Breadcrumb';
// import Carousel from './components/Carousel';
// import Checkbox from './components/Checkbox';
// import Radio from './components/Radio';
// import Toast from './components/Toast';
// import Toggle from './components/Toggle';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 단독 레이아웃 */}
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<RegisterPage/>}></Route>
          {/* 공콩 레이아웃 */}
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Breadcrumb />
      <Toggle/>
      <Checkbox/>
      <Radio/>
      <Toast/>
      <Carousel/> */}


    </div>
  );
}

export default App;
