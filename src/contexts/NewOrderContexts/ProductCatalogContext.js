import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { tableSortLabelClasses } from '@mui/material'




const ProductCatalogContext = React.createContext()
const useProductCatalogContext = () =>{
  return useContext(ProductCatalogContext)
}



const ProductCatalogContextProvider =({children}) => {

  /***********************PRODUCT CARD START**************************/

  // tab selector
  const [tabValue, setTabValue] = useState(0)
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }


  // productType 
  const [productType, setProductType] = useState('')
  useEffect(() => {
    if(tabValue === 0){
      setProductType('noodle')
    }else if(tabValue === 1){
      setProductType('chef at home')
    }else if(tabValue === 2){
      setProductType('handcrafted food')
    }else{
      setProductType('ramen seasoning')
    }
  },[tabValue])


  // loader
  const [loading, setLoading] = useState(1)


  //active product list to be mapped
  const [productList, setProductList] = useState([])

  
  // function fetch product
  const fetchProduct = async(productType) =>{
    setLoading(1)
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.user.api_key
    try{
      const respProducts = await axios.get(`http://localhost/v1/index.php/fetch_products_of_type?product_type=${productType}`,
      {
        headers:{
            'Authorization': `${token}`,
            'Content-Type':'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin':'*',
        }
      })
      setLoading(0)
      if(respProducts.data.error === false){
        setProductList([
          ...respProducts.data.data
        ])
      }else{
        alert(respProducts.data.message)
      }
    }catch(error){
        console.log(error)
    }
  }

  // 
  useEffect(()=>{
    fetchProduct(productType)
  },[productType])

/*********************************PRODUCT CARD END****************************************/













/**************************PRODUCT SELECTION OPTION MODEL START***************************/
  // basket Item
  const [basket, setBasket] = useState([])

  // basketCount
  const [basketItemCount, setBasketItemCount] = useState(0)

  //current selected item
  const [activeModel, setActiveModel] = useState({})
  const [openModel, setOpenModel] = useState(false);

  // currrent selected item info
  const [quantity, setQuantity] = useState(0)
  const [discount, setDiscount] = useState(100)
  const [subTotal, setSubtotal] = useState(0)

  useEffect(()=>{
    let total = quantity * (discount/100) * activeModel.price;
    setSubtotal( (Math.round(total * 100) / 100).toFixed(2) )
  },[quantity,discount, activeModel])

  // handle add to basket
  function handleAdd(){

    setBasket({
      ...basket,
      
    })


    setBasketItemCount((prev) => prev + 1)
    setOpenModel(false)
    setQuantity(0)
    setDiscount(100)
    setSubtotal(0)
  }
  




/**************************PRODUCT SELECTION OPTION MODEL END***************************/

  return(
    <ProductCatalogContext.Provider
      value={{
        tabValue,
        handleTabChange,
        productList,
        loading,
        setActiveModel,
        activeModel,
        openModel,
        setOpenModel,
        basketItemCount,
        setBasketItemCount,
        handleAdd,
        quantity,
        setQuantity,
        discount,
        setDiscount, 
        subTotal,
      }}

    >
      {children}
    </ProductCatalogContext.Provider>
  )
}



export{ProductCatalogContextProvider, useProductCatalogContext}
