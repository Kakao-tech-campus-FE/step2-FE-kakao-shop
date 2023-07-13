import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import HomePage from './pages/Homepage'
import NewHomePage from './pages/NewHomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          {/* 공통 레이아웃 : GNB , Footer */}
          {/* <Route path ="/" element = {<HomePage/>}></Route> */}
          <Route path="/" element={<NewHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
