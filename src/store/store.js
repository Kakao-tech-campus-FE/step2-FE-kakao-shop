import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const savedLogInState = localStorage.getItem("logInState");
const preloadedState = savedLogInState
  ? { user: JSON.parse(savedLogInState) }
  : {};
localStorage.removeItem("logInState");

export const store = configureStore({
  reducer: {
    user: userReducer, // email용
  },
  preloadedState,
});

window.addEventListener("beforeunload", () => {
  const logInState = store.getState().user;
  localStorage.setItem("logInState", JSON.stringify(logInState));
});
