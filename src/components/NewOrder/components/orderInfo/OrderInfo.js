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
import { useNewOrderContext } from '../../../../contexts/NewOrderContexts/NewOrderContext'

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';





export default function OrderInfo() {
    const { deliveryDate, handleChangeDate, orderInfo, handleOrderInfo } = useNewOrderContext();


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
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className='orderInfoAccordionSummary'>
                <Typography
                    sx={{
                        'fontWeight': 'bold',
                        'fontSize': '1.5rem',
                    }}
                >Create New Order
                </Typography>
            </AccordionSummary>

            <AccordionDetails>

                <div className='orderInfoContainer'>

                    <BusinessNameInput />

                    <TextField required
                        label="Customer Type"
                        name='customer_type'
                        margin="dense"
                        value={orderInfo.customer_type || ''}
                        onChange={(e) => {
                            handleOrderInfo(e)
                        }}
                    />

                    <TextField required
                        sx={{ marginLeft: '0.5rem', }}
                        label="Phone #"
                        name='customer_phone_number'
                        margin="dense"
                        value={orderInfo.customer_phone_number || ''}
                        onChange={(e) => {
                            handleOrderInfo(e)
                        }}
                    />

                    <TextField required
                        sx={{ marginLeft: '0.5rem', width: '40rem', }}
                        label="Billing Address"
                        name='billing_address'
                        margin="dense"
                        value={orderInfo.billing_address || ''}
                        onChange={(e) => {
                            handleOrderInfo(e)
                        }}
                    />

                </div>


                <>
                    <TextField select
                        required
                        sx={{ marginLeft: '0.5rem', width: '16rem' }}
                        label="Delivery Method"
                        margin="dense"
                        name='delivery_method'
                        defaultValue={''}
                        onChange={(e) => {
                            handleOrderInfo(e)
                        }}
                    >
                        <MenuItem value='pickup' > Pick Up </MenuItem>
                        <MenuItem value='ship' > Ship </MenuItem>
                    </TextField>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
                            label="Shippping/Picking Date"
                            inputFormat="MM/DD/YYYY"
                            value={deliveryDate}
                            name='shipping_pick_up_time'
                            onChange={(value) => {
                                handleChangeDate(value)

                            }}
                            renderInput={(params) => <TextField margin="dense" sx={{ marginLeft: '0.5rem', width: '15rem' }} {...params} />}
                        />
                    </LocalizationProvider>

                    <TextField select
                        required
                        sx={{ marginLeft: '0.5rem', width: '16rem' }}
                        label="Payment Method"
                        name='payment_method'
                        margin="dense"
                        defaultValue={''}
                        onChange={(e) => {
                            handleOrderInfo(e)
                        }}
                    >
                        <MenuItem value='cash' > Cash </MenuItem>
                        <MenuItem value='emt' > EMT </MenuItem>
                        <MenuItem value='monthly' > Monthly </MenuItem>
                    </TextField>


                    {(() => {
                        switch (orderInfo.delivery_method) {

                            case 'pickup':
                                return (
                                    <TextField select
                                        required
                                        sx={{ marginLeft: '0.5rem', width: '16rem' }}
                                        label="Pick Up Location"
                                        name='pick_up_location'
                                        margin="dense"
                                        defaultValue={''}
                                        onChange={(e) => {
                                            handleOrderInfo(e)
                                        }}
                                    >
                                        <MenuItem value='factory1' > Factory 1 </MenuItem>
                                    </TextField>
                                )

                            case 'ship':
                                return (
                                    <TextField required
                                        sx={{ marginLeft: '0.5rem', width: '40rem', }}
                                        label="Shipping Address"
                                        name='shipping_pick_up_time'
                                        margin="dense"
                                        value={orderInfo.shipping_address || ''}
                                        onChange={(e) => {
                                            handleOrderInfo(e)
                                        }}
                                    />
                                )

                            default:
                                return null
                        }
                    })()}

                </>








            </AccordionDetails>
        </Accordion>
    )
}


