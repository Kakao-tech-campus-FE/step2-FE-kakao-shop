import { configureStore } from "@reduxjs/toolkit";
import signSlice from "@/store/signSlice";
import productSlice from "@/store/productSlice";

const store = configureStore({
  reducer: { signSlice, productSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
