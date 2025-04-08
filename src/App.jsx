import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Booking from './pages/Booking/Booking'
import Home from './pages/home/Home'
import Services from './pages/service/Services'
import Contact from './pages/contact/Contact'
import Login from './pages/auth/Login'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
