import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './authService'


// get user from local storage
const user = JSON.parse(localStorage.getItem('user'))


// define initial state
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Register User, export to use it in other components




// Login user, export to use it in other components




// logout user
const logout = createAsyncThunk('auth/logout', async () => {
    authService.logout()
})




// create auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
    }
})
const { reset } = authSlice.actions




