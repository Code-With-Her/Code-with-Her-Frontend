import React from "react";
import logo from "/logo.png";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#869499] to-[#E0F7FF] text-[#21242A] py-16">
      <div className="container flex flex-wrap justify-between px-8 mx-auto">
        {/* About Section */}
        <div className="max-w-xs space-y-4">
          <img src={logo} alt="Krishi Connect" className="h-24 mb-4 w-42" />
          <p className="text-sm leading-relaxed text-[#21242A]">
            We care about you. Your health is our first priority. Let us serve you the best we can.
          </p>
        </div>

        {/* Customer Care Section */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold text-[#21242A]">Customer Care</h4>
          <ul className="space-y-2 text-sm text-[#21242A]">
            <li>Helpline</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Policies</li>
          </ul>
        </div>

        {/* Leading Farmers Section */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold text-[#21242A]">Leading Farmers</h4>
          <ul className="space-y-2 text-sm text-[#21242A]">
            <li>Ram Nath</li>
            <li>Hari Rana</li>
            <li>Motiram Rana</li>
            <li>Sunita Bist</li>
            <li>Babita Chaudhari</li>
            <li>Purnima Bhatta</li>
          </ul>
        </div>

        {/* Popular Vegetables Section */}
        <div className="space-y-3">
          <h4 className="text-lg font-bold text-[#21242A]">Popular Vegetables</h4>
          <ul className="space-y-2 text-sm text-[#21242A]">
            <li>Tomato</li>
            <li>Onion</li>
            <li>Cabbage</li>
            <li>Bittergourd</li>
            <li>Bottle Gourd</li>
          </ul>
        </div>
      </div>

      {/* Sign Up Section */}
      <h4 className="mr-32 text-lg font-bold text-right text-[#21242A]">Sign Up for Newsletter!</h4>

      <div className="container flex flex-wrap items-center justify-between px-8 mx-auto mt-12">
        {/* Follow Us Section */}
        <div className="flex items-center mb-4 space-x-6 md:mb-0">
          <p className="font-serif text-3xl font-extrabold text-[#21242A] shadow-sm">Follow Us</p>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/krishiconnect"
              className="text-blue-600 transition-all transform hover:text-blue-800 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="mailto:krishiconnect@gmail.com"
              className="text-blue-600 transition-all transform hover:text-blue-800 hover:scale-110"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0">
          <form className="flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 p-3 text-sm border rounded-md md:w-80 text-[#21242A] focus:outline-none focus:ring-2 focus:ring-[#0C821F] bg-[#FCFCFC]"
            />
            <button
              type="submit"
              className="px-6 py-2 text-sm text-white transition-all rounded-md bg-[#0C821F] hover:bg-green-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 text-center">
        <p className="text-sm text-[#21242A]">
          &copy; 2024 Krishi Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;