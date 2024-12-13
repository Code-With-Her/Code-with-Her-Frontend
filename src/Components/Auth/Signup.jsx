import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import img from "/signin.jpg";
import L from "leaflet";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    latitude: "0",
    longitude: "0",
    roles: "User", // Default role as 'User'
  });

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [signingUp, setSigningUp] = useState(false);
  const [verificationPopup, setVerificationPopup] = useState(false);
  const [step, setStep] = useState(1); // Track the current step
  const [map, setMap] = useState(null); // State to hold map reference
  const mapContainer = useRef(null); // Ref for map container

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (file) data.append("img", file);

    try {
      const response = await axios.post("http://localhost:8080/api/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data.message);
      setVerificationPopup(true);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    } finally {
      setSigningUp(false);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  // Initialize Leaflet map when component mounts
  useEffect(() => {
    if (mapContainer.current && !map) {
      const initialMap = L.map(mapContainer.current, {
        center: [37.4239163, -122.0947209], // Default center coordinates
        zoom: 17,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(initialMap);

      // Set initial marker
      const marker = L.marker([37.4239163, -122.0947209]).addTo(initialMap);

      // Update latitude and longitude when user clicks the map
      initialMap.on('click', (e) => {
        setFormData({
          ...formData,
          latitude: e.latlng.lat,
          longitude: e.latlng.lng,
        });

        // Move marker to clicked position
        marker.setLatLng(e.latlng);
      });

      setMap(initialMap); // Save map reference in state
    }
  }, [map, formData]); // Only initialize map once

  return (
    <div className="min-h-screen bg-bgColor flex items-center justify-center py-10 mt-16">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Form */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-6 text-textColor">Sign Up</h2>
          {message && <div className="mb-4 text-center text-red-500">{message}</div>}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Full Name, Email, Password */}
            {step === 1 && (
              <>
                <div className="mb-4">
                  <label className="block text-lg mb-2" htmlFor="fullname">Full Name</label>
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

                <div className="mb-4">
                  <label className="block text-lg mb-2" htmlFor="email">Email</label>
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

                <div className="mb-4">
                  <label className="block text-lg mb-2" htmlFor="password">Password</label>
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
              </>
            )}

            {/* Step 2: Phone, Bio, Role */}
            {step === 2 && (
              <>
                <div className="mb-4">
                  <label className="block text-lg mb-2" htmlFor="phone">Phone</label>
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

                <div className="mb-4">
                  <label className="block text-lg mb-2" htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2" htmlFor="roles">Role</label>
                  <select
                    name="roles"
                    value={formData.roles}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  >
                    <option value="User">User</option>
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Rider">Rider</option>
                  </select>
                </div>
              </>
            )}

            {/* Step 3: Image Upload */}
            {step === 3 && (
              <>
                <div className="mb-4">
                  <label className="block text-lg mb-2" htmlFor="img">Profile Picture</label>
                  <input
                    type="file"
                    id="img"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg mb-2">Set Location on Map</label>
                  <div
                    id="map"
                    ref={mapContainer}
                    style={{ height: "300px", width: "100%", borderRadius: "8px" }}
                  />
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="mt-6 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Previous
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-buttonGreen text-white py-2 rounded-lg hover:bg-green-600"
                  disabled={signingUp}
                >
                  {signingUp ? "Signing Up..." : "Sign Up"}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right side: Image */}
        <div className="flex items-center justify-center">
          <img src={img} alt="Sign Up" className="w-full h-auto max-w-md rounded-lg" />
        </div>
      </div>

      {/* Verification Popup */}
      {verificationPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
            <p className="text-lg mb-6">A verification link has been sent to your email. Please check your email to verify your account and log in.</p>
            <button
              onClick={() => setVerificationPopup(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
