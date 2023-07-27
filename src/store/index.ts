import { configureStore } from "@reduxjs/toolkit";
import signSlice from "@/store/signSlice";

const store = configureStore({
  reducer: { signSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
