import axios from 'axios'


// this is the file where we define our service calls, this is going to be imported into the authslice
// API endpoint, the URL has been set up in package.json as proxy, thus we dont need to include domain
const API_URL = '/api/users'


// register user service
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
}

// login user service
const login = async (userData) => {
    const response = await axios.post(API_URL + '/login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


// logout service
const logout = () => {
    localStorage.removeItem('user')
}


const authService = {
    register,
    logout,
    login,
}

export default authService 