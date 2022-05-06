import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
import './productoption.css'
import noodle2 from '../../../../img/noodle2.jpg'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useNewOrderContext} from '../../../../contexts/NewOrderContexts/NewOrderContext'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  

 export default function ProductOptions( ) {
  const {orderBasket, setOrderBasket} = useNewOrderContext()
  const {activeModel} = useProductCatalogContext()
  const {product_name_en, product_name_cn, price} = activeModel

  console.log(activeModel)
  console.log(orderBasket)
  



  return (
    <div className ='optionDetailContainer'>

      {/* <img className='product' src={noodle2} alt="Girl in a jacket" width="200" height="200" />  */}

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






      <Grid container className='gridContainer' spacing={2}>


        <Grid item xs={8}>
          <Typography>
            Quantity
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography>
            Increase and decrease
          </Typography>
        </Grid>


        <Grid item xs={8}>
          <Typography>
            discount
          </Typography>
        </Grid>

        <Grid item xs={4}>
          discount input
        </Grid>

 
        <Grid item xs={8}>
          subtotal
        </Grid>

        <Grid item xs={4}>
          subtotal
        </Grid>


      </Grid>


      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>



    </div>
  );



}



