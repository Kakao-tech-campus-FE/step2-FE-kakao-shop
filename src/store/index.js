import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import productReducer from "./slice/productSlice";
import detailReducer from "./slice/detailSlice";
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
            product: productReducer,
            productDetail: detailReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
    }
);

const persistor = persistStore(store);

export {store, persistor};