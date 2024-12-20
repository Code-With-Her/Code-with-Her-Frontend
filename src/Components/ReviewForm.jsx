import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar, FaPen, FaIdBadge } from "react-icons/fa"; // Font Awesome icons

const ReviewForm = () => {
  const [sellerId, setSellerId] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1); // Default rating to 1
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sellerId || !reviewText || !rating) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://code-with-her-backend.onrender.com/api/reviews/",
        {
          sellerId,
          reviewText,
          rating,
        },
        { withCredentials: true } // Send cookies for authentication
      );

      toast.success("Review submitted successfully!");
      setSellerId("");
      setReviewText("");
      setRating(1); // Reset the rating
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error(error.response?.data?.message || "Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Write a Review</h2>

      <form onSubmit={handleSubmit}>
        {/* Seller ID Input */}
        <div className="mb-3">
          <label
            htmlFor="sellerId"
            className="flex items-center text-gray-700"
          >
            <FaIdBadge className="mr-2 text-green-800" /> Seller ID
          </label>
          <input
            type="text"
            id="sellerId"
            value={sellerId}
            onChange={(e) => setSellerId(e.target.value)}
            placeholder="Enter Seller ID"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Review Text Input */}
        <div className="mb-3">
          <label
            htmlFor="reviewText"
            className="flex items-center text-gray-700"
          >
            <FaPen className="mr-2 text-blue-500" /> Review Text
          </label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here..."
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        {/* Rating Input */}
        <div className="mb-3">
          <label
            htmlFor="rating"
            className="flex items-center text-gray-700"
          >
            <FaStar className="mr-2 text-yellow-500" /> Rating (1-5)
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default ReviewForm;
