import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-bgColor text-textColor">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-buttonGreen">404</h1>
        <p className="mt-4 text-xl">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-buttonGreen text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
