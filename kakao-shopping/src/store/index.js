import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import userReducer from "./userSlice";
import productReducer from "./productSlice";
import detailReducer from "./detailSlice";

const reducers = combineReducers({
    user: userReducer,
    product: productReducer,
    detail: detailReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;
