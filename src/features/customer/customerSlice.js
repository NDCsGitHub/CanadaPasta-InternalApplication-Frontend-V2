import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customerService from './customerService'




// create customer
const createCustomer = createAsyncThunk('customer/create', async (customerData, thunkAPI) => {
    try {
        // get Token 
        const token = thunkAPI.getState().auth.user.data.token

        return await customerService.createCustomer(customerData, token)
    } catch (error) {

    }
})









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
const { reset } = customerSlice.reducer

// export
export {
    customerSlice,
    reset,

}
