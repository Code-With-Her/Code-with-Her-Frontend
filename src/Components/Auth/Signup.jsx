import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "/signin.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "jeebu aidi",
    email: "aidijeewan@gmail.com",
    password: "1111",
    phone: "+9779810652734",
    bio: "I am Preety",
    latitude: "",
    longitude: "",
    roles: "",  // Default role as 'User'
  });

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [signingUp, setSigningUp] = useState(false);
  const [verificationPopup, setVerificationPopup] = useState(false);
  const [step, setStep] = useState(1); // Track the current step

  // Handle input change for form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Request notification permission and get geolocation
  const requestGeolocation = async () => {
    if ('geolocation' in navigator) {
      // Request geolocation
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Update the form data with latitude and longitude
          setFormData((prevData) => ({
            ...prevData,
            latitude,
            longitude,
          }));

          // Proceed after getting location
          askForNotifications();
        },
        (error) => {
          console.error("Error getting geolocation", error);
          setMessage("Error obtaining geolocation.");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // Ask for notification permission
  const askForNotifications = async () => {
    if (Notification.permission !== "granted") {
      try {
        await Notification.requestPermission();
        if (Notification.permission === "granted") {
          showNotification();
        }
      } catch (error) {
        console.error("Notification permission error:", error);
      }
    } else {
      showNotification();
    }
  };

  // Display a notification to the user
  const showNotification = () => {
    new Notification("Geolocation Access Granted!", {
      body: "You can now complete your signup process.",
    });
  };

  // Submit the form data and save it to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningUp(true);
    
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (file) data.append("img", file);

    try {
      const response = await axios.post("https://code-with-her-backend.onrender.com/api/register", data, {
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

  // Step navigation (Next and Previous buttons)
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    requestGeolocation(); // Request geolocation when the component is mounted
  }, []);

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
                    required
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
                  disabled={signingUp || !file} // Disable if image is not uploaded
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
