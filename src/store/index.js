import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../store/slices/userSlice";
import cartReducer from "../store/slices/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
    cart: persistedCartReducer,
    // detail: detailReducer,
    // products: productsReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

export { store, persistor };
