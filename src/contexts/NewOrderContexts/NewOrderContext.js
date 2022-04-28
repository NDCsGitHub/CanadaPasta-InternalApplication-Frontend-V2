import React, {useContext, useState, useEffect} from 'react'
import moment from 'moment';


const NewOrderContext = React.createContext()
const useNewOrderContext = () => {
    return useContext(NewOrderContext)
}



const NewOrderContextProvider = ({children}) => {
    const [deliveryDate, setDeliveryDate] = useState()
    const handleChangeDate = (value) => {
        setDeliveryDate(value);
    };

    // store current customer and order info
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

    // basket
    // const [orderBasket, setOrderBasket] = useState({
        
    // })



















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
            salesRepId:'get it from storage when calling api',
            salesRepName:'get it from storage when calling api',
        })
    },[currentCustomer,deliveryDate])















 





    useEffect(()=>{
        console.log(currentCustomer)
        console.log(orderInfo)
    },[currentCustomer,orderInfo])

    return (
        <NewOrderContext.Provider
            value={{
                deliveryDate,
                handleChangeDate,
                setCurrentCustomer,
                currentCustomer,
                orderInfo,
                handleOrderInfo,
            }}
        >

            {children}

        </NewOrderContext.Provider>
    )
}

export {useNewOrderContext, NewOrderContextProvider }