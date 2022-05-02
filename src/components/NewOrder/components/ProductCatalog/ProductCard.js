import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import noodle2 from '../../../../img/noodle2.jpg'
import './productcard.css'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';



export default function ProductCard(props) {
    
  const {setActiveModel, setOpenModel} = useProductCatalogContext()
  const {product_name_en, product_name_cn, price} = props



  const handleClick = () =>{
    setActiveModel(props)
    setOpenModel(true)
  }   


  return (


    <Card 
        className = 'productCardContainer'
        sx={{ 
            maxWidth: 210, 
            borderRadius:'1rem',
            margin:'1rem' 
        }}
        onClick={()=>{
            handleClick()
        }}
    >
        <CardActionArea>

            <CardMedia
                component="img"
                height="100"
                image={noodle2}
            />
            
            <CardContent>

                <Typography
                    className='productTitle'
                    gutterBottom 
                    component="div"
                    align='center'
                >
                    {`${product_name_cn}/${product_name_en}`}
                </Typography>

                <Typography 
                    className='productPrice'
                    color="#ffca40"
                    align='center'
                >
                    {`$${price}`}
                </Typography>

            </CardContent>


        </CardActionArea>
    </Card>

  )
}
