import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { GlobalErrorBoundary } from '@components/@common/GlobalErrorBondary';

import App from './App';
import { store } from './store';
import globalStyle from './styles/globalStyle';

if (process.env.REACT_APP_TEST_ENV === 'true') {
  const { worker } = require('./mocks/browser');

  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <GlobalErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalErrorBoundary>
  </React.StrictMode>,
);
