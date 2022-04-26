import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import accountimg from '../../img/account.jpg'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountInput from './components/AccountInput'




export default function Account() {






  return (
    <Card sx={{maxWidth:'40rem'}}>
      <CardMedia
        component="img"
        height="100"
        image={accountimg}
        alt="Account Image"
      />

      <CardContent>

        <Typography gutterBottom variant="h3" component="div">
            ACCOUNT INFO
        </Typography>

      
        <AccountInput/>

      </CardContent>




    </Card>
  )
}
