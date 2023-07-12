import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

import { persistReducer } from 'redux-persist';

export const store = configureStore({
  reducer: {
    // User reducer: email
    user: userReducer,
    // Products reducer: products
    // products: productsReducer,
  }
});


// const reducers = combineReducers({
//   user: userSlice,
// });

// const persistConfig = {
//   key: "root",
//   version: 1,
//   // storage: storage,
//   whitelist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [PERSIST, PURGE],
//       },
//     }).concat(logger),
// });

export default store;

