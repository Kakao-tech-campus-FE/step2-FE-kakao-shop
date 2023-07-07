import { configureStore } from "@reduxjs/toolkit";
import selectedUserReducer from "./selectedUser/slice";

const store = configureStore({
  reducer: {
    selectedUser: selectedUserReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
