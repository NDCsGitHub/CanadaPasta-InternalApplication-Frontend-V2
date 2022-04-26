import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Auto from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import {useBusinessOrderInputContext} from '../../../../contexts/NewOrderContexts/BusinessOrderInputContext'
import {useNewOrderContext} from '../../../../contexts/NewOrderContexts/NewOrderContext'
import MenuItem from '@mui/material/MenuItem';
//Business Name, Customer Type, Phone #, Billing Address, 
//Delivery Method, Shipping/Pickup Date,
// Payment Method, Pick Up Location



const BusinessOptions = styled(Auto)(({ theme }) => ({
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    marginTop:'3px',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  

export default function BusinessNameInput() {
    
    const {open, setOpen, options, loading} = useBusinessOrderInputContext()
    const {currentCustomer, setCurrentCustomer} = useNewOrderContext
    
    const [testing, setTesting] = useState()
    

    useEffect(()=>{
        console.log(testing)
    },[testing])

    return (
        <BusinessOptions
            sx={{ width: 300}}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}


            getOptionLabel={(option) => (
                `${option.business_name_cn}/${option.business_name_en}` || ''
            )}

            value={testing}
        
            onChange={(event, newValue) => {
                setTesting(newValue.business_name_cn);
                // setCurrentCustomer(newValue)
            }}

            options={options}
            loading={loading}

            renderOption={(props, option) => {
                return (
                  <MenuItem {...props} key={option.id} value={option.business_name_cn}>
                    {option.business_name_cn}
                  </MenuItem>
                );
              }}

            renderInput={(params) => (

                <TextField
                    label="Business Name"
                    {...params}
                    InputProps={{
                        ...params.InputProps,
                    endAdornment: (
                        <React.Fragment>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                    ),
                    }}
                />

            )}
        />
    )
}




