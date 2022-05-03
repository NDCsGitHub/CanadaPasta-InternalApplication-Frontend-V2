import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
import './productoption.css'
import noodle2 from '../../../../img/noodle2.jpg'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

  

 export default function ProductOptions( ) {

  const {activeModel} = useProductCatalogContext()


  console.log(activeModel)

  

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
                  
                </Typography>



                <Typography 
                    className='productPrice'
                    color="#ffca40"
                    align='center'
                >
                  
                </Typography>

            </CardContent>

      </Card>



    </div>
  );



}



