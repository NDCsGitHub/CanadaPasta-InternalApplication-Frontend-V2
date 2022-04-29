import React from 'react'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import noodle2 from '../../../../img/noodle2.jpg'
import './productcard.css'



export default function ProductCard() {





  return (
    <Card 
        className = 'productCardContainer'
        sx={{ 
            maxWidth: 200, 
            borderRadius:'1rem',
            margin:'1rem' 
        }}
    >
        <CardActionArea>

            <CardMedia
                component="img"
                height="140"
                image={noodle2}
            />
            
            <CardContent>

                <Typography
                    gutterBottom 
                    variant="h6" 
                    component="div"
                    align='center'
                >

                    Product Name Prop
                </Typography>

                <Typography 
                    variant="body2" 
                    color="#ffca40"
                    align='center'
                >
                    Product Price prop
                </Typography>

            </CardContent>


        </CardActionArea>
    </Card>

  )
}
