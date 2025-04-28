import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Booking from './pages/booking/Booking'
import Home from './pages/home/Home'
import Services from './pages/service/Services'
import Contact from './pages/contact/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import PaymentSuccess from './pages/payment/Payment'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
