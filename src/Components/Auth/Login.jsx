import React from 'react';
import { useNavigate } from 'react-router-dom';
import signin from '/signin.jpg'
import Footer from "../footer/Footer";

function Login() {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/'); // Navigate to the / route
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    navigate('/Forgetpass'); // Navigate to the forgot password page
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
            <form>
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
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonGreen"
                  placeholder="Enter your email"
                  required
                />
              </div>
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
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-buttonGreen"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-buttonGreen hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-buttonGreen"
                  onClick={handleLoginClick}
                >
                  Login
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
              <a
                href="/signup"
                className="font-medium text-buttonGreen hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
