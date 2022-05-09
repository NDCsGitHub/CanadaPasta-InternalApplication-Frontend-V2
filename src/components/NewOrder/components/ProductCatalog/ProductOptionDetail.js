import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
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










  return (

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
            defaultValue={100}
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
          <SubTitle
            align='center'
          >
            100
          </SubTitle>
        </Grid>




      </Grid>
  )
}
