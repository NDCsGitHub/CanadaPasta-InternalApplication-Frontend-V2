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
const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {

        // check for error message
        const message = (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) || error.message || error.toString()


        // return and save the message in the state
        return thunkAPI.rejectWithValue(message)

    }
})



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
            // logout case
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            // login cases
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
    }
})
const { reset } = authSlice.actions


// export reset and reducer
export {
    authSlice,
    reset,
    logout,
    login,
}

// export reducer to global state store.js
export default authSlice.reducer
