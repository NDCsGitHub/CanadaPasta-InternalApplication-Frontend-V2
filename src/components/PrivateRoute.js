import React from 'react'
import { Navigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'



export default function PrivateRoute({ children }) {



  const user = JSON.parse(localStorage.getItem("user"));

  return (
    user ? children : <Navigate to='/' />
  )
}
