import { configureStore } from "@reduxjs/toolkit";
import signSlice from "@/store/signSlice";

const store = configureStore({
  reducer: { signSlice: signSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
