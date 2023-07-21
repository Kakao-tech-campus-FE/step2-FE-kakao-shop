import { combineReducers } from "redux";
import { loginSlice } from "./loginSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { toastSlice } from "./toastSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  toast: toastSlice.reducer,
});

export default persistReducer(persistConfig, rootReducer);
