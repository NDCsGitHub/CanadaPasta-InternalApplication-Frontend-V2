/* eslint-disable default-case */
import React from 'react'
import './sidemenu.css'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { useDashboardContext } from '../../../../contexts/DashboardContext'
import smallLogo from '../../../../img/logo_画板 1.png'
import Home from '@mui/icons-material/Home';
// import NewOrder from '@mui/icons-material/AddShoppingCart';
import Order from '@mui/icons-material/ShoppingCart';
import Product from '@mui/icons-material/DinnerDining';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { logout } from '../../../../features/auth/authSlice'
const drawerWidth = 240;



const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    zIndex: '0',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);




const sidemenuButton = ['Home', 'Orders', 'Customers', 'Products'];





export default function Sidemenu() {

    // allow dispatch
    const dispatch = useDispatch()

    // set redirect history after login 
    const navigate = useNavigate()

    //Dashboard Context
    const { open, setOpen, handleSidemenuState, } = useDashboardContext()
    const theme = useTheme();




    const handleDrawerClose = () => {
        setOpen(false);
    };


    function handleLogout() {
        localStorage.clear()
        dispatch(logout())
        navigate('/')
    }



    return (
        <Drawer variant="permanent" open={open}>

            <DrawerHeader>

                <img alt='Header Logo' className='headerImg' src={smallLogo} />

                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>


            <Divider />


            <List>
                {sidemenuButton.map((text, index) => (


                    <ListItemButton
                        key={index}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        textcontent={text}
                        onClick={() => {
                            handleSidemenuState(text)
                        }}
                    >

                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {(() => {
                                switch (index) {
                                    case 0:
                                        return <Home fontSize="large" />
                                    case 1:
                                        return <Order fontSize="large" />
                                    case 2:
                                        return <PersonIcon fontSize="large" />
                                    case 3:
                                        return <Product fontSize="large" />
                                }
                            })()}
                        </ListItemIcon>

                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />

                    </ListItemButton>

                ))}
            </List>



            <Divider />



            <List className='sidemenuBottomList'>

                <div>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,

                        }}
                        onClick={() => {
                            handleSidemenuState('Create Order')
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AddShoppingCartIcon fontSize="large" sx={{ color: 'white', background: '#ff928b', borderRadius: '5px', padding: '5px' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Create Order'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        onClick={() => {
                            handleSidemenuState('New Customer')
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <PersonAddIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary={'New Customer'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>

                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        onClick={() => {
                            handleSidemenuState('New Product')
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <CreateNewFolderIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primary={'New Product'} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </div>


                <Divider />


                <div>
                    <ListItemButton
                        className='logoutButton'
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            maxHeight: 48,
                        }}
                        onClick={() => {
                            handleSidemenuState('Account')
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <ManageAccountsIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Account'} sx={{ opacity: open ? 1 : 0, fontWeight: 'bolder', }} />
                    </ListItemButton>


                    <ListItemButton
                        className='logoutButton'
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            maxHeight: 48,
                        }}
                        onClick={() => handleLogout()}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LogoutIcon sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Log Out'} sx={{ opacity: open ? 1 : 0, fontWeight: 'bolder', }} />
                    </ListItemButton>
                </div>


            </List>


        </Drawer>
    )
}
