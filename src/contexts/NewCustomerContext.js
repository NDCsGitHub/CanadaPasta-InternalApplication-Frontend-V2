import React, {useContext, useState} from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'



const NewCustomerContext = React.createContext();

const useNewCustomerContext = () => {
    return useContext(NewCustomerContext)
}




const NewCustomerContextProvider = ({children}) => {


  
  const [newCustomerInfo, setNewCustomerInfo] = useState({
    type:'',
    contact_name:'',
    contact_name_2:'',
    contact_phone:'',
    contact_wechat:'',
    contact_email:'',
    info:'',
  })

  const [newBusinessInfo, setNewBusinessInfo] = useState({
    business_name_cn:'',
    business_name_en:'',
    business_phone:'',
    business_number:'',
    shipping_street_address:'',
    shipping_city:'',
    shipping_province:'',
    shipping_country:'',
    shipping_postal:'',
    billing_street_address:'',
    billing_city:'',
    billing_province:'',
    billing_country:'',
    billing_postal:'',

  })

  const handleCustomerInfo = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    setNewCustomerInfo({
        ...newCustomerInfo,
        [inputName]:inputValue
    })
  }

  const handleBusinessInfo = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    setNewBusinessInfo({
        ...newBusinessInfo,
        [inputName]:inputValue
    })
  }


  const handleSubmitCustomer = async() => {

    const uniqueID = uuid()

    // create params
    const paramsCustomer =new URLSearchParams()
    for(const key in newCustomerInfo){
      paramsCustomer.append(key, newCustomerInfo[key])
    }
    paramsCustomer.append('businessID', uniqueID);


    const paramsBusiness = new URLSearchParams()
    for(const key in newBusinessInfo){
      paramsBusiness.append(key, newBusinessInfo[key])
    }
    paramsBusiness.append('business_id', uniqueID);
    
    // check params
    for(var key of paramsCustomer.keys()) {
        console.log(key);
      }
    for(var value of paramsCustomer.values()) {
        console.log(value);
    }
    
    // user Auth
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.user.api_key 
    console.log(token)
    console.log(user.user)



    try{
        const resp1 = axios.post('http://localhost/v1/index.php/insert_new_customer', paramsCustomer,
        {
            headers:{
            'Authorization':token,
            'Content-Type':'application/x-www-form-urlencoded',
            }
        })
        const resp2 = axios.post('http://localhost/v1/index.php/insert_new_business', paramsBusiness,
        {
            headers:{
            'Authorization': `${token}`,
            'Content-Type':'application/x-www-form-urlencoded',
            }
        })

        const errors = await Promise.all([resp1, resp2]).then((value)=>{
            return value.filter((item) => item.data.error === true) 
        })

        if(errors.length > 0){
            alert(errors[0].data.message)
        }else{
            alert('Thank you! Your submission has been sent')
        }
        
        handleClear()
    }catch(error){
        alert(error.response.data.message)
    }
    
  }

  const handleClear = () => {
    setNewCustomerInfo({
        type:'',
        contact_name:'',
        contact_name_2:'',
        contact_phone:'',
        contact_wechat:'',
        contact_email:'',
        info:'',
    })

    setNewBusinessInfo({
      business_name_cn:'',
      business_name_en:'',
      business_phone:'',
      business_number:'',
      shipping_street_address:'',
      shipping_city:'',
      shipping_province:'',
      shipping_country:'',
      shipping_postal:'',
      billing_street_address:'',
      billing_city:'',
      billing_province:'',
      billing_country:'',
      billing_postal:'',
    })
}




  return (
    <NewCustomerContext.Provider
        value = {{
            newCustomerInfo,
            newBusinessInfo,
            handleCustomerInfo,
            handleBusinessInfo,
            setNewCustomerInfo,
            setNewBusinessInfo,
            handleSubmitCustomer,
            handleClear,
        }}
    
    >
        {children}
    </NewCustomerContext.Provider>
  )
}


export {useNewCustomerContext, NewCustomerContextProvider}