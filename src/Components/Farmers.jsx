import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Farmers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/sellers/');
        setSellers(response.data.sellers); // Assuming the response has a 'sellers' array
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#FCFCFC]">
        <div className="spinner" />
        <p className="mt-4 text-lg font-semibold text-[#21242A]">
          Loading farmers...
        </p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <>
      <div className="bg-[#FCFCFC] min-h-screen px-5 py-10">
        <h2 className="text-center text-2xl font-bold mb-6 mt-20 text-[#21242A]">
          List of Farmers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sellers.map((seller) => (
            <div
              key={seller._id}
              className="shadow-lg rounded-lg p-4 flex flex-col items-center bg-white border-2 border-[#0C821F] cursor-pointer"
              onClick={() => navigate(`/seller/${seller._id}`)}
            >
              <img
                src={seller.citizenshipIMG}
                alt="Citizenship"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-[#21242A]">
                {seller.farmName}
              </h3>
              <p className="text-sm mb-4 text-[#21242A]">
                Location: {seller.location}
              </p>
              <button
                className="px-4 py-2 rounded-md font-semibold bg-[#0C821F] text-white border-none cursor-pointer transition-all 
                hover:bg-gray-200 hover:text-[#0C821F] hover:ring-2 hover:ring-[#0C821F]"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click
                  alert(`Contact Farmer: ${seller.farmName}`);
                }}
              >
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Farmers;
