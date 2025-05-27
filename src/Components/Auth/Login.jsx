import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import signin from '/signin.jpg';
import Footer from "../Footer/Footer";


function Login() {
  const navigate = useNavigate();

  // State for login credentials and feedback messages
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleLoginClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('https://code-with-her-backend-production.up.railway.app/api/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data) {
        // Save the data to cookies
        Cookies.set('userData', JSON.stringify(response.data), { expires: 7 }); // Cookie expires in 7 days
        Cookies.set('token', response.data.token, { expires: 7 });
        console.log(response.data);
        // Set success message
        setSuccess('Login successful!');
        
        // Redirect to home page and refresh the page
        setTimeout(() => {
          navigate('/'); // Navigate to the homepage
          window.location.reload(); // Refresh the page after redirection
        }, 2000); // Delay the refresh to allow the navigation
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed! Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    navigate('/Forgetpass'); // Navigate to the forgot password page
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 bg-bgColor">
        <div className="flex flex-col items-center w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
          {/* Illustration */}
          <div className="hidden bg-gray-100 md:block md:w-1/2">
            <img
              src={signin} // Referencing the image from the public folder
              alt="Login Illustration"
              className="object-cover w-full h-full"
            />
          </div>


          {/* Form */}
          <div className="w-full p-8 md:w-1/2">
            <h3 className="mb-6 text-2xl font-semibold text-center text-textColor">
              Welcome Back
            </h3>

            {/* Error or Success Messages */}
            {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
            {success && <div className="mb-4 text-sm text-green-600">{success}</div>}

            <form onSubmit={handleLoginClick}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-textColor"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonGreen"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-textColor"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonGreen"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Login Button */}
              <div className="flex items-center justify-between mb-6">
                <button
                  type="submit"
                  className={`px-4 py-2 text-sm font-medium text-white rounded-lg ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-buttonGreen hover:bg-green-800'
                  } focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-buttonGreen`}
                  disabled={loading}
                >
                  {loading ? 'Logging In...' : 'Login'}
                </button>
                <button
                  type="button"
                  className="text-sm font-medium text-buttonGreen hover:underline"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot Password?
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={handleSignUpClick}
                className="font-medium text-buttonGreen hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
