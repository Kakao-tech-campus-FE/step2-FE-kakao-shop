import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./modules";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
