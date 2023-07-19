import { useRoutes } from 'react-router-dom';
import React from 'react';
import LoginPage from '@pages/LoginPage';
import Home from '@pages/Home';
import RegisterPage from '@pages/RegisterPage';
import MainLayout from '@components/templates/MainLayout';
import PageContainer from '@components/atoms/PageContainer';
import ProductListPage from '@pages/ProductListPage';
import ProductDetailPage from '@pages/ProductDetailPage';

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
          ],
        },
      ],
    },
  ]);

export default mainRouter;
