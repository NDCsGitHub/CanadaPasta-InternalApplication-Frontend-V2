import React, {useState} from 'react'
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
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -5,
      top: -5,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 0px',
    },
  }));


export default function ProductCatalog() {
  const {tabValue, handleTabChange, productList, loading, basketItemCount, setBasketItemCount } = useProductCatalogContext()


  




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
                    <StyledBadge badgeContent={basketItemCount} color="primary">
                        <ShoppingCartCheckoutIcon 
                            fontSize="large" 
                            sx={{
                                width:'1.6rem', height: '1.6rem'
                            }} 
                            />
                    </StyledBadge>
                } 
            >
                CART
            </Button>
        </Tabs>


        {loading === 1? (
            <Box className='loaderContainer'>
                <CircularProgress thickness={5} size='10rem' className='basketLoader' />
            </Box>
        ):(
            <div className='productContainer'>
                {productList.map((product, index)=>{
                    return <ProductCard key={index} {...product} />
                })}
            </div>
        )}

    </Card>
  )

}   

