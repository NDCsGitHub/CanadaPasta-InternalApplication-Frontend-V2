import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const HomeContext = React.createContext()
const useHomeContext = () => {
  return useContext(HomeContext)
}


const HomeContextProvider = ({ children }) => {


  /**********************REGISTER CONTEXT START******************/
  //Show Register Panel
  const [showRegister, setShowRegister] = useState(false)
  const [toggleErrorMsg, setToggleErrorMsg] = useState(false)
  const [errorMsgText, setErrorMsgText] = useState()

  //register input state to be sent over to backend
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    user_type: '',
    company: '',
  })
  // save inputs to objects
  const handleRegisterInfo = (e) => {
    const infoName = e.target.name
    const infoText = e.target.value
    setRegisterInfo({
      ...registerInfo,
      [infoName]: infoText,
    })
  }


  // //submit register info api call
  // const handleSubmit = async () => {
  //   setToggleErrorMsg(false)
  //   setErrorMsgText('')
  //   const params = new URLSearchParams();
  //   params.append('email', registerInfo.email);
  //   params.append('password', registerInfo.password);
  //   params.append('first_name', registerInfo.first_name);
  //   params.append('last_name', registerInfo.last_name)
  //   params.append('user_type', registerInfo.user_type)
  //   params.append('company', registerInfo.company)

  //   try {
  //     const resp = await axios.post('http://localhost/v1/index.php/register',
  //       params,
  //       {
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //           'Connection': 'keep-alive',
  //         }
  //       })



  //     if (resp.data.error === true) {
  //       setToggleErrorMsg(true)
  //       setErrorMsgText(resp.data.message)
  //     } else {
  //       setShowRegister(!showRegister)
  //       setRegisterInfo({
  //         email: '',
  //         password: '',
  //         first_name: '',
  //         last_name: '',
  //         user_type: '',
  //         company: '',
  //       })
  //     }


  //   } catch (error) {
  //     setToggleErrorMsg(true)
  //     setErrorMsgText(error.response.data.message)
  //   }


  // }



  /************************REGISTER CONTEXT END****************************/


  /************************LOGIN CONTEXT START*****************************/


  // set redirect history after login 
  const navigate = useNavigate()

  // error msg and alert
  const [toggleLoginErrorMsg, setToggleLoginErrorMsg] = useState(false)

  // login input state
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  // save input values to loginInfo state
  const handleLoginInfo = (e) => {
    const infoName = e.target.name
    const infoText = e.target.value
    setLoginInfo({
      ...loginInfo,
      [infoName]: infoText
    })
  }


  // login function has been replaced by Redux
  // // submit login info to login endpoint
  // const handleLoginSubmit = async () => {
  //   setToggleLoginErrorMsg(false)
  //   const params = new URLSearchParams();
  //   params.append('email', loginInfo.email);
  //   params.append('password', loginInfo.password);

  //   try {
  //     const resp = await axios.post('http://localhost/v1/index.php/login',
  //       params,
  //       {
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded',
  //           'Connection': 'keep-alive',
  //         }
  //       })

  //     console.log(resp.data)

  //     if (resp.data.error === true) {
  //       setToggleLoginErrorMsg(true)
  //     } else {
  //       localStorage.setItem("user", JSON.stringify(resp.data))
  //       navigate('/dashboard')
  //     }

  //   } catch (error) {
  //     setToggleLoginErrorMsg(true)
  //   }
  // }










  /************************LOGIN CONTEXT END********************************/



  return (
    <HomeContext.Provider
      value={{
        showRegister,
        setShowRegister,
        handleRegisterInfo,
        registerInfo,
        toggleErrorMsg,
        setToggleErrorMsg,
        errorMsgText,
        setRegisterInfo,
        setErrorMsgText,

        handleLoginInfo,
        loginInfo,
        toggleLoginErrorMsg,
        setToggleLoginErrorMsg,

      }}
    >
      {children}
    </HomeContext.Provider>
  )
}


export { HomeContextProvider, useHomeContext, }