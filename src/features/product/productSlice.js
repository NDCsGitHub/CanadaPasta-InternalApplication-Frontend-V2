import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProductByType } from '../../../../CanadaPasta-InternalApplication-Backend-V2/src/controllers/productController'
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

    } catch (error) {

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
    createdProduct: { data: [] },
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
            .addCase(getProductByType.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })


            // delete product
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

            // edit prduct
            .addCase()


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