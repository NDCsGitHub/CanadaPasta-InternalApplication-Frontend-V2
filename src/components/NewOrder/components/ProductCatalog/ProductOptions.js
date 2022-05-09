import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
import './productoption.css'
import noodle2 from '../../../../img/noodle2.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useNewOrderContext} from '../../../../contexts/NewOrderContexts/NewOrderContext'
import ProductOptionsDetail from './ProductOptionDetail'



  

 export default function ProductOptions( ) {
  const {orderBasket, setOrderBasket, basketCount, setBasketCount} = useNewOrderContext()
  const {activeModel} = useProductCatalogContext()
  const {product_name_en, product_name_cn, price} = activeModel

  console.log(activeModel)
  console.log(orderBasket)
  


  return (
    <div className ='optionDetailContainer'>

      <Card 
        className = 'productOptionContainer'
        sx={{ 
            maxWidth: 210, 
            borderRadius:'1rem',
            margin:'1rem',
        }}
        onClick={()=>{
            
        }}
      >

            <CardMedia
                component="img"
                height="200"
                image={noodle2}
            />
            
            <CardContent>
                <Typography
                    className='productTitle'
                    gutterBottom 
                    component="div"
                    align='center'
                >
                  {product_name_cn}/{product_name_en}
                </Typography>

                <Typography 
                    className='productPrice'
                    color="#ffca40"
                    align='center'
                >
                  {price}
                </Typography>


            </CardContent>

      </Card>


      
      <ProductOptionsDetail />


      <Button className='addToBasketButton' variant="contained" endIcon={<SendIcon />}>
        Add to Order
      </Button>



    </div>
  );



}



