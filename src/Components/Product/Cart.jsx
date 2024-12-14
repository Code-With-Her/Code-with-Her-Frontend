import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";  // Add an icon from react-icons

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  // Get the token from cookies
  const getCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  };

  // Fetch cart details
  const fetchCart = async () => {
    const token = getCookie("token");
    if (!token) {
      console.error("No token found");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:8080/api/cart/status", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === "success") {
        setCart(response.data.cart);
        setTotalPrice(response.data.totalPrice);
      } else {
        console.error("Failed to fetch cart:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  // Clear Cart (DELETE request)
  const clearCart = async () => {
    const token = getCookie("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await axios.delete("http://localhost:8080/api/cart/clear", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.status === "success") {
        // Show popup
        setShowPopup(true);

        // Clear the cart and total price in state
        setCart(null);
        setTotalPrice(0);

        // Show popup for 3 seconds then refresh the page
        setTimeout(() => {
          setShowPopup(false);  // Hide the popup
          window.location.reload();  // Refresh the page
        }, 3000);
      } else {
        console.error("Failed to clear the cart:", response.data.message);
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  useEffect(() => {
    fetchCart(); // Fetch cart details when component mounts
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Loading your cart...
      </div>
    );
  }

  // Empty Cart Design
  if (!cart || cart.products.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-6 mt-20">
        <FaShoppingCart className="text-6xl text-gray-500" /> {/* Empty cart icon */}
        <h2 className="text-3xl font-semibold text-gray-800">Your cart is empty.</h2>
        <p className="text-xl text-gray-600">Looks like you haven't added anything to your cart yet.</p>

        {/* Suggest the user to browse products */}
        <button
          onClick={() => window.location.href = '/products'} // Redirect to shop page or any product listing page
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-800 transition-colors"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cart.products.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-4 border-b border-gray-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.product.productImage || "/default-image.jpg"}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="text-sm">
                <h3 className="text-lg font-medium text-gray-800">{item.product.name}</h3>
                <p className="text-gray-600">Price: ${item.product.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="font-semibold text-gray-800">
                  Total: ${item.product.price * item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Total Price: ${totalPrice}</h3>
        <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors">
          Proceed to Checkout
        </button>
      </div>

      {/* Clear Cart Button */}
      <button
        onClick={clearCart}
        className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
      >
        Clear Cart
      </button>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded-md shadow-md z-50">
          Cart cleared successfully!
        </div>
      )}
    </div>
  );
};

export default Cart;
