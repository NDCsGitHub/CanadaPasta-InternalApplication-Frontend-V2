import React, { useEffect } from 'react'
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
import { useNewProductContext } from '../../contexts/NewProductContext'
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux'
import { createProduct, reset } from '../../features/product/productSlice'

export default function Newproduct() {

  // context for product
  const { newProductInfo, setNewProductInfo, handleProductInfo } = useNewProductContext()

  // selector state, and dispatch
  const { createdProduct, isLoading, isError, isSuccess, message } = useSelector((state) => state.products)
  const dispatch = useDispatch()



  // clear the form
  const handleClearButton = () => {
    setNewProductInfo({
      product_name_en: '',
      product_name_cn: '',
      price: '',
      product_type: '',
      description_en: '',
      description_cn: '',
      comment: '',
    })

  }


  // submit data and create new product
  const handleSubmit = () => {
    const newProductData = newProductInfo
    dispatch(createProduct(newProductData))
  }

  useEffect(() => {
    if (isError) {
      alert(message)
    }

    if (isSuccess) {
      alert(`Item ${createdProduct.Product_Name_EN} added! with Item ID ${createdProduct._id}`)
      handleClearButton()
    }

    dispatch(reset())

  }, [isError, isSuccess])






  return (
    <Card sx={{}}>
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
                onChange={(e) => { handleProductInfo(e) }}
              />

              <TextField required
                sx={{ marginLeft: "1rem" }}
                label="Product Name (CN)"
                size="small"
                margin="dense"
                name='product_name_cn'
                value={newProductInfo.product_name_cn}
                onChange={(e) => { handleProductInfo(e) }}
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
                onChange={(e) => { handleProductInfo(e) }}
              />

              <TextField select
                required
                size="small"
                sx={{ marginLeft: "1rem", minWidth: '13.8rem' }}
                label="Product Type"
                name='product_type'
                margin="dense"
                value={newProductInfo.product_type}
                defaultValue={''}
                onChange={(e) => { handleProductInfo(e) }}
              >
                <MenuItem value='noodle' > Noodle </MenuItem>
                <MenuItem value='chef at home' > Chef at Home </MenuItem>
                <MenuItem value='handcrafted food' > Handcrafted Food </MenuItem>
                <MenuItem value='ramen seasoning' > Ramen Seasoning </MenuItem>
              </TextField>

            </div>
          </Grid>

          <Grid item xs={12}>
            <div>
              <TextField required
                sx={{ width: '20rem' }}
                multiline
                rows={5}
                label="Description (EN)"
                size="small"
                margin="dense"
                name='description_en'
                value={newProductInfo.description_en}
                onChange={(e) => { handleProductInfo(e) }}
              />

              <TextField required
                multiline
                rows={5}
                sx={{ marginLeft: "1rem", width: '20rem' }}
                label="Description (CN)"
                name='description_cn'
                size="small"
                margin="dense"
                value={newProductInfo.description_cn}
                onChange={(e) => { handleProductInfo(e) }}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div>
              <TextField required
                multiline
                rows={5}
                sx={{ width: '41rem' }}
                label="Comment"
                size="small"
                margin="dense"
                name='comment'
                value={newProductInfo.comment}
                onChange={(e) => { handleProductInfo(e) }}
              />
            </div>
          </Grid>
        </Grid>

      </CardContent>



      <CardActions
        sx={{
          justifyContent: 'center',
          maxWidth: '42rem'
        }}>
        <Button size="large" startIcon={<DeleteSweepIcon />} onClick={() => { handleClearButton() }} >Clear</Button>
        <Button size="large" startIcon={<CloudUploadIcon />} onClick={() => { handleSubmit() }}>Submit</Button>
      </CardActions>





    </Card>
  )
}
