import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
import './productoption.css'
import noodle2 from '../../../../img/noodle2.jpg'


  

 export default function ProductOptions( ) {

  const {activeModel} = useProductCatalogContext()


  console.log(activeModel)



  return (
    <div className ='optionDetailContainer'>

      <img className='product' src={noodle2} alt="Girl in a jacket" width="200" height="200" /> 

    </div>
  );



}



