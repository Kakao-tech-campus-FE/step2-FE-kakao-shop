import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// const reducers = combineReducers({
//   user: userReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
