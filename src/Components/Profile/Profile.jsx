import React, { useState, useEffect } from 'react';
import { FaUser, FaEdit, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState(null); // To store geolocation
  const navigate = useNavigate();

  useEffect(() => {
    const userDataFromCookie = Cookies.get('userData') ? JSON.parse(Cookies.get('userData')) : null;
    const tokenFromCookie = Cookies.get('userData'); // Fix: Ensure you're getting the token correctly

    if (!userDataFromCookie || !tokenFromCookie) {
      setError('We could not find your user data or token. Please log in again.');
      setLoading(false);
      navigate('/login');
      return;
    }

    setUserData(userDataFromCookie);
    setToken(tokenFromCookie);

    // Get the user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (err) => {
          setError('Unable to retrieve your location. Please enable location services.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
    }

    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove('userData');
    Cookies.remove('token');
    navigate('/login');
  };

  const center = {
    lat: userLocation?.lat || 0,
    lng: userLocation?.lng || 0
  };

  if (loading) {
    return <div className="text-center py-4 text-lg text-gray-600">Loading your profile...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-lg text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200 mt-14">
      <h2 className="text-header-3 font-bold text-center text-textColor mb-6">User Profile</h2>

      {/* Profile Image and Basic Info */}
      <div className="flex items-center justify-center mb-8 space-x-8">
        <div className="w-32 h-32 rounded-full border-4 border-buttonGreen overflow-hidden shadow-lg">
          {userData.user.profileImage ? (
            <img src={userData.user.profileImage} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600 text-lg">
              No Image
            </div>
          )}
        </div>

        <div className="flex flex-col items-start space-y-2">
          <p className="text-3xl font-semibold text-textColor">{userData.user.name}</p>
          <p className="text-lg text-gray-600">{userData.user.email}</p>
        </div>
      </div>

      {/* User Info */}
      <div className="space-y-6">
        <div className="flex items-center justify-start text-lg text-textColor">
          <FaUser className="mr-2 text-xl text-buttonGreen" />
          <p className="font-semibold">Admin Status:</p>
          <p className={`font-medium ml-2 ${userData.user.isAdmin ? 'text-green-500' : 'text-red-500'}`}>
            {userData.user.isAdmin ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="flex items-center justify-start text-lg text-textColor">
          <FaCheckCircle className="mr-2 text-xl text-buttonGreen" />
          <p className="font-semibold">Verified:</p>
          <p className={`font-medium ml-2 ${userData.user.isVerified ? 'text-green-500' : 'text-red-500'}`}>
            {userData.user.isVerified ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="flex items-center justify-start text-lg text-textColor">
          <FaMapMarkerAlt className="mr-2 text-xl text-buttonGreen" />
          <p className="font-semibold">Location:</p>
        </div>
      </div>

      {/* Google Map for Location */}
      <div className="mt-8 h-80">
        <LoadScript googleMapsApiKey="AIzaSyBr8cVmDF8jtHJCi4zIviputfj6v5jtHWA">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            onLoad={() => console.log('Map Loaded')}
            onError={() => setError('Failed to load the map. Please check your network or API key.')}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 space-y-4 text-center">
        <div className="flex flex-col items-center sm:space-y-4 lg:space-x-4 lg:flex-row">
          <button className="bg-transparent border-2 border-red-500 text-red-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-buttonGreen hover:text-white hover:border-buttonGreen focus:outline-none focus:ring-2 focus:ring-buttonGreen transition duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 flex items-center justify-center space-x-2">
            <FaEdit className="text-red-500 text-xl hover:text-white" />
            <span>Edit Profile</span>
          </button>

          <button
            onClick={handleLogout}
            className="bg-transparent border-2 border-red-500 text-red-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 flex items-center justify-center space-x-2"
          >
            <BsFillPersonFill className="text-red-500 text-xl hover:text-white" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
