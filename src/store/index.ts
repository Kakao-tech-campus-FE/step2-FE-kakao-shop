import { configureStore } from "@reduxjs/toolkit";
import signSlice from "@/store/signSlice";
import productSlice from "@/store/productSlice";

const store = configureStore({
  reducer: { signSlice, productSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
