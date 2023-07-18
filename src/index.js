
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Loader from './components/atoms/Loader';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </QueryClientProvider>

    </Provider>

  </React.StrictMode >

);

