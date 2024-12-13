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
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-4 shadow-lg bg-bgColor text-textColor rounded-b-md">
      {/* Navbar Container */}
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/" aria-label="Home">
            <img
              src="Logo.jpeg" 
              alt="Krishi Connect Logo"
              className="object-contain h-12 sm:h-16"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 hidden mx-4 md:flex">
          <input
            type="text"
            placeholder={language === 'Nepali' ? 'Hariyo saag' : 'Search potatoes'}
            aria-label="Search"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-inner outline-none text-textColor focus:ring-2 focus:ring-buttonGreen"
          />
        </div>

        {/* Actions Section */}
        <div className="flex items-center space-x-6">
          {/* Language Selector */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer text-textColor focus:ring-2 focus:ring-buttonGreen"
            aria-label="Language Selector"
          >
            <option value="English">English</option>
            <option value="Nepali">नेपाली</option>
          </select>

          {/* Login Button */}
          <Link
            to="/login"
            className="font-medium transition-colors text-textColor hover:text-buttonGreen"
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
          placeholder={language === 'Nepali' ? 'Hariyo Saag' : 'Search...'}
          aria-label="Search"
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-inner outline-none text-textColor focus:ring-2 focus:ring-buttonGreen"
        />
      </div>
    </nav>
  );
};

export default Navbar;
