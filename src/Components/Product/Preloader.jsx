// src/components/Preloader.js

import React from "react";
import logo from "/logo.png"; // Import the logo image

const Preloader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-green-700">
      <div className="flex flex-col items-center text-4xl font-bold text-white">
        {/* Display the logo image */}
        <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />

        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">कृषि</span>
          <span className="text-yellow-500">Connect</span>
        </div>
        <div className="flex items-center mt-4 space-x-1">
          <div className="w-3 h-3 delay-100 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 delay-200 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 delay-300 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce delay-400"></div>
        </div>
        <div className="mt-8">
          <button className="flex items-center px-4 py-2 text-white bg-orange-500 rounded-full">
            <span className="mr-2">Continue</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 5l8 5-8 5V5z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preloader;