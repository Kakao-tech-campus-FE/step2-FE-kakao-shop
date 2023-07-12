import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../store/slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);
const store = configureStore({
  reducer: {
    // User reducer: email
    // Products reducer: products
    login: persistedReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

export { store, persistor };
