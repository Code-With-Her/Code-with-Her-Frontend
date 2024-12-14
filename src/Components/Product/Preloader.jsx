import React from "react";
import crop from "/Crop.png"; // Update with the correct path to your logo image

const Preloader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white-800">
      <div className="flex flex-col items-center text-4xl font-bold text-white">
        {/* Image above the text */}
        <div className="mb-4">
          <img src={crop} alt="Logcrop" className="w-20 h-20" /> {/* Adjust size as needed */}
        </div>
        {/* Text Section */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-green-800">कृषि</span>
            <span className="text-green-800">Connect</span>
          </div>
          <div className="flex items-center mt-4 space-x-1">
            <div className="w-3 h-3 delay-100 bg-green-800 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 delay-200 bg-green-800 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 delay-300 bg-green-800 rounded-full animate-bounce"></div>
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
    </div>
  );
};

export default Preloader;
