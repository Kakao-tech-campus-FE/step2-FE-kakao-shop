import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';
import globalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
