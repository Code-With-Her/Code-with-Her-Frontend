import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [language, setLanguage] = useState('English');
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

  // Fetch user data from cookies on component mount
  useEffect(() => {
    const userData = Cookies.get('userData'); // Retrieve the data from cookies
    if (userData) {
      setUser(JSON.parse(userData)); // Parse the JSON string into an object
    }
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // You can add logic here to update content based on the selected language
  };

  const handleLogout = () => {
    Cookies.remove('userData'); // Clear the cookie on logout
    setUser(null); // Reset user state
    setDropdownOpen(false); // Close the dropdown
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-bgColor text-textColor shadow-lg z-50 px-6 py-4">
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

        {/* Search Bar (Web) */}
        <div className="flex-1 mx-4 hidden md:flex justify-center">
          <input
            type="text"
            placeholder={language === 'Nepali' ? 'कुखुरा खोज्नुहोस्' : 'Search potatoes'}
            aria-label="Search"
            className="w-96 px-4 py-2 border border-gray-300 rounded-full outline-none bg-white text-textColor focus:ring-2 focus:ring-buttonGreen shadow-inner"
          />
        </div>

        {/* Actions Section */}
        <div className="flex items-center space-x-4">
          
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

          {/* User Section */}
          {user ? (
            <div className="relative">
              <img
                src={user.user.profileImage}
                alt={user.user.name}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on profile image click
              />
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 text-textColor">
                  <ul>
                    <li>
                      <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-200">Profile</Link>
                    </li>
                    <li>
                      <Link to="/setting" className="block px-4 py-2 text-sm hover:bg-gray-200">Settings</Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="font-medium text-textColor hover:text-buttonGreen transition-colors"
            >
              Log In
            </Link>
          )}

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
