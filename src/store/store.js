import { configureStore } from "@reduxjs/toolkit";

import userReducer from "store/slices/userSlice.js";

const savedLogInState = localStorage.getItem("userState");
const preloadedState = savedLogInState
  ? { user: JSON.parse(savedLogInState) }
  : {};

localStorage.removeItem("userState");

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState,
});

window.addEventListener("beforeunload", () => {
  const userState = store.getState().user;
  if (Object.values(userState).every((val) => val !== null))
    localStorage.setItem("userState", JSON.stringify(userState));
});
