import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
import './productOptionDetail.css'

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

// const IncDecBut = styled(Button)(({ theme }) => ({
//     ...theme.typography.body2,
//     fontSize: '1.3rem',
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: 'black',
//     fontWeight: 'bold'
//   }));
  




export default function ProductOptionDetail() {

  const {quantity, discount, subTotal, setQuantity, setDiscount} = useProductCatalogContext()
  


  console.log(subTotal)




  return (

      <Grid container className='gridContainer' spacing={1}>

        <Grid item xs={5.5}>
          <SubTitle>
            Quantity
          </SubTitle>
        </Grid>

        <Grid item xs={1.5}>
          <Button
            className='decrementButton'
            variant="contained" 
            onClick = {(e) => {
                quantity > 0 && setQuantity((prev)=> prev - 1)
            }}
          >-</Button>
        </Grid>

        <Grid item xs={1.5} >
          <Quantity className='quantityInput'>
            {quantity}
          </Quantity>
        </Grid>

        <Grid item xs={1.5}>
          <Button
            className='incrementButton'
            variant="contained" 
            onClick = {() => {
                setQuantity((prev)=> prev+1)
            }}
          >+</Button>
        </Grid>



        <Grid item xs={5.5}>
          <SubTitle
            align='center'
          >
            Discount
          </SubTitle>
        </Grid>

        <Grid item xs={4.9}>
          <TextField
            hiddenLabel
            type='number'
            variant="filled"
            size="small"
            value = {discount}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            onChange={(e) => {
                if (e.target.value > 100) e.target.value = 100;
                if (e.target.value < 0) e.target.value = 0;
                setDiscount(e.target.value)
            }}
          />
        </Grid>




        <Grid item xs={5.5}>
          <SubTitle
            align='center'
          >
            Subtotal
          </SubTitle>
        </Grid>

        <Grid item xs={4.5}>
          <SubTitle
            align='center'
          >
            {subTotal}
          </SubTitle>
        </Grid>




      </Grid>
  )
}
