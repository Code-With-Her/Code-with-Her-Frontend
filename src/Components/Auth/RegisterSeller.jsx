import React, { useState } from 'react';
import axios from 'axios';

const RegisterSeller = () => {
  // State to hold form data
  const [farmName, setFarmName] = useState('');
  const [citizenshipIMG, setCitizenshipIMG] = useState('');
  const [location, setLocation] = useState('');

  // Get userID from cookies
  const getUserIDFromCookies = () => {
    const cookies = document.cookie.split(';');
    let userID = '';
    cookies.forEach(cookie => {
      if (cookie.trim().startsWith('userID=')) {
        userID = cookie.split('=')[1];
      }
    });
    return userID;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the JWT token from cookies (assuming it's stored in the token cookie)
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token=')).split('=')[1];

    if (!token) {
      console.error('No token found');
      return;
    }

    // Prepare the data to send to the backend
    const userID = getUserIDFromCookies();

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

      if (response.data.status === 'success') {
        console.log('Seller registered:', response.data.seller);
        // Optionally, redirect or reset the form
      }
    } catch (error) {
      console.error('Error registering seller:', error);
    }
  };

  return (
    <div className="register-seller mt-20">
      <h2>Register Seller</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Farm Name</label>
          <input
            type="text"
            value={farmName}
            onChange={(e) => setFarmName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Citizenship Image URL</label>
          <input
            type="text"
            value={citizenshipIMG}
            onChange={(e) => setCitizenshipIMG(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterSeller;
