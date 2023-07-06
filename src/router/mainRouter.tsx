import { useRoutes } from 'react-router-dom';
import React from 'react';
import LoginPage from '@pages/LoginPage';
import ComponentTest from '@pages/ComponentTest';
import RegisterPage from '@pages/RegisterPage';

const mainRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <ComponentTest />,
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
