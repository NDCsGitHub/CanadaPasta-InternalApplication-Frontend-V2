import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {GiDumpling, GiSaucepan, GiFastNoodles} from 'react-icons/gi'
import './productCatalog.css'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
import ProductCard from './ProductCard'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';






export default function ProductCatalog() {
  const {tabValue, handleTabChange, productList, loading} = useProductCatalogContext()


  
    

  return (
    <Card sx={{marginTop:'1rem' }}>

        <Tabs className='tabList' value={tabValue} onChange={handleTabChange}>
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

        
        {loading === true? (
            <Box className='loaderContainer'>
                <CircularProgress thickness={5} size='10rem' className='basketLoader' />
            </Box>
        ):(
            <div className='productContainer'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        )}

    </Card>
  )

}   



