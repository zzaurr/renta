import { configureStore } from "@reduxjs/toolkit";
import { authReduser } from "./slices/auth";
import { postReducer } from "./slices/posts";

const reducer = {
    auth: authReduser,
    posts: postReducer,
}

const store = configureStore({
    reducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store