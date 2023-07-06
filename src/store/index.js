import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import userReducer from "./userSlice";
import {persistReducer} from "redux-persist";

const reducer = () => combineReducers({
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
        reducer: persistedReducer,
    }
);

export default store;