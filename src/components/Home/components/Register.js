import React from 'react'
import './login.css'
import Card from '@mui/material/Card';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useHomeContext} from '../../../contexts/HomeContext'
import './register.css'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



export default function Register() {

  //context for toggle register
  const {
    showRegister, 
    setShowRegister, 
    handleRegisterInfo, 
    handleSubmit, 
    registerInfo,
    setRegisterInfo,
    setErrorMsgText, 
    setToggleErrorMsg,
    toggleErrorMsg,
    errorMsgText 
  } = useHomeContext()

  //toggle register
  function onToggleRegister(){
    setShowRegister(!showRegister)
    setRegisterInfo({
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      user_type:'',
      company:'',
    })

    setToggleErrorMsg(false)
    setErrorMsgText('')
  }






  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToggleErrorMsg(false);
  };


  


  return (
    <div className='loginContainer'>
      <Card className='loginCardContainer' sx={{ minWidth: 375, maxWidth:600, padding:'2rem'}} >
        
        <div className='loginIconBackGround'>
          <LockOutlinedIcon className='loginIcon' fontSize='large'  /> 
        </div>

  
        <h2>Register</h2>
        <Snackbar open={toggleErrorMsg} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{horizontal:'center', vertical:'top'}}>
          <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
              {errorMsgText}
          </Alert>
        </Snackbar>


        <div className ='registerFieldContainer'>
            <TextField required
                sx={{margin:'0.5rem'}}
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
                sx={{margin:'0.5rem'}}
                label="Password"
                type="password"
                name='password'
                value={registerInfo.password}
                onChange={(e) => {
                    handleRegisterInfo(e)
                }}
            />

            <TextField required
                sx={{margin:'0.5rem'}}
                label="First Name"
                name='first_name'
                value={registerInfo.first_name}
                onChange={(e) => {
                    handleRegisterInfo(e)
                }}
            />

            <TextField required
                sx={{margin:'0.5rem'}}
                label="Last Name"
                name='last_name'
                value={registerInfo.last_name}
                onChange={(e) => {
                    handleRegisterInfo(e)
                }}
            />

            <TextField required
                sx={{margin:'0.5rem'}}
                label="User Type"
                name='user_type'
                value={registerInfo.user_type}
                onChange={(e) => {
                    handleRegisterInfo(e)
                }}
            />

            <TextField required
                sx={{margin:'0.5rem'}}
                label="Company"
                name='company'
                value={registerInfo.company}
                onChange={(e) => {
                    handleRegisterInfo(e)
                }}
            />
        </div>



        <Button className='loginButton' variant="contained" onClick={()=>handleSubmit()}>Sign Up</Button>      
        <Button className='loginButton' variant="contained" onClick={()=> onToggleRegister() } >Go Back</Button>
      </Card>
    </div>
  )
}
