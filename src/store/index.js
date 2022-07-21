import { configureStore } from "@reduxjs/toolkit";
import { authReduser } from "./slices/auth";
import { postReducer } from "./slices/posts";

const reducer = {
    auth: authReduser,
    posts: postReducer,
}

export const store = configureStore({
    reducer,
})