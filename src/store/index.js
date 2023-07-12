import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import productReducer from "./slice/productSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
        reducer: {
            user: persistedReducer,
            product: productReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
    }
);

const persistor = persistStore(store);

export {store, persistor};