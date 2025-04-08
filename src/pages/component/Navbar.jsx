import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-between items-center h-[90px] bg-white px-[120px] py-[22px] max-md:px-[60px] max-sm:px-5 max-sm:py-[22px]">
            {/* Logo */}
            <div className="text-[52px] font-serif text-[#BF997E]">
                AM
            </div>

            {/* Navigation Links */}
            <div className="flex gap-9 max-sm:flex-col max-sm:items-center max-sm:gap-2.5">
                <Link to="/" className="text-lg font-light text-black hover:text-[#BF997E] transition-colors font-inter">Home</Link>
                <Link to="/services" className="text-lg font-light text-black hover:text-[#BF997E] transition-colors font-inter">Salon Services</Link>
                <Link to="/booking" className="text-lg font-light text-black hover:text-[#BF997E] transition-colors font-inter">Bookings</Link>
                <Link to="/contact" className="text-lg font-light text-black hover:text-[#BF997E] transition-colors font-inter">Contact</Link>
                <Link to="/login" className="text-lg font-light text-black hover:text-[#BF997E] transition-colors font-inter">Login</Link>


            </div>
        </nav>
    );
}

export default Navbar;