import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true
            localStorage.setItem('isLoggedIn', true)

        },
        logOutR: (state,action) => {
            state.isLoggedIn = false
            localStorage.setItem('isLoggedIn', false)

        }
    }
})

export const { logIn, logOutR } = authSlice.actions;
export const authReduser = authSlice.reducer;