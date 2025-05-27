import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const token = Cookies.get("token");
      const headers = { Authorization: `Bearer ${token}` };

      try {
        const response = await fetch("https://code-with-her-backend-production.up.railway.app/api/sellers/products", {
          headers,
        });
        if (!response.ok) throw new Error("Login to see Products page");

        const data = await response.json();
        if (data && data.products) {
          setProducts(data.products);
        } else {
          throw new Error("Products data is missing in the response");
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-bgColor">
        <FaSpinner className="animate-spin text-buttonGreen text-6xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8 bg-bgColor font-semibold">
        {error}
      </div>
    );
  }

  const handleCardClick = (productId) => {
    navigate(`/productdetails/${productId}`);
  };

  return (
    <div className="container mx-auto py-8 px-4 bg-bgColor mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-custom-light overflow-hidden transform  transition-all cursor-pointer"
            onClick={() => handleCardClick(product._id)}
          >
            <img
              src={product.images}
              alt={product.productName}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-header-5 font-bold text-textColor">
                {product.productName}
              </h3>
              <p className="text-body-5 text-gray-600 mt-2">
                {product.description}
              </p>
              <div className="mt-4">
                <p className="text-header-6 font-semibold text-buttonGreen">
                  Price: Rs{product.price}
                </p>
                <p className="text-body-4 text-gray-600">Stock: {product.stock} Kg</p>
              </div>
              <button className="mt-6 w-full bg-green-100 text-[#1c1d1c]  hover:text-[#eff6ff] py-2 rounded-lg hover:bg-buttonGreen transition-all">
               More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
