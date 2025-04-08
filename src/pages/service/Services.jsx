import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/banner/Banner'
import CutAndStyle from './CutAndStyle'
import VIPSuite from './VIPSuite'
import FullPackage from './FullPackage'
import TonerPackage from './TonerPackage'
import Footer from '../component/footer/Footer'

function Services() {
  return (
    <>
      <Banner />
      <Navbar />
      <div>
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
          <img
            src="./Image/ImageHeroSection.png"
            alt="Hero Section"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>
        </div>

      </div>
      <div className="absolute text-white left-1/2 top-[55%] transform -translate-x-1/2 text-center">
        <h1 className="text-[80px] mb-[10px] max-sm:text-[50px] font-serif">SALON SERVICES</h1>
      </div>
      <div className="flex justify-center items-center mt-0 bg-[#ede8e1] py-5">
        <button
          className="text-lg text-[#FFF] cursor-pointer bg-[#654321] px-[133px] py-[21px] rounded-[25px] border-[none] hover:bg-[#4f4d4b] transition duration-300 max-sm:px-[60px] max-sm:py-[15px]"
          onClick={() => (window.location.href = "/booking")}
        >
          Book Online
        </button>
      </div>
      
      <div className='mt-0'>
        <FullPackage />
        <TonerPackage />
        <VIPSuite />
        <CutAndStyle />
      </div>

      <div className="flex justify-center items-center mt-0 bg-[#ede8e1] py-5">
        <button
          className="text-lg text-[#FFF] cursor-pointer bg-[#654321] px-[133px] py-[21px] rounded-[25px] border-[none] hover:bg-[#4f4d4b] transition duration-300 max-sm:px-[60px] max-sm:py-[15px]"
          onClick={() => (window.location.href = "/booking")}
        >
          Book Online
        </button>
      </div>
      <Footer/>

    </>
  )
}
export default Services
