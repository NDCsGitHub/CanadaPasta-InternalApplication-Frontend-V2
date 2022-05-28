import React, { useContext, useState } from 'react'
import axios from 'axios'



const NewProductContext = React.createContext();

const useNewProductContext = () => {
    return useContext(NewProductContext)
}



const NewProductContextProvider = ({ children }) => {

    // state for storing input data
    const [newProductInfo, setNewProductInfo] = useState({
        product_name_en: '',
        product_name_cn: '',
        price: '',
        product_type: '',
        description_en: '',
        description_cn: '',
        comment: '',
    })

    // save input values to input state
    const handleProductInfo = (e) => {
        const inputValue = e.target.value
        const inputName = e.target.name

        setNewProductInfo({
            ...newProductInfo,
            [inputName]: inputValue
        })
    }

    const handleSubmitProduct = async () => {

        const params = new URLSearchParams();
        params.append('product_name_en', newProductInfo.product_name_en)
        params.append('product_name_cn', newProductInfo.product_name_cn)
        params.append('price', newProductInfo.price)
        params.append('product_type', newProductInfo.product_type)
        params.append('description_en', newProductInfo.description_en)
        params.append('description_cn', newProductInfo.description_cn)
        params.append('comment', newProductInfo.comment)

        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.user.api_key
        try {
            const resp = await axios.post('http://localhost/v1/index.php/insert_new_product', params,
                {
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*',
                    }
                })

            console.log(resp.data)
            if (resp.data.error === true) {
                alert(resp.data.message)
            } else if (resp.data.error === false) {
                alert('Thank You! New product added')
            } else {
                alert('Operation Failed, please try again')
            }

        } catch (error) {
            alert(error.response.data.message)
        }
    }




    return (
        <NewProductContext.Provider
            value={{
                newProductInfo,
                setNewProductInfo,
                handleProductInfo,
                handleSubmitProduct,
            }}
        >
            {children}
        </NewProductContext.Provider>
    )
}

export { NewProductContextProvider, useNewProductContext }