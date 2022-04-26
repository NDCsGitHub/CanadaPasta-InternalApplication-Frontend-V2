import React from 'react'
import './newproduct.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import noodleimg from '../../img/noodle.webp'
import TextField from '@mui/material/TextField';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid';
import { useNewProductContext} from '../../contexts/NewProductContext'

export default function Newproduct() {

  // context for product
  const {newProductInfo, setNewProductInfo, handleProductInfo, handleSubmitProduct} = useNewProductContext()



  // clear the form
  const handleClearButton = () => {
    setNewProductInfo({
      product_name_en:'',
      product_name_cn:'',
      price:'',
      description_en:'',
      description_cn:'',
      comment:'',
    })
  }


  

  return (
    <Card sx={{  }}>
      <CardMedia
        component="img"
        height="100"
        image={noodleimg}
        alt="New Product Image"
      />

      <CardContent>

        <Typography gutterBottom variant="h3" component="div">
            NEW PRODUCT
        </Typography>


        <Grid container spacing={0}>

          <Grid item xs={12}>
            
            {/* have to include this div to avoid error */}

            <div>
              <TextField required
                label="Product Name (EN)"
                name='product_name_en'
                size="small"
                margin="dense"
                value={newProductInfo.product_name_en}
                onChange={(e)=>{handleProductInfo(e)}}
              />

              <TextField required
                sx={{marginLeft:"1rem"}}
                label="Product Name (CN)"
                size="small"
                margin="dense" 
                name='product_name_cn'
                value={newProductInfo.product_name_cn}
                onChange={(e)=>{handleProductInfo(e)}}
              />  
            </div>
          </Grid>

          <Grid item xs={12}>
            <div>
              <TextField required
                label="Price"
                size="small"
                margin="dense" 
                name='price'
                value={newProductInfo.price}
                onChange={(e)=>{handleProductInfo(e)}}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div>
              <TextField required
                sx={{width:'20rem'}}
                multiline
                rows={5}
                label="Description (EN)"
                size="small"
                margin="dense" 
                name ='description_en'
                value={newProductInfo.description_en}
                onChange={(e)=>{handleProductInfo(e)}}
              />

              <TextField required
                multiline
                rows={5}
                sx={{marginLeft:"1rem", width:'20rem'}}
                label="Description (CN)"
                name='description_cn'
                size="small"
                margin="dense"
                value={newProductInfo.description_cn}
                onChange={(e)=>{handleProductInfo(e)}}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div>
              <TextField required
                multiline
                rows={5}
                sx={{width:'41rem'}}
                label="Comment"
                size="small"
                margin="dense" 
                name ='comment'
                value={newProductInfo.comment}
                onChange={(e)=>{handleProductInfo(e)}}
              />
            </div>
          </Grid>
        </Grid>

      </CardContent>



      <CardActions 
        sx={{
              justifyContent:'center',
              maxWidth:'42rem'
            }}>
        <Button size="large" startIcon={<DeleteSweepIcon />} onClick={()=>{handleClearButton()}} >Clear</Button>
        <Button size="large" startIcon={<CloudUploadIcon />} onClick={()=>{handleSubmitProduct()}}>Submit</Button>
      </CardActions>





    </Card>
  )
}
