import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import noodle from '../../img/noodle2.jpg'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid';
import ContactInfo from '../NewCustomer/components/ContactInfo';
import BusinessInfo from '../NewCustomer/components/BusinessInfo';
import ShippingAddress from '../NewCustomer/components/ShippingAddress';
import BillingAdress from '../NewCustomer/components/BillingAdress';
import { useNewCustomerContext } from '../../contexts/NewCustomerContext'


export default function Newcustomer() {

  const { handleSubmitCustomer, handleClear} = useNewCustomerContext()
  

  return (
    <Card sx={{}}>
        <CardMedia
            component="img"
            height="100"
            image={noodle}
            alt="New Product Image"
        />

        <CardContent>
            <Typography gutterBottom variant="h3" component="div">
                NEW CUSTOMER
            </Typography>


            <Grid container spacing={0}>
                    <ContactInfo/>
                    <BusinessInfo/>
                    <ShippingAddress/>
                    <BillingAdress/>
            </Grid>
        </CardContent>



        <CardActions 
            sx={{
                justifyContent:'start',
                maxWidth:'100%',
            }}
        >
            <Button size="large" startIcon={<DeleteSweepIcon />} onClick={(e)=>{handleClear()}} >Clear</Button>
            <Button size="large" startIcon={<CloudUploadIcon />} onClick={(e)=>{handleSubmitCustomer()}}>Submit</Button>
        </CardActions>
    </Card>
  )
}
