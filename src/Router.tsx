import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import NotFoundPage from './pages/NotFoundPage';
import SubLayout from './layouts/SubLayout';
import OrderCompletePage from './pages/OrderCompletePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route element={<SubLayout />}>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/orders/complete/:id' element={<OrderCompletePage />} />
        </Route>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
