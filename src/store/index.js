import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        // User reducer : email
        // products reducer: product
        user: userReducer
    }
});

export default store;