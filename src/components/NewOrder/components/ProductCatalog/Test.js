import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useProductCatalogContext } from '../../../../contexts/NewOrderContexts/ProductCatalogContext';


export default function TemporaryDrawer() {

    const {setOpenModel, openModel} = useProductCatalogContext()
    


  const toggleDrawer =() => {
    setOpenModel(!openModel);
  };

  

  return (

        <React.Fragment >
          <Drawer
            anchor={'right'}
            open={openModel}
            onClose={toggleDrawer(false)}
          >
            <Box
            sx={{ width: 350 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer( false)}
            >

            </Box>
          </Drawer>
        </React.Fragment>


  );
}