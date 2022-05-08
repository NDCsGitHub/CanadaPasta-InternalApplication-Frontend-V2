/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import {DashboardContextProvider} from './contexts/DashboardContext'
import {HomeContextProvider} from './contexts/HomeContext'
import PrivateRoute from './components/PrivateRoute.js';



export default function App() {
  
  // add motionframer in later when time allowed, will need to use react router v6 and location hook

  return (
    <Router>
      <Routes>



        <Route 
          path="/"
          element={
            <HomeContextProvider>
              <Home />
            </HomeContextProvider>
          }
        />



        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
                <DashboardContextProvider>
                  <Dashboard />
                </DashboardContextProvider>
            </PrivateRoute>
          }
        />



      </Routes>
    </Router>
  )
}



