import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios, { AxiosError } from 'axios';

import './tailwind.css';
import Router from './Router';
import { store, persistor } from './store';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.timeout = 1000;

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const statusCode = error.response?.status;
        if (!statusCode) console.error('알 수 없는 에러가 발생했습니다.');
        else if (statusCode >= 300 && statusCode < 400) {
          console.error('리다이렉션 에러가 발생했습니다.');
        } else if (statusCode >= 400 && statusCode < 500) {
          console.error('클라이언트 에러가 발생했습니다.');
        } else if (statusCode >= 500) {
          console.error('서버 에러가 발생했습니다.');
        }
      }
    },
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
