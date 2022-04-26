import React, {useContext, useEffect, useState} from 'react'


const AccountContext = React.createContext()

const useAccountContext = () => {
    return useContext(AccountContext)
}


const AccountContextProvider = ({children}) => {
    //register input state to be sent over to backend
    const [accountInfo, setAccountInfo] = useState({
        'First Name':{
            'InputType':'First Name',
            'Value':'Andy',
            'editOption':true,
            'DisableEdit':true,
        },
        'Last Name':{
            'InputType':'Last Name',
            'Value':'Chen',         
            'editOption':true,
            'DisableEdit':true,
        },
        'Account Type':{
            'InputType':'Account Type',
            'Value':'Admin',
            'editOption':false,
            'DisableEdit':true,
        },
        'Company':{
            'InputType':'Company',
            'Value':'AI Financial',
            'editOption':true ,
            'DisableEdit':true,
        }
    })
    // handleChangeInputValue
    const handleInputValue = (e, input) =>{
        const infoText = e.target.value;
        const target = input['InputType']
        setAccountInfo({
            ...accountInfo,
            [target]:{...input,'Value':infoText}
        })   
    }

    // handleClickEdit
    const handleClickEdit = (e, input) => {
        const target = input['InputType']
        const editValue = input['DisableEdit']
        setAccountInfo({
            ...accountInfo,
            [target]:{...input, 'DisableEdit':!editValue}
        })
    }
    // accountSelector function
    const accountSelector = (object) => {
        return Object.keys(object).map((accountKey) => object[accountKey])
    }
    useEffect(()=>{
        accountSelector(accountInfo)
        console.log(accountSelector(accountInfo))
    },[accountInfo])






    return(
        <AccountContext.Provider
            value={{
                accountInfo,
                setAccountInfo,
                handleInputValue,
                accountSelector,
                handleClickEdit
            }}
        >
            
            {children}
        
        </AccountContext.Provider>

    )
}





export {useAccountContext, AccountContextProvider}