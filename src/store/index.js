import { createStore } from "@reduxjs/toolkit";

let loginState = false;

function reducer(state = loginState, action) {
  if (action.type === "changeState") {
    return !state;
  } else {
    return state;
  }
}

const store = createStore(reducer);

export default store;
