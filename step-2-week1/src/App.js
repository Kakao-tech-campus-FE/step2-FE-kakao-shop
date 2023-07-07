import React, { useEffect,  useState } from 'react';
// 회원가입 용 import (아래)
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {

  return (
  <Provider store={store}>
    
    <BrowserRouter>
      {/* 단독 레이아웃 */}
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>   
        {/* 공통 레이아웃 */}
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
    
    </Provider>

  );
};


export default App;
// 캐러셀 등 필요하면 밑에꺼 주석 풀기
// export {
//   Toast,
//   Breadcrumb,
//   Carousel,
//   RadioButton,
//   ToggleButton,
//   Checklist,
//   App1
// };

