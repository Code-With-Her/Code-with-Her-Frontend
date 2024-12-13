import React from "react";

const ProductCard = ({ image, text, currentPrice, originalPrice, discount }) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg">
      <img
        src={image}
        alt="Fresh Produce"
        className="object-cover w-full h-48"
      />
      <div className="p-5 text-center">
        <p className="mb-4 text-base text-gray-700">{text}</p>
        <div className="flex items-center justify-center space-x-4">
          <span className="text-lg font-bold text-orange-500">Rs {currentPrice}</span>
          <span className="text-sm text-gray-500 line-through">Rs {originalPrice}</span>
          <span className="text-sm font-semibold text-green-500">-{discount}%</span>
        </div>
      </div>
    </div>
    
  );
};

export default ProductCard;