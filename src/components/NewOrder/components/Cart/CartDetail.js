import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext'
import CartDetailOptions from './CartDetailOptions'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './cartDetail.css'




const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;






export default function CartDetail() {

  const {basket, setBasket} = useProductCatalogContext()

  console.log(basket)
  return (
    <div className = 'cartContainer'>

        {basket.length <= 0 ? (
            <h1>BASKET IS EMPTY</h1>
        ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} >

                      <TableHead>
                          <TableRow>
                              <TableCell className='tableHeader' align="center" colSpan={4}>
                                Basket Detail
                              </TableCell>
                          </TableRow>

                          <TableRow>
                              <TableCell >Item Info</TableCell>
                              <TableCell align="right">Qty.</TableCell>
                              <TableCell align="right">Price</TableCell>
                              <TableCell align="right">Subtotal</TableCell>
                          </TableRow>
                      </TableHead>


                      <TableBody>
                          {/* basket items */}
                          {rows.map((row) => (
                              <TableRow key={row.desc}>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                              </TableRow>
                          ))}


                          {/* bottom subtotal panel */}
                          <TableRow>
                              <TableCell rowSpan={3} />
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                          </TableRow>

                          <TableRow>
                              <TableCell>Tax</TableCell>
                              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                          </TableRow>

                          <TableRow>
                              <TableCell colSpan={2}>Total</TableCell>
                              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                          </TableRow>



                      </TableBody>
                    </Table>
                </TableContainer>
        )}

    </div>
  )



}


// {basket.map((itemm, index) => {
//     return <CartDetailOptions />
// })}