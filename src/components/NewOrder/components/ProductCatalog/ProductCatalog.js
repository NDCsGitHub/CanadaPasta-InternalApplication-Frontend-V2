import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {GiDumpling, GiSaucepan, GiFastNoodles} from 'react-icons/gi'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './productCatalog.css'


export default function ProductCatalog() {


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };









    

  return (
    <Card sx={{marginTop:'1rem' }}>

        <Tabs className='tabList' value={value} onChange={handleChange}>
            <Tab icon={<RamenDiningIcon className = 'tabIcon' />} label="NOODLES" />
            <Tab icon={<GiFastNoodles  className = 'tabIcon' />} label="CHEF AT HOME" />
            <Tab icon={<GiDumpling className = 'tabIcon' />} label="Handcrafted Food" />
            <Tab icon={<GiSaucepan className = 'tabIcon' />} label="RAMEN SEASONING" />
            <Button 
                variant="contained" 
                size="large"     
                className="cartButton"
                endIcon={
                    <ShoppingCartCheckoutIcon 
                        fontSize="large" 
                        sx={{
                            width:'1.6rem', height: '1.6rem'
                        }} 
                    />
                } 
            >
                CART
            </Button>
        </Tabs>







        dsad

    </Card>
  )

}   



// eslint-disable-next-line no-lone-blocks
{/* <Card sx={{ minWidth: 275 }}>
<CardContent>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Word of the Day
  </Typography>
  <Typography variant="h5" component="div">
    be{bull}nev{bull}o{bull}lent
  </Typography>
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
    adjective
  </Typography>
  <Typography variant="body2">
    well meaning and kindly.
    <br />
    {'"a benevolent smile"'}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Learn More</Button>
</CardActions>
</Card> */}