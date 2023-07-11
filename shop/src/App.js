import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from '../src/pages/RegisterPage';
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';
import MainLayout from './layouts/MainLayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 단독 레이아웃 */}
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<RegisterPage/>}></Route>
          {/* 공통 레이아웃 :GNB, Footer*/}
          <Route element={<MainLayout/>}>
            <Route path='/' element={<HomePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
