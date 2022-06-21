import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'




// get all products
const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
    try {
        // get token from global state
        const token = thunkAPI.getState().auth.user.data.token
        console.log(token)

    } catch (error) {

    }
})


// get all product base on product type
const getAllProductByType = createAsyncThunk('products/getAllByType', async (type, thunkAPI) => {
    try {

    } catch (error) {

    }
})



// create new product
const createProduct = createAsyncThunk('products/create', async (productData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.data.token
        return await productService.createProduct(productData, token)

    } catch (error) {
        // check for error the message
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

        // return and save the message in the state, so later we can useSelector to show error in register component
        return thunkAPI.rejectWithValue(message)
    }
})



// const delete product
const deleteProduct = createAsyncThunk('product/delete', async (id, thunkAPI) => {
    try {

    } catch (error) {

    }
})




// define initial state
const initialState = {
    allProducts: { data: [] },
    productsByType: { data: [] },
    createdProduct: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// create product slice
const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            // get all product
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.allProducts = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })


            // get product by type
            .addCase(getAllProductByType.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProductByType.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.productsByType = action.payload
            })
            .addCase(getAllProductByType.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })


            // create product
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.createdProduct = action.payload
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

        // // edit prduct
        // .addCase()


    }
})
const { reset } = productsSlice.actions

// export functions
export {
    productsSlice,
    reset,
    getAllProducts,
    getAllProductByType,
    createProduct,
    deleteProduct
}

// default export reducer to global state store.js
export default productsSlice.reducer
