import React from 'react';
import { useNavigate } from 'react-router-dom';
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
      <div className="flex items-center justify-center min-h-screen bg-bgColor">
        <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
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
      <Footer />
    </>
  );
}


export default Login;
