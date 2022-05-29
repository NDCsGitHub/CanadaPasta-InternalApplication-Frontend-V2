import React, { useContext, useState } from 'react'
import axios from 'axios'


const ProductListContext = React.createContext();

const useProductListContext = () => {
    return useContext(ProductListContext)
}




const ProductListContextProvider = ({ children }) => {

    const [productList, setProductList] = useState()

    return (
        <ProductListContext.Provider
            value={{

            }}
        >
            {children}
        </ProductListContext.Provider>
    )

}

export { ProductListContextProvider, useProductListContext }