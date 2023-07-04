import { useRoutes } from 'react-router-dom';
import React from 'react';
import LoginPage from '@pages/LoginPage';
import ComponentTest from '@pages/ComponentTest';

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
  ]);

export default mainRouter;
