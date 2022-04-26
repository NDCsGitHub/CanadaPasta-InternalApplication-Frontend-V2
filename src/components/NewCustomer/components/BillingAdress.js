import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useNewCustomerContext} from '../../../contexts/NewCustomerContext'



export default function BillingAdress() {

  const {handleBusinessInfo, newBusinessInfo} = useNewCustomerContext()


  return (
    <Grid item xs={4} >
        <Typography gutterBottom variant="h6" component="div">
            Billing Address Info
        </Typography>

        <TextField
            sx={{minWidth:'30rem'}}
            label="Street Name"
            size="small"
            margin="dense"
            value = {newBusinessInfo.billing_street_address}
            name = 'billing_street_address'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />

        <TextField
            sx={{maxWidth:'12rem', marginRight:'0.5rem'}}
            label="City"
            size="small"
            margin="dense"
            value = {newBusinessInfo.billing_city}
            name = 'billing_city'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />

        <TextField
            sx={{maxWidth:'12rem', marginRight:'0.5rem'}}
            label="Province"
            size="small"
            margin="dense"
            value = {newBusinessInfo.billing_province}
            name = 'billing_province'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />

        <TextField
            sx={{maxWidth:'10rem', marginRight:'0.5rem'}}
            label="Postal Code"
            size="small"
            margin="dense"
            value = {newBusinessInfo.billing_postal}
            name = 'billing_postal'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />  

        <TextField
            sx={{maxWidth:'12rem', marginRight:'0.5rem'}}
            label="Country"
            size="small"
            margin="dense"
            value = {newBusinessInfo.billing_country}
            name = 'billing_country'
            onChange={(e)=>{
                handleBusinessInfo(e)
                console.log(newBusinessInfo)
            }}
        />  

    </Grid>
  )
}
