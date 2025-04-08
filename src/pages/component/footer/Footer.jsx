import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#F4F0EE] text-black py-16 px-8 mt-8">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-8 mb-6">
          <a
            href="https://www.facebook.com/AnilMagar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl px-3 hover:scale-110 transition-transform duration-200"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/anilmagarhair"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl px-3 hover:scale-110 transition-transform duration-200"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@anilmagarhair"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl px-3 hover:scale-110 transition-transform duration-200"
          >
            <i className="bx bxl-tiktok"></i>
          </a>
          <a
            href="mailto:hairstylistanil4161@gmail.com"
            className="text-2xl px-3 hover:scale-110 transition-transform duration-200"
          >
            <i className="bx bxl-mail-send"></i>
          </a>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-300 my-6 w-full" />

        {/* Footer Text */}
        <p className="text-xs text-center">&copy; 2025 AM Hair Salon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
