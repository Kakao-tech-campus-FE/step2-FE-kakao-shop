import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";

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
  } catch (err) {}
};

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
  // Non-serialize 부분 해결을 위해 넣음
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  preloadedState: loadStateFromLocalStorage(),
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
