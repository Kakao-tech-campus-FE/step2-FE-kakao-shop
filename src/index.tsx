import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import Test from './pages/Test';
import Test2 from './pages/Test2';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/products', element: <Test /> },
  { path: '/products/productDetail', element: <Test2 /> },
]);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
