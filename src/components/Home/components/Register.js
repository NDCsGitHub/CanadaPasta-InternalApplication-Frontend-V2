import React, { useEffect } from 'react'
import './login.css'
import Card from '@mui/material/Card';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHomeContext } from '../../../contexts/HomeContext'
import './register.css'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { register, reset } from '../../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Register() {

  // define navigate
  const navigate = useNavigate()

  //context for toggle register
  const {
    showRegister,
    setShowRegister,
    handleRegisterInfo,
    registerInfo,
    setRegisterInfo,
    setToggleErrorMsg,
    toggleErrorMsg,

  } = useHomeContext()


  //toggle register
  function onToggleRegister() {
    setShowRegister(!showRegister)
    setRegisterInfo({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      account_type: '',
      company: '',
    })

  }

  const handleClose = () => {
    setToggleErrorMsg(false);
  };


  // dispatch && selector
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  // submit account registration
  const handleRegister = () => {

    const userData = {
      Email: registerInfo.email,
      Password: registerInfo.password,
      First_Name: registerInfo.first_name,
      Last_Name: registerInfo.last_name,
      Account_Type: registerInfo.account_type,
      Company: registerInfo.company,
    }

    dispatch(register(userData))

  }



  useEffect(() => {

    if (isError) {
      setToggleErrorMsg(true)
      console.log(user)
    }

    if (isSuccess) {
      setToggleErrorMsg(false)
      navigate('/dashboard')
      console.log(user)
    }

    dispatch(reset())
    console.log(user)

  }, [user, isError, isSuccess])


  useEffect(() => {
    console.log(user)
  }, [user])


  return (
    <div className='loginContainer'>
      <Card className='loginCardContainer' sx={{ minWidth: 375, maxWidth: 600, padding: '2rem' }} >

        <div className='loginIconBackGround'>
          <LockOutlinedIcon className='loginIcon' fontSize='large' />
        </div>


        <h2>Register</h2>
        <Snackbar open={toggleErrorMsg} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>


        <div className='registerFieldContainer'>
          <TextField required
            sx={{ margin: '0.5rem' }}
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            name='email'
            onChange={(e) => {
              handleRegisterInfo(e)
            }}
            value={registerInfo.email}
          // error={registerIf=== ""}
          // helperText={value === "" ? 'Empty!' : ' '}
          />
          <TextField required
            sx={{ margin: '0.5rem' }}
            label="Password"
            type="password"
            name='password'
            value={registerInfo.password}
            onChange={(e) => {
              handleRegisterInfo(e)
            }}
          />

          <TextField required
            sx={{ margin: '0.5rem' }}
            label="First Name"
            name='first_name'
            value={registerInfo.first_name}
            onChange={(e) => {
              handleRegisterInfo(e)
            }}
          />

          <TextField required
            sx={{ margin: '0.5rem' }}
            label="Last Name"
            name='last_name'
            value={registerInfo.last_name}
            onChange={(e) => {
              handleRegisterInfo(e)
            }}
          />

          <TextField required
            sx={{ margin: '0.5rem' }}
            label="User Type"
            name='account_type'
            value={registerInfo.user_type}
            onChange={(e) => {
              handleRegisterInfo(e)
            }}
          />

          <TextField required
            sx={{ margin: '0.5rem' }}
            label="Company"
            name='company'
            value={registerInfo.company}
            onChange={(e) => {
              handleRegisterInfo(e)
            }}
          />
        </div>



        <Button
          className='loginButton'
          variant="contained"
          onClick={() => handleRegister()}
        >
          Sign Up
        </Button>

        <Button
          className='loginButton'
          variant="contained"
          onClick={() => onToggleRegister()}
        >
          Go Back
        </Button>
      </Card>
    </div>
  )
}
