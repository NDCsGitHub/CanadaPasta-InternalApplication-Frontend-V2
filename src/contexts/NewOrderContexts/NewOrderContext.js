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

    const [currentCustomer, setCurrentCustomer] = useState()    

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