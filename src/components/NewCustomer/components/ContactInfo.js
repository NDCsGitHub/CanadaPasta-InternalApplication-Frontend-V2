import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import {useNewCustomerContext} from '../../../contexts/NewCustomerContext'


export default function ContactInfo() {
  const customerType = ['Supermarket', 'Restaruant', 'Wechat', 'platform', 'Seller', 'Service Provider', 'Supplier' ]
  const {newCustomerInfo, handleCustomerInfo} = useNewCustomerContext()



 




  return (
    <Grid item xs={2} >
        <Typography gutterBottom variant="h6" component="div">
            Contact Info
        </Typography>

        <TextField
            select
            label='Business Type'
            sx={{minWidth:'13.9rem'}}
            value = {newCustomerInfo.type}
            name = 'type'
            onChange={(e)=>{
                handleCustomerInfo(e)
            }}
            margin="dense" 
            size="small"
        >
        {customerType.map((option) => (
            <MenuItem key={option} value={option}>
            {option}
            </MenuItem>
        ))}
        </TextField>


        <TextField
            label="Contact Name"
            size="small"
            margin="dense"
            name='contact_name'
            value={newCustomerInfo.contact_name}
            onChange={(e)=>{
                handleCustomerInfo(e)
            }}
        />

        <TextField
            label="Contact Name 2"
            size="small"
            margin="dense" 
            value = {newCustomerInfo.contact_name_2}
            name = 'contact_name_2'
            onChange={(e)=>{
                handleCustomerInfo(e)
            }}
        />
        
        <TextField
            label="Phone #"
            size="small"
            margin="dense" 
            value = {newCustomerInfo.contact_phone}
            name = 'contact_phone'
            onChange={(e)=>{
                handleCustomerInfo(e)
            }}
        />
        
        <TextField
            label="WeChat ID"
            size="small"
            margin="dense" 
            value = {newCustomerInfo.contact_wechat}
            name = 'contact_wechat'
            onChange={(e)=>{
                handleCustomerInfo(e)
            }}
        />
        
        <TextField
            label="Email"
            size="small"
            margin="dense"
            value = {newCustomerInfo.contact_email}
            name = 'contact_email'
            onChange={(e)=>{
                handleCustomerInfo(e)
            }}
        />

        <TextField
            label="Info"
            size="small"
            margin="dense"
            value = {newCustomerInfo.info}
            name = 'info'
            onChange={(e)=>{
                handleCustomerInfo(e)
            }}
        />

    </Grid>
  )
}
