import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/banner/Banner'
import ServiceList from './ServiceList'

function Booking() {
  return (
    <>
      <Banner />
      <Navbar />

      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <img
          src="./Image/BookingHero.png"
          alt="Hero Section"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute -translate-x-2/4 -translate-y-2/4 text-center text-white left-2/4 top-2/4">
          <div className="text-3xl mb-5 max-sm:text-2xl word-spacing-[0px]">
            JOIN WITH US TODAY
          </div>
          <div className="text-[80px] max-sm:text-[40px] font-serif">BOOK ONLINE</div>
        </div>
      </div>
      <div> 
        <ServiceList/>
      </div>
    </>
  )
}

export default Booking
