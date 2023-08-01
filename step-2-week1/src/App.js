import React, { useEffect,  useState } from 'react';
// 회원가입 용 import (아래)
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store/store';
import { setUser, clearUser } from './store/slices/userSlice';
import MainLayout from "./layouts/MainLayout";
import GNB from './component/atoms/GNB';
import ProductGrid from './component/organisms/ProductGrid';
import ProductDetailPage from './pages/ProductDetailPage';
import CartList from './component/molecules/CartList';
import OrderPage from '../src/pages/OrderPage';
import RequiredAuthLayout from './layouts/RequiredAuthLayout';
import "../src/App.css";
import CartPage from './pages/CartPage';

function App() {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  // 새로 고침 시 사용자 정보 유지
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const currentTime = new Date().getTime();
      const expirationTime = user.expirationTime;

      if (currentTime < expirationTime) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
          {/* 단독 레이아웃 */}
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>   
            {/* 공통 레이아웃 GNB, Footer */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />}>isLoggedIn={isLoggedIn}</Route>
              <Route path="/" element={<ProductGrid />}></Route>
              <Route path="/product/:id" element={<ProductDetailPage />}></Route>
              {/* 사용자가 로그인됐을 때만 접근 가능한 부분 */}
              <Route element ={<RequiredAuthLayout />}>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/order" element={<OrderPage />}></Route>
              </Route>
              
    
        </Route>
      </Routes>
    </BrowserRouter>
    </div>    

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

