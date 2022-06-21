import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customerService from './customerService'















// define inital states
const initialState = {
    allCustomer: { data: [] },
    createCustomer: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create customer slice 
const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            // create customer
            .addCase()
        // 
    }
})