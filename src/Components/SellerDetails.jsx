import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaStar, FaPhoneAlt, FaMapMarkerAlt, FaIdBadge,FaUser, FaRegComment } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const SellerDetails = () => {
  const { id } = useParams(); // Get the seller ID from the URL
  const [seller, setSeller] = useState(null);
  const [reviews, setReviews] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellerAndReviews = async () => {
      try {
        // Fetch seller details
        const sellerResponse = await axios.get(`http://localhost:8080/api/sellers/sellers/${id}`);
        setSeller(sellerResponse.data.seller);

        // Fetch reviews for the seller
        const reviewsResponse = await axios.get(`http://localhost:8080/api/reviews/${id}`);
        setReviews(reviewsResponse.data.reviews || []); // Ensure reviews is an array

        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || 'Error fetching seller details or reviews');
        setLoading(false);
      }
    };

    fetchSellerAndReviews();
  }, [id]);

  const ReviewForm = () => {
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(1); // Default rating to 1
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!reviewText || !rating) {
        toast.error("Please fill in all fields.");
        return;
      }

      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:8080/api/reviews/",
          {
            sellerId: id, // Use the seller's ID from the URL
            reviewText,
            rating,
          },
          { withCredentials: true } // Send cookies for authentication
        );

        toast.success("Review submitted successfully!");
        setReviewText("");
        setRating(1); // Reset the rating

        // Refresh reviews after submitting
        const updatedReviews = await axios.get(`http://localhost:8080/api/reviews/${id}`);
        setReviews(updatedReviews.data.reviews || []); // Ensure reviews is an array
      } catch (error) {
        console.error("Error submitting review:", error);
        toast.error(error.response?.data?.message || "Failed to submit review.");
      } finally {
        setLoading(false);
      }
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="reviewText" className="block text-lg font-medium text-gray-700 mb-2">
              Share your review
            </label>
            <textarea
              id="reviewText"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg placeholder-gray-400"
              rows={5}
            />
          </div>
  
          <div className="mb-6">
            <label htmlFor="rating" className="block text-lg font-medium text-gray-700 mb-2">
              Rating (1-5)
            </label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer ${star <= rating ? 'text-green-800' : 'text-gray-300'}`}
                  onClick={() => setRating(star)}
                >
                  <FaStar size={30} />
                </span>
              ))}
            </div>
          </div>
  
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-800 text-white py-3 px-6 rounded-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-400 transition-all"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading seller details and reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p className="text-xl">Oops! Something went wrong.</p>
        <p>{error}</p>
        <p className="mt-4 text-blue-500">Please try again later or contact support.</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen p-6 flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          {/* Seller Name */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">{seller.farmName}</h1>

          {/* Location and Contact Info */}
          <div className="mb-6">
            <p className="text-lg text-gray-600 mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-orange-500" />
              <strong>Location:</strong> {seller.location}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <FaPhoneAlt className="inline mr-2 text-green-500" />
              <strong>Contact:</strong> {seller.contact}
            </p>
          </div>

          {/* Citizenship Image */}
          <div className="flex justify-center mb-6">
            <img
              src={seller.citizenshipIMG}
              alt="Citizenship"
              className="w-full max-w-xs rounded-lg shadow-md transform transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Card Footer */}
          <div className="flex justify-between items-center mt-4">
            <button className="px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all">
              Contact Seller
            </button>
            <p className="text-sm text-gray-500">Seller ID: {seller._id}</p>
          </div>
        </div>
      </div>


      <ReviewForm />
      {/* Display Reviews */}
      <div className="max-w-3xl mx-auto mt-8 px-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
        <FaRegComment className="mr-3 text-xl text-blue-500" /> Reviews
      </h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="bg-white p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="flex-1 flex items-center">
                <FaUser className="text-gray-600 text-xl mr-2" />
                <span className="font-semibold text-gray-800">{review.user.email}</span>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-xl ${index < review.rating ? 'text-green-800' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-gray-600 font-medium">{review.rating}/5</span>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              <FaRegComment className="mr-2 text-gray-500" /> {review.reviewText}
            </p>
          </div>
        ))
      ) : (
        <p className="text-lg text-gray-600 text-center">
          <FaRegComment className="mr-2 text-gray-500" />
          No reviews yet. Be the first to leave one and help others!
        </p>
      )}
    </div>
    </>
  );
};

export default SellerDetails;
