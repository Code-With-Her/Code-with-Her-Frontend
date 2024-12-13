import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get userData and token from cookies
    const userDataFromCookie = Cookies.get('userData') ? JSON.parse(Cookies.get('userData')) : null;
    const tokenFromCookie = Cookies.get('userData');

    // If no user data or token, redirect to login
    if (!userDataFromCookie || !tokenFromCookie) {
      console.log('User data or token not found in cookies');
      navigate('/login');
      return;
    }

    // Set the userData and token in state
    setUserData(userDataFromCookie);
    setToken(tokenFromCookie);
  }, [navigate]);

  if (!userData || !token) {
    // Render loading or error message while userData is being fetched
    return <div className="text-center py-4 text-lg text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-bgColor rounded-lg shadow-xl p-8 mt-6">
      <h2 className="text-3xl font-semibold text-center text-textColor mb-6">User Profile</h2>
      <div className="flex items-center justify-between mb-8">
        {/* Profile Image Section */}
        <div className="w-28 h-28 rounded-full border-4 border-buttonGreen overflow-hidden mr-6">
          {userData.profileImage ? (
            <img src={userData.profileImage} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600 text-lg">
              No Image
            </div>
          )}
        </div>
        <div className="flex flex-col items-start">
          <p className="text-2xl font-semibold text-textColor">{userData.name}</p>
          <p className="text-lg text-gray-700">{userData.email}</p>
        </div>
      </div>

      {/* User Info */}
      <div className="space-y-6">
        <div className="flex justify-between text-lg text-textColor">
          <p className="font-semibold">Admin Status:</p>
          <p className={`font-medium ${userData.isAdmin ? 'text-buttonGreen' : 'text-red-500'}`}>
            {userData.isAdmin ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="flex justify-between text-lg text-textColor">
          <p className="font-semibold">Verified:</p>
          <p className={`font-medium ${userData.isVerified ? 'text-buttonGreen' : 'text-red-500'}`}>
            {userData.isVerified ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="flex justify-between text-lg text-textColor">
          <p className="font-semibold">Location:</p>
          <p className="font-medium">
            {userData.location
              ? `Lat: ${userData.location.coordinates[0]}, Long: ${userData.location.coordinates[1]}`
              : 'Not available'}
          </p>
        </div>
      </div>


      {/* Edit Button Section */}
      <div className="mt-6 text-center">
        <button className="bg-buttonGreen text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-buttonGreen">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
