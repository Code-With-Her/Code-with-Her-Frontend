import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { MdPriceCheck, MdInventory } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import Cookies from "js-cookie";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const colorScheme = {
    buttonGreen: "#0C821F",
    bgColor: "#FCFCFC",
    textColor: "#21242A",
    orange: "#fcaa06",
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${id}`);
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
  }, [id]);

  const addToCart = async () => {
    try {
      // Retrieve the token from localStorage or cookies
      const token = localStorage.getItem("token") || Cookies.get("token");

      // Prepare the request headers with Authorization
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      // Send POST request to the API to add the product to the cart
      const response = await axios.post(
        "http://localhost:8080/api/cart/add",
        {
          productId: product._id,
          quantity: 1, // or you can dynamically set this based on user input
        },
        { headers }
      );

      if (response.status === 200) {
        // Add product to local cart state
        setCart((prevCart) => [...prevCart, product]);
        setTotalAmount((prevTotal) => prevTotal + product.price);
        console.log("Product added to cart:", response.data);
      } else {
        setError("Failed to add product to cart");
      }
    } catch (error) {
      setError("Failed to add product to cart");
    }
  };

  if (loading) return <div className="text-center py-20 text-gray-500 mt-32">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto py-8 px-0 mt-16 bg-bgColor">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {product && (
          <div className="bg-white rounded-lg shadow-md max-w-xl w-full mx-auto overflow-hidden transition-all duration-300 hover:scale-105">
            {/* Product Image */}
            <div className="relative h-[60vh] overflow-hidden rounded-lg">
              <img
                src={product.images}
                alt={product.productName}
                className="w-full h-full object-cover"
              />
            </div>
    
            {/* Product Content */}
            <div className="p-6 space-y-4">
              {/* Product Name */}
              <h1 className="text-3xl font-semibold text-gray-800">{product.productName}</h1>
    
              {/* Product Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
    
              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MdPriceCheck className="text-green-600 text-xl" />
                  <div>
                    <h4 className="font-medium text-gray-800">Price 0.25KG:</h4>
                    <p className="text-buttonGreen font-semibold">Rs {product.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MdInventory className="text-blue-500 text-xl" />
                  <div>
                    <h4 className="font-medium text-gray-800">Stock:</h4>
                    <p className="text-gray-600">{product.stock} Kg</p>
                  </div>
                </div>
              </div>
    
              {/* Seller Information */}
              <div className="flex items-center space-x-2 mt-4">
                <HiOutlineMail className="text-gray-600 text-xl" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Seller:</h4>
                  <p className="text-gray-600">Email: {product.seller.email}</p>
                </div>
              </div>
    
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                  onClick={addToCart}
                  className="w-full bg-buttonGreen hover:bg-green-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  <FaArrowLeft />
                  <span>Go Back</span>
                </button>
              </div>
            </div>
          </div>
        )}
    
        {/* Cart Summary */}
        <div className="bg-white rounded-lg shadow-md w-full max-w-xs p-6 space-y-4 sticky top-20">
          <h3 className="text-xl font-semibold text-gray-800">Cart Summary</h3>
          <div className="space-y-2">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm text-gray-600">
                  <span>{item.productName}</span>
                  <span>Rs {item.price}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in cart</p>
            )}
          </div>
          <div className="flex justify-between text-gray-800 font-semibold text-sm">
            <span>Total</span>
            <span>Rs {totalAmount}</span>
          </div>
          <button
            className="w-full bg-buttonGreen hover:bg-green-700 text-white py-2 rounded-lg font-semibold mt-4 transition-all"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
