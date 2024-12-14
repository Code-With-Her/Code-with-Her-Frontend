import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // To programmatically navigate to routes

  // Fetch user data from cookies on component mount
  useEffect(() => {
    const userData = Cookies.get("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleLogout = () => {
    Cookies.remove("userData");
    setUser(null);
    setDropdownOpen(false);
    navigate("/"); // Navigate to the home page on logout
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-bgColor text-textColor shadow-lg z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" aria-label="Home">
            <img
              src="logo.png"
              alt="Krishi Connect Logo"
              className="h-12 sm:h-16 object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="font-medium text-textColor hover:text-buttonGreen transition-colors"
          >
            Home
          </Link>
          <Link
            to="/farmers"
            className="font-medium text-textColor hover:text-buttonGreen transition-colors"
          >
            Farmers
          </Link>
          <Link
            to="/about"
            className="font-medium text-textColor hover:text-buttonGreen transition-colors"
          >
            About
          </Link>
        </div>

        {/* Search Bar (Web) */}
        <div className="hidden md:flex items-center mx-4">
          <input
            type="text"
            placeholder={
              language === "Nepali" ? "कुखुरा खोज्नुहोस्" : "Search..."
            }
            className="w-96 px-4 py-2 border border-gray-300 rounded-full bg-white text-textColor focus:ring-2 focus:ring-buttonGreen shadow-inner"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="px-3 py-2 border border-gray-300 rounded-full bg-white text-textColor shadow-sm focus:ring-2 focus:ring-buttonGreen cursor-pointer"
          >
            <option value="English">English</option>
            <option value="Nepali">नेपाली</option>
          </select>

          {/* User Profile / Login */}
          {user ? (
            <div className="relative">
              <img
                src={user.user.profileImage}
                alt={user.user.name}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                  <ul>
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/registerseller"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        Seller KYC
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
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

      {/* Mobile Search Bar */}
      <div className="md:hidden mt-2 px-4">
        <input
          type="text"
          placeholder={
            language === "Nepali" ? "कुखुरा खोज्नुहोस्" : "Search..."
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white text-textColor focus:ring-2 focus:ring-buttonGreen shadow-inner"
        />
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden flex justify-around mt-2 py-2 bg-bgColor">
        <Link
          to="/"
          className="font-medium text-textColor hover:text-buttonGreen"
        >
          Home
        </Link>
        <Link
          to="/farmers"
          className="font-medium text-textColor hover:text-buttonGreen"
        >
          Farmers
        </Link>
        <Link
          to="/about"
          className="font-medium text-textColor hover:text-buttonGreen"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
