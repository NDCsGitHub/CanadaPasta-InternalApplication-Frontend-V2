import React, { useEffect } from 'react'
import './login.css'
import Card from '@mui/material/Card';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHomeContext } from '../../../contexts/HomeContext'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../../features/auth/authSlice'

export default function Login() {

  // navigate to other link
  const navigate = useNavigate()

  //toggle register
  function onToggleRegister() {
    setShowRegister(!showRegister)
  }

  // close login error msg
  const handleClose = () => {
    setToggleLoginErrorMsg(false);
  };



  //context for toggle register
  const {
    showRegister,
    setShowRegister,
    handleLoginInfo,
    toggleLoginErrorMsg,
    setToggleLoginErrorMsg,
    loginInfo,
  } = useHomeContext()

  //selector for importing the state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  // dispatch 
  const dispatch = useDispatch()


  // handle login 
  const handleLogin = () => {
    const userData = {
      Email: loginInfo.email,
      Password: loginInfo.password
    }
    dispatch(login(userData))
  }

  // check for Error
  useEffect(() => {

    if (isError) {
      setToggleLoginErrorMsg(true)
    }

    if (isSuccess) {
      setToggleLoginErrorMsg(false)
      navigate('/dashboard')
    }

    dispatch(reset())


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isError, isSuccess, isLoading])



  return (

    <div className='loginContainer'>
      <Card className='loginCardContainer' sx={{ minWidth: 375, maxWidth: 400 }} >

        <div className='loginIconBackGround'>
          <LockOutlinedIcon className='loginIcon' fontSize='large' />
        </div>
        <h2>Sign In</h2>

        <Snackbar open={toggleLoginErrorMsg} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            {message}
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

        <Button
          className='loginButton'
          variant="contained"
          onClick={(e) => {
            // handleLoginSubmit()
            handleLogin()
          }}
        >
          Login
        </Button>
        <Button className='loginButton' variant="contained" onClick={() => onToggleRegister()} >Register</Button>
      </Card>
    </div >

  )
}
