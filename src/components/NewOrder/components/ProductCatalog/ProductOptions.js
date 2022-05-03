import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
import './productoption.css'

  

export default function ProductOptions( ) {

  const {openModel, setOpenModel} = useProductCatalogContext()



  return (

 
    <div>hello</div>


  );

}






// <Animation.Slide 
// in={openModel} 
// placement='right'
// >
// <Drawer 
//     className ='productOptionDrawer'
//     size='sm' 
//     placement='right' 
//     open={openModel} 
//     onClose={() => setOpenModel(false)}
// >


//     <Drawer.Body>

//     </Drawer.Body>


// </Drawer>
// </Animation.Slide>  



