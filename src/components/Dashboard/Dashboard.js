/* eslint-disable default-case */
import React, {} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Headerbar from './components/HeaderBar/Headerbar'
import Sidemenu from './components/Sidemenu/Sidemenu'
import { styled } from '@mui/material/styles';
import {useDashboardContext} from '../../contexts/DashboardContext'
import Newproduct from '../NewProduct/Newproduct'

import { NewCustomerContextProvider } from '../../contexts/NewCustomerContext';
import Newcustomer from '../NewCustomer/Newcustomer'
import {NewProductContextProvider} from '../../contexts/NewProductContext'
import NewOrder from '../NewOrder/NewOrder'
import { NewOrderContextProvider } from '../../contexts/NewOrderContexts/NewOrderContext';
import Account from '../Account/Account'
import { AccountContextProvider } from '../../contexts/AccountContext';
import ProductList from '../ProductList/productList'
import CustomerList from '../CustomerList/customerList'
import {BusinessOrderInputContextProvider} from '../../contexts/NewOrderContexts/BusinessOrderInputContext'
import { ProductCatalogContextProvider } from '../../contexts/NewOrderContexts/ProductCatalogContext';




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  zIndex:'1',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,

}));






export default function Dashboard() {

  const {sidemenuState} = useDashboardContext()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />


        <Headerbar/>

        <Sidemenu/>

      <Box component="main" sx={{ flexGrow: 1, p: 3, background:'rgb(246, 235, 235)', height:"100vh" }}>
        <DrawerHeader />
        
        {(()=>{
              switch(sidemenuState){
                  case 'Home':
                    return <h1>this is home panel</h1>
                  case 'Orders':
                      return <h1>this is order panel</h1>
                  case 'Customers':
                      return <CustomerList />
                  case 'Products':
                      return <ProductList />
                  case 'Account':
                      return (
                        <AccountContextProvider>
                          <Account/>
                        </AccountContextProvider>
                        
                      )
                  case 'Create Order':
                      return (
                        <ProductCatalogContextProvider>
                          <BusinessOrderInputContextProvider>
                            <NewOrderContextProvider>
                              <NewOrder/>
                            </NewOrderContextProvider>
                          </BusinessOrderInputContextProvider>
                        </ProductCatalogContextProvider>
                          
                      )
                  case 'New Customer':
                      return (
                        <NewCustomerContextProvider>
                          <Newcustomer />
                        </NewCustomerContextProvider>
                      )
                  case 'New Product':
                      return (
                        <NewProductContextProvider>
                          <Newproduct /> 
                        </NewProductContextProvider>
                      )
              }
          })()}


      </Box>
    </Box>
  );
}