import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';

// Redux 관련 참조
import { Provider } from 'react-redux';
import store from "./store/index.js";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
//최상위 컴포넌트인 App을 Provider로 감싸고 store 지정
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();