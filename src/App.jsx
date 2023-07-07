import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* 단독 레이아웃 */}
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<RegisterPage />} />
          <Route path='/' element={<MainPage />} />
          {/* 공통 레이아웃 */}
          {/* <Route path="/" element={<HomePage />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
