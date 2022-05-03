import * as React from 'react';
import "./newOrder.css";
import OrderInfo from './components/orderInfo/OrderInfo'
import ProductCatalog from './components/ProductCatalog/ProductCatalog'
// import noodle2 from '../../img/noodle2.jpg'
import ProductOptions from './components/ProductCatalog/ProductOptions'
import { useProductCatalogContext } from '../../contexts/NewOrderContexts/ProductCatalogContext'
import Drawer from '@mui/material/Drawer';


export default function NewOrder() {

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
        >

            <h1>dsadsadasd</h1>
            
        </Drawer>



    </>
    )
}















