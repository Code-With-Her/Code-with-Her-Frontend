import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartButton from './Product/Button'; // Adjust the path as necessary

const Navbar = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // You can add logic here to update content based on the selected language
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-bgColor text-textColor shadow-lg rounded-b-md z-50 px-6 py-4">
      {/* Navbar Container */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/" aria-label="Home">
            <img
              src="logo.png" // Update with the correct logo path
              alt="Krishi Connect Logo"
              className="h-12 sm:h-16 object-contain"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 hidden md:flex">
          <input
            type="text"
            placeholder={language === 'Nepali' ? 'कुखुरा खोज्नुहोस्' : 'Search potatoes'}
            aria-label="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-full outline-none bg-white text-textColor focus:ring-2 focus:ring-buttonGreen shadow-inner"
          />
        </div>

        {/* Actions Section */}
        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="px-3 py-2 border border-gray-300 rounded-full bg-white text-textColor shadow-sm focus:ring-2 focus:ring-buttonGreen cursor-pointer"
            aria-label="Language Selector"
          >
            <option value="English">English</option>
            <option value="Nepali">नेपाली</option>
          </select>

          {/* Login Button */}
          <Link
            to="/login"
            className="font-medium text-textColor hover:text-buttonGreen transition-colors"
          >
            Log In
          </Link>

          {/* Cart Button */}
          <CartButton />
        </div>
      </div>

      {/* Mobile Search Bar (Visible only on small screens) */}
      <div className="flex-1 mx-4 mt-2 md:hidden">
        <input
          type="text"
          placeholder={language === 'Nepali' ? 'कुखुरा खोज्नुहोस्' : 'Search...'}
          aria-label="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-full outline-none bg-white text-textColor focus:ring-2 focus:ring-buttonGreen shadow-inner"
        />
      </div>
    </nav>
  );
};

export default Navbar;