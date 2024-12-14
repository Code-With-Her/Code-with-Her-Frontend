import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { MdPriceCheck, MdInventory } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // For navigation
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const colorScheme = {
    buttonGreen: "#0C821F",
    bgColor: "#FCFCFC",
    textColor: "#21242A",
    orange: "#fcaa06",
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${id}`); // Fetch product by ID
        const data = await response.json();

        if (response.ok) {
          setProduct(data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // The effect runs when the product ID changes

  if (loading) return <div className="text-center py-20 text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto py-12 px-6 mt-16 bg-bgColor">
      {product && (
        <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto overflow-hidden">
          {/* Product Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={product.images}
              alt={product.productName}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Product Content */}
          <div className="p-8 space-y-6">
            {/* Product Name */}
            <h1 className="text-4xl font-extrabold text-gray-800 flex items-center space-x-3">
              {product.productName}
            </h1>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <MdPriceCheck className="text-green-600 text-2xl" />
                <div>
                  <h4 className="font-semibold text-gray-800">Per Kg:</h4>
                  <p className="text-buttonGreen font-medium">Rs {product.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MdInventory className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold text-gray-800">Stock:</h4>
                  <p className="text-gray-600">{product.stock} Kg</p>
                </div>
              </div>
            </div>

            {/* Seller Information */}
            <div className="flex items-center space-x-2 mt-4">
              <HiOutlineMail className="text-gray-600 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Seller Information:</h4>
                <p className="text-gray-600">Email: {product.seller.email}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button
                className="w-full bg-buttonGreen hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <FaArrowLeft />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
