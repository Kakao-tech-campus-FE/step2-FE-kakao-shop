import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("userInfo");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem("userInfo", JSON.stringify(state));
    console.log("state save success");
  } catch (err) {
    console.log("state save error: ", err);
  }
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [],
  preloadedState: loadStateFromLocalStorage(),
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
