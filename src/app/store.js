import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import authReducer from "../slices/authSlice";
import postReducer from "../slices/postSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        posts: postReducer
    }
});