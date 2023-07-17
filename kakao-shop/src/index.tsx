import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '@components/ErrorBoundary';

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
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
