import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from 'axios';

import './tailwind.css';
import Router from './Router';
import store from './store';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.timeout = 1000;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
);
