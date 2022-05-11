import React, {useEffect} from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from '@mui/material/Paper';
import './cartDetail.css'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {useNewOrderContext} from '../../../../contexts/NewOrderContexts/NewOrderContext'

const TAX_RATE = 0.13;




export default function CartDetail() {
  const {subTotal, setSubTotal, total, setTotal } = useNewOrderContext()
  const {basket, setBasket} = useProductCatalogContext()

  useEffect(() => {
    let itemtotal = basket.map((item) => item.subTotal * 1)
    let subtotals =itemtotal.reduce((prev, curr) => prev+curr)
    let finalTotal = subtotals * TAX_RATE
    setTotal((prev)=> finalTotal)
    setSubTotal(subtotals)
  },[basket])





  return (
    <div className = 'cartContainer'>

        {basket.length <= 0 ? (
            <h1>BASKET IS EMPTY</h1>
        ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} >

                      <TableHead>
                          <TableRow>
                              <TableCell className='tableHeader' align="center" colSpan={5}>
                                <Typography sx={{fontWeight:'bold',}} variant='h6'>
                                  Basket Detail
                                </Typography>
                              </TableCell>
                          </TableRow>

                          <TableRow>
                              <TableCell  >Item Info</TableCell>
                              <TableCell align="right">Qty.</TableCell>
                              <TableCell align="right">Price</TableCell>
                              <TableCell align="right">Item Total</TableCell>
                              <TableCell align="right"></TableCell>
                          </TableRow>
                      </TableHead>


                      <TableBody>
                          {/* basket items */}

                          {basket.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell>{`${item.product_name_cn} / ${item.product_name_en}`}</TableCell>
                              <TableCell align="right">{item.quantity}</TableCell>
                              <TableCell align="right">{item.price}</TableCell>
                              <TableCell align="right">{item.subTotal}</TableCell>
                              <TableCell align="center">
                                <IconButton sx={{color:'black', background:'#ffca40' }}>
                                  <DeleteForeverIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}


                          <TableRow>
                            <TableCell  className='tableHeader'  colSpan={5} />
                          </TableRow>


                          {/* bottom subtotal panel */}
                          <TableRow>
                              <TableCell rowSpan={3} />
                              <TableCell colSpan={2}>Subtotal</TableCell>
                              <TableCell align="right">{subTotal}</TableCell>
                          </TableRow>

                          <TableRow>
                              <TableCell>Tax</TableCell>
                              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                          </TableRow>

                          <TableRow>
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell align="right">{total}</TableCell>
                          </TableRow>
                          
                      </TableBody>
                    </Table>
                </TableContainer>
        )}

    </div>
  )



}


