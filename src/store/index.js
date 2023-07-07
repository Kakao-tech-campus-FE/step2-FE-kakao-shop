import { applyMiddleware , configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";


const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
  
  devTools: true, // Redux DevTools 활성화
});

export default store;
