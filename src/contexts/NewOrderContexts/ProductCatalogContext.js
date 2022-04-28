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

  // loader
  const [loading, setLoading] = useState(true)

  //active product list to be mapped
  const [productList, setProductList] = useState('')


  // function fetch product
  const fetchProduct = async() =>{

    // http://localhost/v1/index.php/fetch_products_of_type?product_type=noodle
    try{
      const respProducts = await axios.get()
    

    }catch{

    }
  }



  // conditional call
  useEffect(() => {

    if(tabValue === 0){
      setProductList('product from tab 0')
    }else if(tabValue === 1){
      setProductList('product from tab 1')
    }else if(tabValue === 2){
      setProductList('product from tab 2')
    }else{
      setProductList('prodcut from tab 3')
    }


  },[tabValue])




  return(
    <ProductCatalogContext.Provider
      value={{
        tabValue,
        handleTabChange,
        productList,
      }}

    >
      {children}
    </ProductCatalogContext.Provider>
  )
}




export{ProductCatalogContextProvider, useProductCatalogContext}
