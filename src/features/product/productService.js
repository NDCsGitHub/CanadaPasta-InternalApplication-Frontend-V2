import axios from 'axios'


// define service call, import to productSlice

const API_URL = '/api/products'


// get all products
const getAllProducts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}


// create a Product
const createProduct = async (productData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const reponse = await axios.post(API_URL, productData, config)
    return reponse.data.data
}





const productService = {
    getAllProducts,
    createProduct,
}

export default productService