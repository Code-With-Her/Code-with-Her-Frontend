import React, { useState } from 'react';

const Signup = () => {
  const [role, setRole] = useState(""); // Track selected role

  return (
   <>
     <div className="flex flex-col items-center max-w-4xl p-8 mx-auto mt-20 mb-10 rounded-lg shadow-lg md:flex-row bg-bgColor text-textColor">
      {/* Illustration */}
      <div className="flex justify-center w-full mb-6 md:w-1/2 md:mb-0">
        <img
          src="https://as1.ftcdn.net/v2/jpg/04/27/59/94/1000_F_427599401_mbTarDavJSHMpkg1u0JmmaGhjWnQgOUI.jpg"
          alt="Signup Illustration"
          className="h-auto max-w-full"
        />
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2">
        <h2 className="mb-6 text-2xl font-bold text-center">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonGreen"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonGreen"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonGreen"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-1 text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonGreen"
            />
          </div>
          <div>
            <label htmlFor="role" className="block mb-1 text-sm font-medium">
              Role
            </label>
            <select
              id="role"
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonGreen"
            >
              <option value="">Select your role</option>
              <option value="Farmer">Farmer</option>
              <option value="Consumer">Consumer</option>
              <option value="Rider">Rider</option>
            </select>
          </div>

          {/* Conditional Fields */}
          {role === "Farmer" && (
            <div>
              <label
                htmlFor="citizenship"
                className="block mb-1 text-sm font-medium"
              >
                Citizenship Image
              </label>
              <input
                type="file"
                id="citizenship"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonGreen"
              />
            </div>
          )}
          {role === "Rider" && (
            <div>
              <label htmlFor="license" className="block mb-1 text-sm font-medium">
                License Image
              </label>
              <input
                type="file"
                id="license"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-buttonGreen"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium transition-colors rounded-md bg-buttonGreen text-bgColor hover:bg-green-700"
          >
            Sign Up
          </button>

          <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-buttonGreen hover:underline">
            Sign in
          </a>
        </p>
        </form>
      </div>
    </div>
    
   </>
  );
};

export default Signup;

