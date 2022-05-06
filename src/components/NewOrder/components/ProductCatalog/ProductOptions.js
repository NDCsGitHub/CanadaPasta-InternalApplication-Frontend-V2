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
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useNewOrderContext} from '../../../../contexts/NewOrderContexts/NewOrderContext'
import TextField from '@mui/material/TextField';

const SubTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  fontSize: '1.3rem',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
}));

const Quantity = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
}));
 

const IncDecBut = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  fontSize: '1.3rem',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold'
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






      <Grid container className='gridContainer' spacing={1}>

        <Grid item xs={6}>
          <SubTitle>
            Quantity
          </SubTitle>
        </Grid>


        <Grid item xs={1.5}>
          <IncDecBut>-</IncDecBut>
        </Grid>

        <Grid item xs={1.5} >
          <Quantity className='quantityInput'>
            132
          </Quantity>
        </Grid>

        <Grid item xs={1.5}>
          <IncDecBut>+</IncDecBut>
        </Grid>





        <Grid item xs={6}>
          <SubTitle
            align='center'
          >
            Discount
          </SubTitle>
        </Grid>

        <Grid item xs={4.5}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
        </Grid>

 
        <Grid item xs={6}>
          <SubTitle
            align='center'
          >
            Subtotal
          </SubTitle>
        </Grid>

        <Grid item xs={4.5}>
          <Typography
            align='center'
          >
            subtotal
          </Typography>
        </Grid>




      </Grid>


      <Button className='addToBasketButton' variant="contained" endIcon={<SendIcon />}>
        Add to Order
      </Button>



    </div>
  );



}



