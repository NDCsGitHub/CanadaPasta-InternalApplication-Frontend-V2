import * as React from 'react';
import "./newOrder.css";
import OrderInfo from './components/orderInfo/OrderInfo'
import ProductCatalog from './components/ProductCatalog/ProductCatalog'
// import noodle2 from '../../img/noodle2.jpg'
import ProductOptions from './components/ProductCatalog/ProductOptions'
import { useProductCatalogContext } from '../../contexts/NewOrderContexts/ProductCatalogContext'
import Test from './components/ProductCatalog/Test'


export default function NewOrder() {

    const {openModel} = useProductCatalogContext()



    return (
    <>
        
        <OrderInfo/>
        <ProductCatalog/>
    

        {/* ternary statement to control toggle right model*/}


        {openModel&& <Test/>}



    </>
    )
}















