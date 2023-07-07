import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "@reduxjs/toolkit";

let loginState = "false";

function reducer(state = loginState, action) {
  if (action.type === "changeState") {
    return !state;
  }
  return state;
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default store;
