import React from 'react'
import './login.css'
import Card from '@mui/material/Card';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHomeContext } from '../../../contexts/HomeContext'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function Login() {

  //context for toggle register
  const { showRegister, setShowRegister, handleLoginInfo, handleLoginSubmit, toggleLoginErrorMsg, setToggleLoginErrorMsg, errorLoginMsgText } = useHomeContext()




  //toggle register
  function onToggleRegister() {
    setShowRegister(!showRegister)
  }



  const handleClose = () => {
    setToggleLoginErrorMsg(false);
  };



  return (

    <div className='loginContainer'>
      <Card className='loginCardContainer' sx={{ minWidth: 375, maxWidth: 400 }} >

        <div className='loginIconBackGround'>
          <LockOutlinedIcon className='loginIcon' fontSize='large' />
        </div>
        <h2>Sign In</h2>

        <Snackbar open={toggleLoginErrorMsg} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            {errorLoginMsgText}
          </Alert>
        </Snackbar>

        <TextField
          label="Username"
          variant="outlined"
          margin='normal'
          name='email'
          onChange={(e) => {
            handleLoginInfo(e)
          }}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin='normal'
          name='password'
          onChange={(e) => {
            handleLoginInfo(e)
          }}
        />

        <Button className='loginButton' variant="contained" onClick={(e) => handleLoginSubmit()}>Login</Button>
        <Button className='loginButton' variant="contained" onClick={() => onToggleRegister()} >Register</Button>
      </Card>
    </div>

  )
}
