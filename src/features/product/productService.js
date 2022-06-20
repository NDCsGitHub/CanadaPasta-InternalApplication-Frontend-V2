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


const productService = {
    getAllProducts,

}

export default productService