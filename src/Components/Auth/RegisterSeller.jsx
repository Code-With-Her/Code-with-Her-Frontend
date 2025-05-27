import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after form submission
import axios from 'axios';

const RegisterSeller = () => {
  const [farmName, setFarmName] = useState('');
  const [citizenshipIMG, setCitizenshipIMG] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate(); // Initialize the navigate function

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

  const saveSellerDataToCookies = (sellerData) => {
    document.cookie = `userID=${sellerData.userID}; path=/; max-age=86400`; 
    document.cookie = `farmName=${sellerData.farmName}; path=/; max-age=86400`;
    document.cookie = `citizenshipIMG=${sellerData.citizenshipIMG}; path=/; max-age=86400`;
    document.cookie = `location=${sellerData.location}; path=/; max-age=86400`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = getCookie('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    const userID = getCookie('userID');
    const requestBody = { farmName, citizenshipIMG, location, userID };

    try {
      const response = await axios.post(
        'https://code-with-her-backend-production.up.railway.app/api/sellers/registerseller',
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === 'success') {
        saveSellerDataToCookies(response.data.seller);
        setIsSubmitting(false);
        setIsSubmitted(true); // Show the submission success message
      } else {
        setIsSubmitting(false);
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error registering seller:', error);
    }
  };

  const handleClose = () => {
    navigate('/'); // Navigate to the homepage using react-router-dom
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 bg-bgColor">
        <div className="flex flex-col items-center w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
          <div className="hidden bg-gray-100 md:block md:w-1/2">
            <img
              src="https://img.lovepik.com/photo/50247/5258.jpg_wh300.jpg"
              alt="Login Illustration"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg register-seller mt-28">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Register Seller</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">Farm Name</label>
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
                <label className="block mb-2 text-sm font-semibold text-gray-700">Citizenship Image URL</label>
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
                <label className="block mb-2 text-sm font-semibold text-gray-700">Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonGreen"
                >
                  <option value="" disabled>Select your location</option>
                  <option value="Mahendranagar">Mahendranagar</option>
                  <option value="Bhimdatt">Bhimdatt</option>
                  <option value="Katan">Katan</option>
                  <option value="Janaki Tole">Janaki Tole</option>
                </select>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-semibold text-white transition-colors rounded-lg shadow-md bg-buttonGreen hover:bg-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-center text-green-500">Congratulations!</h3>
            <p className="mt-2 text-center text-gray-700">Your KYC has been successfully verified.</p>
            <div className="mt-4 text-center">
              <button
                onClick={handleClose}
                className="mt-4 px-4 py-2 text-white bg-buttonGreen hover:bg-green-700 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterSeller;
