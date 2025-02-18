import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    name: string
    surname: string
    email: string
}

const AUTH = 'user'
const storedUser = localStorage.getItem(AUTH)
const initialState = {
    auth: storedUser ? (JSON.parse(storedUser) as User) : null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<User>) {
            state.auth = action.payload
            localStorage.setItem(AUTH, JSON.stringify(state.auth))
        },
        logoutUser(state) {
            state.auth = null
            localStorage.removeItem(AUTH)
        },
    },
})

export const { loginUser, logoutUser } = authSlice.actions
export const authReducer = authSlice.reducer
