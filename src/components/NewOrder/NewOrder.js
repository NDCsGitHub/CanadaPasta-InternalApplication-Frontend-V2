import * as React from 'react';
import "./newOrder.css";
import OrderInfo from './components/orderInfo/OrderInfo'
import ProductCatalog from './components/ProductCatalog/ProductCatalog'
// import noodle2 from '../../img/noodle2.jpg'
import ProductOptions from './components/ProductCatalog/ProductOptions'
import { useProductCatalogContext } from '../../contexts/NewOrderContexts/ProductCatalogContext'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';




export default function NewOrder() {

    // need to include open drawer here along with its state, otherwise animation would not work.
    const {openModel, setOpenModel} = useProductCatalogContext()

    function toggleDrawer(e){
        setOpenModel((prev) => !prev)
    }

    return (
    <>
        
        <OrderInfo/>
        <ProductCatalog/>
    

        {/* ternary statement to control toggle right model*/}

    
        <Drawer
            className="productOptionDrawer"
            anchor='right'
            open = {openModel}
            onClose={(e)=>toggleDrawer(e)}
            variant = 'temporary'
            PaperProps={{
                square:false,
                sx:{
                    borderRadius:'30px 0 0 20px',
                }
            }}
        >

            <Box 
                sx={{
                    width:600,
                    padding:1,
                }}
            >

                <ProductOptions/>

            </Box>
        </Drawer>

    </>
    )
}















