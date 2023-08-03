import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient, QueryClientProvider } from 'react-query';
import useApiError from './hooks/useApiError';
import "tailwindcss/tailwind.css";

const RootComponent = () => {
  const { handleError } = useApiError();
  const queryClient = new QueryClient({
    defaultOptions: {
      onError: handleError,
    },
  });

  return (
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
reportWebVitals();
