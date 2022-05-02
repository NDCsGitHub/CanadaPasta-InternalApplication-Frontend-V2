import React from 'react'
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';
// import { Drawer, Animation} from 'rsuite';
import './productoption.css'
import Drawer from '@mui/material/Drawer';
  

export default function ProductOptions( ) {

  const {openModel, setOpenModel} = useProductCatalogContext()



  function toggleDrawer(e){
    setOpenModel(false)
  }

  return (

    <Drawer
        className="productOptionDrawer"
        anchor='right'
        open = {openModel}
        onClose={(e)=>toggleDrawer(e)}
        variant = 'temporary'
    >

    <h1>dsadsadasd</h1>
        
    </Drawer>

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



