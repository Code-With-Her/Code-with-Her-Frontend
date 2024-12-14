import React, { useState } from 'react';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi'; // Importing React Icon for the "Create" button

const AddProduct = () => {
  const [productName, setProductName] = useState('Ful Gobi');
  const [description, setDescription] = useState('Fresh fulGobi from nearby');
  const [price, setPrice] = useState('30');
  const [stock, setStock] = useState('1');
  const [productImage, setProductImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const colorScheme = {
    buttonGreen: '#0C821F',
    bgColor: '#FCFCFC',
    textColor: '#21242A',
    orange: '#fcaa06',
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === name) {
        return value;
      }
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getCookie('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    const requestBody = {
      productName,
      description,
      price: parseFloat(price),
      stock: parseInt(stock),
      productImage,
    };

    try {
      const response = await axios.post(
        'http://localhost:8080/api/sellers/addproduct',
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status === 'success') {
        console.log('Product added successfully:', response.data.product);
        setIsModalOpen(false);
      } else {
        console.error('Product creation failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      {/* Create Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={`flex items-center justify-center w-14 h-14 fixed lg:top-[86%] top-36 lg:right-10 left-[19%] rounded-full shadow-lg bg-[${colorScheme.buttonGreen}] text-white hover:bg-[${colorScheme.orange}] transition-all z-50`}
        title="Create Product"
      >
        <FiPlus className="text-3xl" />
      </button>
     
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`w-full max-w-md mx-auto p-6 rounded-lg shadow-lg bg-[${colorScheme.bgColor}]`}
          >
            <h2
              className={`text-2xl font-semibold mb-4 text-center text-[${colorScheme.textColor}]`}
            >
              Add Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                placeholder="Product Name"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[${colorScheme.buttonGreen}]`}
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Description"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[${colorScheme.buttonGreen}]`}
              />
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                placeholder="Price"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[${colorScheme.buttonGreen}]`}
              />
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
                placeholder="Stock"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[${colorScheme.buttonGreen}]`}
              />
              <input
                type="text"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
                required
                placeholder="Product Image URL"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[${colorScheme.buttonGreen}]`}
              />
            </form>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className={`px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500`}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className={`px-4 py-2 rounded-lg shadow-md bg-[${colorScheme.buttonGreen}] text-white hover:bg-[${colorScheme.orange}]`}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
