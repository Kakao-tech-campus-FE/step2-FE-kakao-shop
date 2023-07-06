import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import './tailwind.css';
import Router from './Router';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
