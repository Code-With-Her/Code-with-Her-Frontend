import React from 'react';

const Productdetails = () => {
  return (
    <div className="max-w-2xl p-8 mx-auto mt-20 rounded shadow-md bg-bgColor">
      <h1 className="mb-4 text-2xl font-bold text-textColor">Best Products</h1>
      <div className="flex items-start gap-6">
        {/* Product Image */}
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Potatoes"
          className="object-cover w-48 h-48 rounded"
        />

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-textColor">Potatoes</h2>
          <p className="mb-3 text-sm text-gray-500">Red potato</p>

          {/* Rating */}
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
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
            <span className="text-sm text-gray-400 line-through">RS. 100</span>
            <span className="px-2 py-1 text-xs text-white rounded bg-buttonGreen">
              40% OFF
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-4">
            <button className="px-4 py-2 font-medium bg-white border rounded text-buttonGreen border-buttonGreen hover:bg-buttonGreen hover:text-white">
              BUY
            </button>
            <button className="px-4 py-2 font-medium text-white rounded bg-buttonGreen hover:bg-green-700">
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