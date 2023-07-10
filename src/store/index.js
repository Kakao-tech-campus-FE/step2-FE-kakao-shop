import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import registerReducer from "./slice/registerSlice";

const store = configureStore({
        reducer: {
            user: userReducer,
            registerForm: registerReducer
        }
    }
);

export default store;