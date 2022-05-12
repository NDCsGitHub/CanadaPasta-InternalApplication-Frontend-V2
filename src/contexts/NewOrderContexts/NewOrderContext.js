import React, {useContext, useState, useEffect} from 'react'
import moment from 'moment';
import { useProductCatalogContext } from './ProductCatalogContext';
import {v4 as uuid} from 'uuid'
import axios from 'axios'


const NewOrderContext = React.createContext()
const useNewOrderContext = () => {
    return useContext(NewOrderContext)
}



const NewOrderContextProvider = ({children}) => {

    /************************ORDER INFO : START*******************************/
    // gets the data from date picker and save it as a Date object
    const [deliveryDate, setDeliveryDate] = useState()
    const handleChangeDate = (value) => {
        setDeliveryDate(value);
    };

    // store current customer and order info
    // currentCustomer contains the date pull from businessOptions component options list, it contains raw data from the database
    // orderInfo contains the finalized date
    const [currentCustomer, setCurrentCustomer] = useState({})    
    const [orderInfo, setOrderInfo] = useState({})

    // handle orderInfo
    const handleOrderInfo = (e) => {
        const inputValue = e.target.value
        const inputName = e.target.name
        setOrderInfo({
            ...orderInfo,
            [inputName]:inputValue
        })
    }

    useEffect(()=>{

        // making sure billing input value doesn't show up undefined before a business was selected
        let billingAddress = `${currentCustomer.billing_street_address}, ${currentCustomer.billing_city}, ${currentCustomer.billing_province}, ${currentCustomer.billing_country}, ${currentCustomer.billing_postal}`
        if( billingAddress === 'undefined, undefined, undefined, undefined, undefined'){
            billingAddress=''
        }

        //today && shipOrPickDate
        let today = moment(new Date()).format("MM-DD-YYYY")
        let actualDeliveryDate = !deliveryDate? today : moment((deliveryDate._d)).format("MM-DD-YYYY")

        setOrderInfo({
            billingAddress: billingAddress,
            businessNameCn:currentCustomer.business_name_cn,
            businessNameEn:currentCustomer.business_name_en,
            customerId:currentCustomer.id,
            customerPhoneNumber:currentCustomer.contact_phone,
            customerType:currentCustomer.type,
            deliveryMethod:'',
            editVersion:0,
            notes:'',
            orderDates:today,
            orderDiscount:'',
            orderStatus:'processing',
            orderTotal:total,
            originalTotal:'',
            paymentMethod:'',
            pickupLocation:'',
            shipOrPickDate:actualDeliveryDate,
            shippingAddress:`${currentCustomer.shipping_street_address}, ${currentCustomer.shipping_city}, ${currentCustomer.shipping_province}, ${currentCustomer.shipping_country}, ${currentCustomer.shipping_postal}`,
        })

    },[currentCustomer,deliveryDate])

    // test the results, remove this later
    useEffect(()=>{
        // console.log(orderInfo)
    },[orderInfo])

    /*************************ORDER INFO: END*********************************/











    /*************************BASKET INFO: START******************************/

    // basket
    const [basketModel, setBasketModel] = useState(false)
    const [orderBasket, setOrderBasket] = useState()
    const [subTotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState()
    const [taxAmount, setTaxAmount] = useState()

    const {basket} = useProductCatalogContext()

    const toggleBasketModel = (e) => {
        setBasketModel((prev) => !prev)
    }

    useEffect(()=>{
        setOrderBasket(basket)
    }, [basket])


    /*************************BASKET INFO: END******************************/









    /*************************API CALL : START******************************/ 



    useEffect(() => {
        console.log(orderBasket)
        console.log(orderInfo)

    }, [orderBasket,orderInfo])


    const handleSubmitOrder = async()=>{
        // user Auth
        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.user.api_key 

        //create common id
        const uniqueID = uuid()

        //params for order info
        const paramsNewOrder = new URLSearchParams()
        for(const key in orderInfo){
            paramsNewOrder.append(key, orderInfo[key] )
        }
        paramsNewOrder.append('orderId', uniqueID )
        paramsNewOrder.append('salesFirstName', user.user.first_name )
        paramsNewOrder.append('salesLastName', user.user.last_name )
        paramsNewOrder.append('salesEmail', user.user.email )

        // body for basket info
        let itemsWithOrder = {
            'order_id':uniqueID,
            "items":[
                ...orderBasket
            ]
        }



    
        // check params
        for(const key of paramsNewOrder){
            console.log(key)
        }
        // check Body
        console.log(itemsWithOrder)



        try{
            const respOrderInfo = await axios.post('http://localhost/v1/index.php/insert_new_order', paramsNewOrder,
            {
                header:{
                    'Authroization':token,
                    'Context-Type':'application/x-www-form-urlencoded'
                }
            })


            const respBasket = await axios.post('http://localhost/v1/index.php/update_items_with_order', itemsWithOrder,
            {
                header:{
                    'Authorization':token,
                    'Content-Type': 'application/json'
                }
            })






            const errors = await Promise.all([respOrderInfo, respBasket]).then((value) => {
                return value.filter((item) => item.data.error = true)
            })

            if(errors.length > 0){
                alert(errors[0].data.message)
            }else{
                alert('Thank you! Order has been sent!')
            }




            
        }catch(error){

            alert(error.response.data.message)


        }



    }





    /*************************API CALL : END********************************/



    return (
        <NewOrderContext.Provider
            value={{
                deliveryDate,
                handleChangeDate,
                setCurrentCustomer,
                currentCustomer,
                orderInfo,
                handleOrderInfo,
                orderBasket,
                setOrderBasket,
                toggleBasketModel,
                basketModel,
                setBasketModel,
                subTotal,
                setSubTotal,
                total, 
                setTotal,
                taxAmount,
                setTaxAmount,
                handleSubmitOrder,
            }}
        >

            {children}

        </NewOrderContext.Provider>
    )
}

export {useNewOrderContext, NewOrderContextProvider }