import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
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




export default function ProductOptionDetail() {

  const {quantity, discount, subTotal} = useProductCatalogContext()









  return (

      <Grid container className='gridContainer' spacing={1}>

        <Grid item xs={6}>
          <SubTitle>
            Quantity
          </SubTitle>
        </Grid>

        <Grid item xs={1.5}>
          <IncDecBut
            onClick = {(e) => {
                console.log("decrement")
            }}
          >-</IncDecBut>
        </Grid>

        <Grid item xs={1.5} >
          <Quantity className='quantityInput'>
            {quantity}
          </Quantity>
        </Grid>

        <Grid item xs={1.5}>
          <IncDecBut
            onClick = {(e) => {
                console.log("increment")
            }}
          >+</IncDecBut>
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
            variant="filled"
            size="small"
            value = {discount}
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
          <SubTitle
            align='center'
          >
            {subTotal}
          </SubTitle>
        </Grid>




      </Grid>
  )
}
