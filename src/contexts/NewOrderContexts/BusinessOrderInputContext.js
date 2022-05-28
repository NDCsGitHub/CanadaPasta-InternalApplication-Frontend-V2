import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

const BusinessOrderInputContext = React.createContext();
const useBusinessOrderInputContext = () => {
    return useContext(BusinessOrderInputContext)
}


const BusinessOrderInputContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    useEffect(() => {
        let active = true;
        if (!loading) return undefined;

        (async () => {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.user.api_key
            try {
                const customerResp = await axios.get('http://localhost/v1/index.php/fetch_all_customers',
                    {
                        headers: {
                            'Authorization': `${token}`,
                            'Content-Type': 'application/x-www-form-urlencoded',
                        }
                    })


                if (active) setOptions([...customerResp.data.data]);

            } catch (error) {
                console.log(error)
            }

        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) setOptions([]);
    }, [open]);









    return (
        <BusinessOrderInputContext.Provider
            value={{
                open,
                setOpen,
                options,
                setOptions,
                loading,
            }}
        >
            {children}
        </BusinessOrderInputContext.Provider>
    )
}



export { BusinessOrderInputContextProvider, useBusinessOrderInputContext }

