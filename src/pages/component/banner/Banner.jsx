import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <>
            {/* Top Fixed Banner */}
            <Link to="/booking" className="w-full">
                <div className="w-full h-[40px] flex justify-center items-center bg-[#DED2C5] hover:bg-[#b0a79d] transition duration-300 cursor-pointer">
                    <div className="text-sm font-serif font-normal text-black flex items-center gap-[18px]">
                        <span>Book Your Appointment Now</span>
                        <div>
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="arrow-icon"
                            >
                                <path
                                    d="M8.293 2.293C8.48053 2.10553 8.73484 2.00021 9 2.00021C9.26516 2.00021 9.51947 2.10553 9.707 2.293L14.207 6.793C14.3945 6.98053 14.4998 7.23484 14.4998 7.5C14.4998 7.76516 14.3945 8.01947 14.207 8.207L9.707 12.707C9.5184 12.8892 9.2658 12.99 9.0036 12.9877C8.7414 12.9854 8.49059 12.8802 8.30518 12.6948C8.11977 12.5094 8.0146 12.2586 8.01233 11.9964C8.01005 11.7342 8.11084 11.4816 8.293 11.293L11 8.5H1.5C1.23478 8.5 0.98043 8.39464 0.792893 8.20711C0.605357 8.01957 0.5 7.76522 0.5 7.5C0.5 7.23478 0.605357 6.98043 0.792893 6.79289C0.98043 6.60536 1.23478 6.5 1.5 6.5H11L8.293 3.707C8.10553 3.51947 8.00021 3.26516 8.00021 3C8.00021 2.73484 8.10553 2.48053 8.293 2.293Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Banner;
