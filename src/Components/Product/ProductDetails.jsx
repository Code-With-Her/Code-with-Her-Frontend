import React from 'react';

const Productdetails = () => {
  return (
    <div className="bg-bgColor p-8 rounded shadow-md max-w-2xl mx-auto mt-20">
      <h1 className="text-2xl font-bold text-textColor mb-4">Best Products</h1>
      <div className="flex items-start gap-6">
        {/* Product Image */}
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Potatoes"
          className="w-48 h-48 object-cover rounded"
        />

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-textColor">Potatoes</h2>
          <p className="text-sm text-gray-500 mb-3">Red potato</p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.319a1 1 0 00.95.69h6.623c.969 0 1.371 1.24.588 1.81l-5.381 3.913a1 1 0 00-.364 1.118l2.062 6.319c.3.921-.755 1.688-1.54 1.118l-5.381-3.913a1 1 0 00-1.176 0l-5.381 3.913c-.784.57-1.839-.197-1.54-1.118l2.062-6.319a1 1 0 00-.364-1.118L2.305 9.746c-.784-.57-.381-1.81.588-1.81h6.623a1 1 0 00.95-.69l2.062-6.319z"
                />
              </svg>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-lg font-bold text-textColor">RS. 60</span>
            <span className="text-sm line-through text-gray-400">RS. 100</span>
            <span className="text-xs bg-buttonGreen text-white px-2 py-1 rounded">
              40% OFF
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-4">
            <button className="bg-white text-buttonGreen font-medium px-4 py-2 rounded border border-buttonGreen hover:bg-buttonGreen hover:text-white">
              BUY
            </button>
            <button className="bg-buttonGreen text-white font-medium px-4 py-2 rounded hover:bg-green-700">
              Add to Cart
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-textColor">
            Get these fresh potatoes on 40% off on each Kilo. Hill-side
            potatoes are good for health as well as tasty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;