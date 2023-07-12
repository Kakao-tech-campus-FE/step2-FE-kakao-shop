import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './store';
=======
>>>>>>> 7bf19b80f574afd860fc4c6967796b480b45ec0a

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
      <Provider store={store}>
        <App />
      </Provider>
=======
    <App />
>>>>>>> 7bf19b80f574afd860fc4c6967796b480b45ec0a
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
