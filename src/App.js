import { Reset } from 'styled-reset'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage"
import "./App.css";
import MainLayout from './layouts/MainLayout';
import MainProductPage from './components/pages/MainProductPage'



function App() {
  return (
    <>
      <Reset />
      <BrowserRouter> 
        <Routes>
          {/* {단독 레이아웃} */}
          <Route path="/login" element={<LoginPage/>}></Route>    
          <Route path="/signup" element={<RegisterPage/>}></Route> 
          
          {/* 공통 레이아웃 */}
          <Route element={<MainLayout/>}>
            <Route path="/" element={<MainProductPage/>}></Route>   
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;


