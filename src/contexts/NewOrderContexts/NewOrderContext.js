import React, {useContext, useState, useEffect} from 'react'
import moment from 'moment';
import { useProductCatalogContext } from './ProductCatalogContext';
import {v4 as uuid} from 'uuid'



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
            orderID:'',
            orderStatus:'processing',
            orderTotal:'',
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
        // console.log(token)
        // console.log(user.user)

        //create id
        const uniqueID = uuid()

        //params for order info
        const paramsNewOrder = new URLSearchParams()
        for(const key in orderInfo){
            paramsNewOrder.append(key, orderInfo[key] )
        }
        paramsNewOrder.append('orderTotal', total )
        paramsNewOrder.append('orderId', uniqueID )
        paramsNewOrder.append('salesFirstName', user.user.first_name )
        paramsNewOrder.append('salesLastName', user.user.last_name )
        paramsNewOrder.append('salesEmail', user.user.email )

        // params for basket info
        const paramsBasket = new FormData();

        orderBasket.map((item, index) => (
            paramsBasket.append(index,JSON.stringify(item))
        ))



        // orderBasket.forEach((item) => {
        //     for(const key in item ){
        //         // console.log(orderBasket)
        //         console.log(key)
        //         console.log(item[key])
        //     }
        // })
     

        // // check params
        for(const key of paramsNewOrder){
            console.log(key)
        }
        console.log(paramsBasket)
        for(const key of paramsBasket){
            console.log(key)
        }



        // try{
        //     // const respOrderInfo = axios.post('')



        // }catch(error){




        // }



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