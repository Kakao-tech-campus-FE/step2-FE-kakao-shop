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
import { staticUrl } from './utils/convert';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={staticUrl('/')} element={<MainPage />} />
          <Route path={staticUrl('/product/:id')} element={<ProductDetailPage />} />
          <Route path={staticUrl('*')} element={<NotFoundPage />} />
        </Route>
        <Route element={<SubLayout />}>
          <Route path={staticUrl('/cart')} element={<CartPage />} />
          <Route path={staticUrl('/order')} element={<OrderPage />} />
          <Route path={staticUrl('/orders/complete/:id')} element={<OrderCompletePage />} />
        </Route>
        <Route path={staticUrl('/register')} element={<RegisterPage />} />
        <Route path={staticUrl('/login')} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
