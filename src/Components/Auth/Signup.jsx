import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "saru",
    email: "saru@gmail.com",
    password: "1111",
    phone: "+977 9810652739",
    bio: "",
    latitude: "0", // Set a default value
    longitude: "0", // Set a default value
    roles: ["User"], // Default as an array
  });

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMapClick = (lat, lng) => {
    setFormData({
      ...formData,
      latitude: lat,
      longitude: lng,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append all form data
    Object.keys(formData).forEach((key) => {
      if (key === "roles") {
        // Ensure roles is sent as JSON (array format)
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    });

    if (file) data.append("img", file);

    try {
      const response = await axios.post("http://localhost:8080/api/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 mt-16">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {message && <div className="mb-4 text-center text-red-500">{message}</div>}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="img">
              Profile Picture
            </label>
            <input
              type="file"
              id="img"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <button
              type="button"
              onClick={() => handleMapClick(40.73061, -73.935242)} // Example coordinates
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              Set Location (Example: New York)
            </button>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
