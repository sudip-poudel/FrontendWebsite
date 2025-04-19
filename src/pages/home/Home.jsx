import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Banner from '../component/banner/Banner'
import Footer from '../component/footer/Footer'

function Home() {
    return (
        <>
            <Banner />
            <Navbar />
            <section className="relative w-full h-[889px]">
                <img src="./Image/HeroSection.jpg" alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute w-full h-full opacity-40 bg-[#0F0E0E] left-0 top-0" />
                <div className="absolute text-white left-[218px] top-[292px] max-md:left-[120px] max-sm:left-5 max-sm:top-[200px]">
                    <h1 className="text-6xl mb-[23px] max-sm:text-[40px]">Epic Hair</h1>
                    <p className="text-xl mb-[15px] max-sm:text-base">
                        Experience premium hair services & discover your unique style
                    </p>
                    <button
                        className="text-xl text-[#0D0D0D] cursor-pointer bg-[#FFF9F9] mt-10 px-[43px] py-5 rounded-[25px] border-[none] transition duration-300 transform hover:scale-105"
                        onClick={() => (window.location.href = "/booking")}
                    >
                        Book Online
                    </button>
                </div>
            </section>

            <div className="bg-white px-0 py-[50px]">
                <div className="text-center max-w-[1251px] mx-auto my-0 px-[74px] py-0 max-md:px-5 max-md:py-0">
                    <p className="text-[24px] text-[#645F5F] mb-[30px] max-sm:text-md">
                        Fuelled with a shared passion for designing beautifully nourished
                        hair, our team of elite stylists are committed to helping you achieve
                        your healthy hair goals. Your time with us will be an unforgettable
                        experience you'll look forward to time and time again.
                    </p>
                    <p className="text-[24px] text-[#645F5F] mb-[35px] max-sm:text-lg">
                        We can't wait to see you in our chairs!
                    </p>
                    <button
                        className="text-lg text-[#171616] cursor-pointer bg-[#bf997e] px-[133px] py-[21px] rounded-[25px] border-[none] transition duration-300 transform hover:scale-105 max-sm:px-[60px] max-sm:py-[15px]"
                        onClick={() => (window.location.href = "/booking")}
                    >
                        Book Now
                    </button>
                </div>
            </div>
            <section className="w-full px-4">
                <div className="grid grid-cols-3 gap-4">
                    {/* First row */}
                    <div onClick={() => window.open("https://www.instagram.com/reel/DIaFJemyWHq/", "_blank")}>
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.instagram.com/reel/DIaFJemyWHq/embed"
                            allowFullScreen
                            title="Instagram Video 1"
                        ></iframe>
                    </div>

                    <div onClick={() => window.open("https://www.instagram.com/reel/DIF7NpoSWUi/", "_blank")}>
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.instagram.com/reel/DIF7NpoSWUi/embed"
                            allowFullScreen
                            title="Instagram Video 2"
                        ></iframe>
                    </div>

                    <div onClick={() => window.open("https://www.instagram.com/reel/DHhNDdez42s/", "_blank")}>
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.instagram.com/reel/DHhNDdez42s/embed"
                            allowFullScreen
                            title="Instagram Video 3"
                        ></iframe>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                    {/* Second row */}
                    <div onClick={() => window.open("https://www.instagram.com/reel/DHSFDZZSfeL/", "_blank")}>
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.instagram.com/reel/DHSFDZZSfeL/embed"
                            allowFullScreen
                            title="Instagram Video 4"
                        ></iframe>
                    </div>

                    <div onClick={() => window.open("https://www.instagram.com/reel/DGrLOuuTQIO/", "_blank")}>
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.instagram.com/reel/DGrLOuuTQIO/embed"
                            allowFullScreen
                            title="Instagram Video 5"
                        ></iframe>
                    </div>

                    <div onClick={() => window.open("https://www.instagram.com/reel/DFgrls3SZw2/", "_blank")}>
                        <iframe
                            className="w-full aspect-video"
                            src="https://www.instagram.com/reel/DFgrls3SZw2/embed"
                            allowFullScreen
                            title="Instagram Video 6"
                        ></iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Home
