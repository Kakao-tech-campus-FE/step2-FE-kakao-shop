import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BreadcrumbDemo from './components/breadcrumbDemo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/breadcrumb',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb" />,
  },
  {
    path: '/breadcrumb/blog',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/blog" />,
  },
  {
    path: '/breadcrumb/blog/post',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/blog/post" />,
  },
  {
    path: '/breadcrumb/blog/post/1',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/blog/post/1" />,
  },
  {
    path: '/breadcrumb/blog/post/2',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/blog/post/2" />,
  },
  {
    path: '/breadcrumb/blog/post/3',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/blog/post/3" />,
  },
  {
    path: '/breadcrumb/resume',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/resume" />,
  },
  {
    path: '/breadcrumb/resume/first',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/resume/first" />,
  },
  {
    path: '/breadcrumb/resume/second',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/resume/second" />,
  },
  {
    path: '/breadcrumb/resume/third',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/resume/third" />,
  },
  {
    path: '/breadcrumb/contact',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/contact" />,
  },
  {
    path: '/breadcrumb/contact/email',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/contact/email" />,
  },
  {
    path: '/breadcrumb/contact/phone',
    element: <BreadcrumbDemo currentDirectory="/breadcrumb/contact/phone" />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
