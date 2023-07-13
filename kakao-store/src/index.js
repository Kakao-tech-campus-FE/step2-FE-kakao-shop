import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import {PersistGate} from "redux-persist/integration/react"
import { persistStore } from 'redux-persist';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
const queryClient = new QueryClient();

function preprocessResponse(response) {
  // Preprocessing logic goes here...
  return response;
}

function alertError(error) {
  alert(error.response.data.error.message);
}

function useApiQuery(queryKey, fetchData) {
  return useQuery(queryKey, fetchData, {
    onError: (error) => {
      if (error.response?.status === 401) {
        alertError(error)
      } else if (error.response?.status === 500) {
        alertError(error)
      } else if (error.response?.status >= 400 && error.response?.status < 500) {
        alertError(error)
      } else {
        // Handle other errors
        // Add your error handling logic here...
      }
    },
    onSuccess: (data) => {
      // Preprocess the API response
      const processedData = preprocessResponse(data);
      console.log("onSuccess")
      return ;
    },
  });
}

//200, 500, 401, 3XX, 2XX, 4XX 

function AppWrapper() {
  // Example usage of the custom useApiQuery hook
  const { isLoading, error, data } = useApiQuery('product', () =>
    fetch(process.env.REACT_APP_API_URL).then((response) => response.json())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <App data={data} />;
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <AppWrapper />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

{/* <PersistGate loading={null} persistor={persistor}>
          <AppWrapper />
        </PersistGate> */}