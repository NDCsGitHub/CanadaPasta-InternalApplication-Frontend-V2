import React from 'react'
import './home.css'

import Filler from './components/Filler'
import Register from './components/Register'
import Login from './components/Login'
import { useHomeContext } from '../../contexts/HomeContext'


export default function Home() {

  const { showRegister } = useHomeContext()

  return (
    <div className='homepage'>

      {showRegister === true ? <Register /> : <Login />}

      <Filler />
    </div>
  )
}
