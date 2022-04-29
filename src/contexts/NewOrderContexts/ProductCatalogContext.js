import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'




const ProductCatalogContext = React.createContext()
const useProductCatalogContext = () =>{
  return useContext(ProductCatalogContext)
}



const ProductCatalogContextProvider =({children}) => {

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
        console.log(respProducts.data.data)
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




  return(
    <ProductCatalogContext.Provider
      value={{
        tabValue,
        handleTabChange,
        productList,
        loading,
      }}

    >
      {children}
    </ProductCatalogContext.Provider>
  )
}




export{ProductCatalogContextProvider, useProductCatalogContext}
