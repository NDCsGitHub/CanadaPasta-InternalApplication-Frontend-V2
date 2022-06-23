import axios from 'axios'

// this is the file where we define our service calls, this is going to be imported into the authslice
// API endpoint
const API_URL = '/api/customers'


// get all customers
const getAllCustomer = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

// create Customer
const createCustomer = async (customerData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, customerData, config)
    return response.data.data
}


// delete Customer
const deleteCustomer = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + `?id=${id}`, config)
    return response.data.data
}


const customerService = {
    getAllCustomer,
    createCustomer,
    deleteCustomer,
}

export default customerService