import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

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

  if (!cart || cart.products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
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
    </div>
  );
};

export default Cart;
