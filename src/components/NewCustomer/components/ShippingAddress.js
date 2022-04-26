import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useNewCustomerContext} from '../../../contexts/NewCustomerContext'

export default function ShippingAddress() {

  const {handleBusinessInfo, newBusinessInfo} = useNewCustomerContext()






  return (
    <Grid item xs={4} >
        <Typography gutterBottom variant="h6" component="div">
            Shipping Address Info
        </Typography>


        <TextField
            sx={{minWidth:'30rem'}}
            label="Street Name"
            size="small"
            margin="dense"
            value = {newBusinessInfo.shipping_street_address}
            name = 'shipping_street_address'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />
        
        <TextField
            sx={{maxWidth:'12rem', marginRight:'0.5rem'}}
            label="City"
            size="small"
            margin="dense"
            value = {newBusinessInfo.shipping_city}
            name = 'shipping_city'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />

        <TextField
            sx={{maxWidth:'12rem', marginRight:'0.5rem'}}
            label="Province"
            size="small"
            margin="dense"
            value = {newBusinessInfo.shipping_province}
            name = 'shipping_province'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />

        <TextField
            sx={{maxWidth:'10rem', marginRight:'0.5rem'}}
            label="Postal Code"
            size="small"
            margin="dense"
            value = {newBusinessInfo.shipping_postal}
            name = 'shipping_postal'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />  

        <TextField
            sx={{maxWidth:'12rem', marginRight:'0.5rem'}}
            label="Country"
            size="small"
            margin="dense"
            value = {newBusinessInfo.shipping_country}
            name = 'shipping_country'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />  



    </Grid>
  )
}
