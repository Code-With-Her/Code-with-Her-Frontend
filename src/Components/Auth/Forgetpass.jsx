import React, { useState } from 'react';

const Forgetpass = () => {
  const [role, setRole] = useState(""); // Track selected role

  return (
   <>
     <div className="flex flex-col items-center max-w-4xl p-8 mx-auto mt-20 mb-10 rounded-lg shadow-lg md:flex-row bg-bgColor text-textColor">
      {/* Illustration */}
      <div className="flex justify-center w-full mb-6 md:w-1/2 md:mb-0">
        <img
          src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"
          alt="Signup Illustration"
          className="h-auto max-w-full"
        />
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2">
        <h2 className="mb-6 text-2xl font-bold text-center">Forget Password</h2>
        <form className="space-y-4">
         
         
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
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium transition-colors rounded-md bg-buttonGreen text-bgColor hover:bg-green-700"
          >
          Send Code
          </button>

         
         
        </form>
      </div>
    </div>
    
   </>
  );
};

export default Forgetpass;

