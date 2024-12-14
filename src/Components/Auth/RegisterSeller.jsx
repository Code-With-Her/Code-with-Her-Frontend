import React, { useState } from 'react';
import axios from 'axios';

const RegisterSeller = () => {
  // State to hold form data
  const [farmName, setFarmName] = useState('');
  const [citizenshipIMG, setCitizenshipIMG] = useState('');
  const [location, setLocation] = useState('');

  // Get the value of a specific cookie by its name
  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === name) {
        return value;
      }
    }
    return null;
  };

  // Save seller data to cookies
  const saveSellerDataToCookies = (sellerData) => {
    document.cookie = `userID=${sellerData.userID}; path=/; max-age=86400`; // 1 day
    document.cookie = `farmName=${sellerData.farmName}; path=/; max-age=86400`;
    document.cookie = `citizenshipIMG=${sellerData.citizenshipIMG}; path=/; max-age=86400`;
    document.cookie = `location=${sellerData.location}; path=/; max-age=86400`;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the JWT token from cookies using the getCookie method
    const token = getCookie('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    // Prepare the data to send to the backend
    const userID = getCookie('userID');

    const requestBody = {
      farmName,
      citizenshipIMG,
      location,
      userID,
    };

    try {
      const response = await axios.post(
        'http://localhost:8080/api/sellers/registerseller', // Backend API URL
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in Authorization header
          },
        }
      );

      // Handling the response from the backend
      if (response.data.status === 'success') {
        console.log('Seller registered:', response.data.seller);
        // Save the seller data to cookies
        saveSellerDataToCookies(response.data.seller);
        // Optionally, you can redirect or reset the form after successful registration
      } else {
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error registering seller:', error);
    }
  };

  return (
    <div className="register-seller mt-28 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Seller</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Farm Name</label>
          <input
            type="text"
            value={farmName}
            onChange={(e) => setFarmName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonGreen"
            placeholder="Enter your farm name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Citizenship Image URL</label>
          <input
            type="text"
            value={citizenshipIMG}
            onChange={(e) => setCitizenshipIMG(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonGreen"
            placeholder="Enter the URL of your citizenship image"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonGreen"
            placeholder="Enter your farm's location"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-buttonGreen text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterSeller;
