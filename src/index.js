// react
import React from "react";
import ReactDOM from "react-dom/client";
// redux
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// css
import "./index.css";

// components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
