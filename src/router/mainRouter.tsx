import { useRoutes } from 'react-router-dom';
import React from 'react';
import LoginPage from '@pages/LoginPage';
import Home from '@pages/Home';
import RegisterPage from '@pages/RegisterPage';

const mainRouter = () =>
  useRoutes([
    {
      path: '/',
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
  ]);

export default mainRouter;
