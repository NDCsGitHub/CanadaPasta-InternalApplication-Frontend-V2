import React, {useContext, useState, useEffect} from 'react'


const NewOrderContext = React.createContext()
const useNewOrderContext = () => {
    return useContext(NewOrderContext)
}



const NewOrderContextProvider = ({children}) => {
    const [date, setDate] = useState()
    const handleChangeDate = (newValue) => {
        setDate(newValue);
    };

    // store current customer
    const [currentCustomer, setCurrentCustomer] = useState()    

    
    const [orderInfo, setOrderInfo] = useState({
        billingAddress:'',
        businessName:'',
        customerId:'',
        customerPhoneNumber:'',
        customerType:'',
        deliveryMethod:'',
        editVersion:0,
        notes:'',
        orderDates:'',
        orderDiscount:'',
        orderID:'',
        orderStatus:'',
        orderTotal:'',
        originalTotal:'',
        paymentMethod:'',
        pickupLocation:'',
        shipOrPickDate:'',
        shippingAddress:'',
        salesRepId:'',
        salesRepName:'',
    })

    const [orderBasket, setOrderBasket] = useState({
        
    })






    useEffect(()=>{
        console.log(currentCustomer)
    },[currentCustomer])

    return (
        <NewOrderContext.Provider
            value={{
                date,
                handleChangeDate,
                setCurrentCustomer,
                currentCustomer,
            }}
        >

            {children}

        </NewOrderContext.Provider>
    )
}

export {useNewOrderContext, NewOrderContextProvider }