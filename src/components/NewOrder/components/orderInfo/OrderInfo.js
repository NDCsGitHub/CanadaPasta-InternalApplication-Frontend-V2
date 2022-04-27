import React from 'react'
import './orderInfo.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessNameInput from './BusinessNameInput'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {useNewOrderContext} from '../../../../contexts/NewOrderContexts/NewOrderContext'

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';





export default function OrderInfo() {   
  const {deliveryDate, handleChangeDate,orderInfo, handleOrderInfo } = useNewOrderContext();


  return (
    <Accordion
        defaultExpanded={true}
        disableGutters={true}
        sx={{
            '&:before': {
                display: 'none',
            }
        }}
        elevation={7}
    >
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} className='orderInfoAccordionSummary'>
            <Typography
                sx={{
                    'fontWeight':'bold',
                    'fontSize':'1.5rem',
                }}
            >Create New Order
            </Typography>
        </AccordionSummary>

        <AccordionDetails>
        
            <div className='orderInfoContainer'>

                <BusinessNameInput />

                <TextField required
                    label="Customer Type"
                    name='customerType'
                    margin="dense"
                    value ={orderInfo.customerType ||''}
                    onChange={(e)=>{
                        handleOrderInfo(e)
                    }}
                />

                <TextField required
                    sx={{marginLeft:'0.5rem', }}
                    label="Phone #"
                    name='customerPhoneNumber'
                    margin="dense"
                    value = {orderInfo.customerPhoneNumber || ''}
                    onChange={(e)=>{
                        handleOrderInfo(e)
                    }}
                />

                <TextField required
                    sx={{marginLeft:'0.5rem', width:'40rem', }}
                    label="Billing Address"
                    name='billingAddress'
                    margin="dense"
                    value = {orderInfo.billingAddress || ''}
                    onChange={(e)=>{
                        handleOrderInfo(e)
                    }}
                />
            
            </div>


            <>
                <TextField select
                    required
                    sx={{marginLeft:'0.5rem', width:'15rem'}}
                    label="Delivery Method"
                    margin="dense"
                    name='deliveryMethod'
                    onChange={(e)=>{
                        handleOrderInfo(e)
                    }}
                >
                    <MenuItem value='pickup' > Pick Up </MenuItem>
                    <MenuItem value='ship' > Ship </MenuItem>
                </TextField>

                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                        label="Shippping/Picking Date"
                        inputFormat="MM-DD-YYYY"
                        value={deliveryDate}
                        name='shipOrPickDate'
                        onChange={(value) => {
                            handleChangeDate(value)
                            
                        }}
                        renderInput={(params) => <TextField margin="dense" sx={{marginLeft:'0.5rem', width:'15rem'}} {...params} />}
                    />
                </LocalizationProvider>
                
                <TextField select
                    required
                    sx={{marginLeft:'0.5rem', width:'15rem'}}
                    label="Payment Method"
                    name='paymentMethod'
                    margin="dense"
                    defaultValue={'cash'}
                >
                    <MenuItem value='cash' > Cash </MenuItem>
                    <MenuItem value='emt' > EMT </MenuItem>
                    <MenuItem value='monthly' > Monthly </MenuItem>
                </TextField>
                
                <TextField select
                    required
                    sx={{marginLeft:'0.5rem', width:'15rem'}}
                    label="Pick Up Location"
                    name='pickuplocation'
                    margin="dense"
                    defaultValue={'factory1'}
                >
                    <MenuItem value='factory1' > Factory 1 </MenuItem>
                </TextField>
                
                
            </>



        </AccordionDetails>
    </Accordion>
  )
}


