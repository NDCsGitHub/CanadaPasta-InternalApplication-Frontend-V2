import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'


const ProductListContext = React.createContext();

const useProductListContext = () => {
    return useContext(ProductListContext)
}




const ProductListContextProvider = ({ children }) => {

    // all product list 
    const [productList, setProductList] = useState()
    // loading 
    const [loading, setLoading] = useState()



    // fetch all product
    const fetchAllProduct = async () => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.user.api_key

        try {
            const respProducts = await axios.get('http://localhost/v1/index.php/fetch_all_products',
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })

            setLoading(false)
            setProductList(respProducts.data.data)
            console.log(respProducts.data.data)

        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        fetchAllProduct()
    }, [])

    useEffect(() => {
        console.log(productList)
    }, [productList])

    return (
        <ProductListContext.Provider
            value={{
                productList,
                loading,
            }}
        >
            {children}
        </ProductListContext.Provider>
    )

}

export { ProductListContextProvider, useProductListContext }