import React from 'react'
import {Navigate} from 'react-router-dom'




export default function PrivateRoute({ children }) {


  const token = JSON.parse(localStorage.getItem("user"));

  return (
    token? children : <Navigate to='/' />
  )
}
