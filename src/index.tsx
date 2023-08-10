import { Global } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { GlobalErrorBoundary } from '@components/@common/GlobalErrorBondary';

import App from './App';
import { store } from './store';
import globalStyle from './styles/globalStyle';

if (process.env.REACT_APP_ENV === 'dev_mock') {
  const { worker } = require('./mocks/browser');

  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <Global styles={globalStyle} />
    <GlobalErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalErrorBoundary>
  </>,
);
