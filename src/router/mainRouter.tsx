import { useRoutes } from 'react-router-dom';
import React from 'react';
import LoginPage from '@components/pages/LoginPage';
import Home from '@components/pages/Home';
import RegisterPage from '@components/pages/RegisterPage';
import MainLayout from '@components/layout/MainLayout';
import PageContainer from '@components/atoms/PageContainer';
import ProductListPage from '@components/pages/ProductListPage';
import ProductDetailPage from '@components/pages/ProductDetailPage';
import CartPage from '@components/pages/CartPage';
import PNFPage from '@components/pages/PNFPage';

const mainRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <PageContainer />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'login',
              element: <LoginPage />,
            },
            {
              path: 'register',
              element: <RegisterPage />,
            },
            {
              path: 'product',
              children: [
                {
                  index: true,
                  element: <ProductListPage />,
                },
                {
                  path: ':id',
                  element: <ProductDetailPage />,
                },
              ],
            },
            {
              path: 'cart',
              element: <CartPage />,
            },
            {
              path: '*',
              element: <PNFPage />,
            },
          ],
        },
      ],
    },
  ]);

export default mainRouter;
