import { combineReducers } from "redux";
import { loginSlice } from "./loginSlice";

const rootReducer = combineReducers({
  login: loginSlice.reducer,
});

export default rootReducer;
