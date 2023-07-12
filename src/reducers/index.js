import { combineReducers } from "redux";
import { loginSlice } from "./loginSlice";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  login: loginSlice.reducer,
});

export default persistReducer(persistConfig, rootReducer);
