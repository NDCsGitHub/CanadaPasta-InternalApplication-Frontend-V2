import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {useNewCustomerContext} from '../../../contexts/NewCustomerContext'



export default function BusinessInfo() {

  const {handleBusinessInfo, newBusinessInfo} = useNewCustomerContext()


  return (
    <Grid xs={2} >
        <Typography gutterBottom variant="h6" component="div">
            Business Info
        </Typography>
        
        <TextField
            label="Business Name (EN)"
            size="small"
            margin="dense"
            value = {newBusinessInfo.business_name_cn}
            name = 'business_name_cn'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />
        <TextField
            label="Business Name (CN)"
            size="small"
            margin="dense"
            value = {newBusinessInfo.business_name_en}
            name = 'business_name_en'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />

        <TextField
            label="Business Phone #"
            size="small"
            margin="dense"
            value = {newBusinessInfo.business_phone}
            name = 'business_phone'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />

        <TextField
            label="Business #"
            size="small"
            margin="dense"
            value = {newBusinessInfo.business_number}
            name ='business_number'
            onChange={(e)=>{
                handleBusinessInfo(e)
            }}
        />

    </Grid> 
  )
}
