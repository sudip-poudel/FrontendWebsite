import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/banner/Banner';
import { Link } from 'react-router-dom';
import Footer from '../component/footer/Footer';

// ContactInfo Component
function ContactInfo({
  image,
  title,
  address,
  hours,
  email,
  phone,
  isMainContact = false,
}) {
  return (
    <div className="flex gap-[115px] px-[74px] py-[60px] max-md:flex-col max-md:px-10 max-sm:px-5">
      <img
        src={image}
        alt="Salon interior"
        className="w-[526px] h-[437px] object-cover rounded-2xl shadow-lg max-lg:w-full"
      />
      <div className="flex flex-col justify-center max-md:mt-6">
        {isMainContact ? (
          <>
            <h2 className="text-3xl font-medium mb-[15px]">GET IN TOUCH</h2>
            <p className="text-2xl font-bold text-[#706C6C] text-center mb-[15px]">
              For general information, bookings and customer service
            </p>
            {phone && (
              <p className="text-2xl text-[#706C6C] mb-[15px]">ph no. {phone}</p>
            )}
            <p className="text-2xl text-[#706C6C]">E: {email}</p>
          </>
        ) : (
          <>
            {title && <h2 className="text-3xl font-bold text-[#333] mb-4">{title}</h2>}

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#444]">ADDRESS</h3>
              <p className="text-lg text-[#706C6C]">{address}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#444]">HOURS</h3>
              <p className="text-lg text-[#706C6C]">{hours}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#444]">CONTACT</h3>
              {phone && <p className="text-lg text-[#706C6C] font-medium">{phone}</p>}
              <p className="text-lg text-[#706C6C] font-medium">{email}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative h-[610px]">
      <img
        src="./Image/Contactimg.png"
        alt="Contact header"
        className="w-full h-full object-cover"
      />
      <div className="absolute bg-[rgba(0,0,0,0.30)] flex flex-col items-center justify-center inset-0">
        <h1 className="text-6xl font-medium text-white mb-8 max-md:text-5xl max-sm:text-4xl">
          Contact us.
        </h1>
        <div className="w-4/5 h-px bg-white mb-8" />
        <h2 className="text-3xl text-white text-center mb-4 max-md:text-2xl max-sm:text-xl">
          Need help? Get in touch with Epic Team!
        </h2>
        <p className="text-3xl text-white text-center max-md:text-2xl max-sm:text-xl">
          To book online,&nbsp;
          <Link to="/booking" className="underline text-white hover:text-[#e5e5e5] transition">
            click here
          </Link>
        </p>
      </div>
    </section>
  );
}

// Main Contact Page Component
export default function Contact() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />

      {/* Main Contact Info */}
      <ContactInfo
        image="./Image/contactimg2.jpg"
        hours="Mon-Sun: 9:00am - 7:00pm"
        email="hair@epicsalon.com"
        phone="+977 06145672"
        isMainContact={true}
      />

      {/* Newroad Branch */}
      <ContactInfo
        image="./Image/contactimg3.jpg"
        title="AM Hair Salon-Newroad"
        address="Newroad - prativa galli, Ganeshmansing marg, Street no 14"
        hours="Mon-Sun: 9:00am - 6:00pm"
        email="hair@epicsalon.com"
      />

      {/* Lakeside Branch */}
      <ContactInfo
        image="./Image/contactimg4.jpg"
        title="AM Hair Salon-Lakeside"
        address="Lakeside-Ozone Galli, Street no: 16 B"
        hours="Monday-Sunday: 9AM-7PM"
        email="hair@epicsalon.com"
      />
      <Footer />
    </>
  );
}
