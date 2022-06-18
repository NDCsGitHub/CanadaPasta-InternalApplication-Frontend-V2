import { creatSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'



// get all products
const getAllPRoducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
    try {
        // get token from global state
        const token = thunkAPI.getState().auth.user.data.token
        console.log(token)

    } catch (error) {

    }
})