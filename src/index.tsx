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
import { staticUrl } from './utils/convert';

const token = localStorage.getItem('token');
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.timeout = 1000;
axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;

// eslint-disable-next-line import/prefer-default-export
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
  queryCache: new QueryCache({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const statusCode = error.response?.status;
        if (!statusCode) console.error('알 수 없는 에러가 발생했습니다.');
        else if (statusCode >= 300 && statusCode < 400) {
          alert('리다이렉션 에러가 발생했습니다.');
          window.location.href = staticUrl('/');
        } else if (statusCode >= 400 && statusCode < 500) {
          if (statusCode === 401) {
            alert('로그인이 필요합니다.');
            window.location.href = staticUrl('/login');
          } else {
            alert('클라이언트 에러가 발생했습니다.');
          }
          window.location.href = staticUrl('/');
        } else if (statusCode >= 500) {
          alert('서버 에러가 발생했습니다.');
          window.location.href = staticUrl('/');
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
