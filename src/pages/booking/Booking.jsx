import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/banner/Banner'
import ServiceList from '../booking/ServiceList'
import Stylist from '../booking/Stylist'
import BookingPage from '../booking/BookingPage'
import Footer from '../component/footer/Footer'

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
        <ServiceList />
        <Stylist />
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4">
        <div class="flex justify-center">
          <img src="./Image/img1.jpg" alt="Image 1" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center">
          <img src="./Image/img2.jpg" alt="Image 2" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center">
          <img src="./Image/img3.jpg" alt="Image 3" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center">
          <img src="./Image/img4.jpg" alt="Image 4" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center">
          <img src="./Image/img5.jpg" alt="Image 5" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center">
          <img src="./Image/img6.jpg" alt="Image 6" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center">
          <img src="./Image/img7.jpg" alt="Image 7" class="w-full h-full object-cover" />
        </div>
        <div class="flex justify-center">
          <img src="./Image/img8.jpg" alt="Image 8" class="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <BookingPage/>
      </div>
      <Footer/>
    </>
  )
}

export default Booking
