import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/banner/Banner'
import ServicePackages from './ServicePackages'
import ServiceCard from './ServiceCard'
import CutAndStyle from './CutAndStyle'
import VIPSuite from './VIPSuite'

function Services() {
  return (
    <>
      <Banner />
      <Navbar />
      <div>
        <img src="./Image/ImageHeroSection.png" alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute text-white left-1/2 top-[55%] transform -translate-x-1/2 text-center">
        <h1 className="text-[80px] mb-[10px] max-sm:text-[50px] font-serif">SALON SERVICES</h1>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          className="text-lg text-[#FFF] cursor-pointer bg-[#654321] px-[133px] py-[21px] rounded-[25px] border-[none] hover:bg-[#4f4d4b] transition duration-300 max-sm:px-[60px] max-sm:py-[15px]"
          onClick={() => (window.location.href = "/booking")}
        >
          Book Online
        </button>
      </div>
      <div className='mt-10'>
        <ServiceCard/>
        <ServicePackages/>
        <VIPSuite/>
        <CutAndStyle/>
      </div>
    </>
  )
}
export default Services
