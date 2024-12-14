import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFC] flex flex-col items-center justify-center py-10 mt-16">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 text-[#21242A]">About Us</h2>
        
        {/* About Content */}
        <div className="text-lg text-[#21242A]">
          <p className="mb-4">
            Welcome to our application! This platform is designed to help students and professionals connect, share resources, and enhance their knowledge. Whether you are looking for notes, mock tests, or other educational materials, we aim to provide a comprehensive and user-friendly experience.
          </p>
          <p className="mb-4">
            Our mission is to offer a seamless experience for students and professionals who want to excel in their fields. With the help of our services, you can easily access resources, connect with peers, and track your progress in real time.
          </p>
          <p className="mb-4">
            We are constantly updating our platform to include new features, enhance the user experience, and ensure that all users have the resources they need to succeed. Stay tuned for new features and improvements in the coming months.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center text-[#21242A] mb-4">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.x7X2oAehk5M9IvGwO_K0PgHaHa%26pid%3DApi&f=1&ipt=d08b31ef44412d017ee3ff7aeb6d61a25cb1f6ec4c2ad35c4eaebe302e69214e&ipo=images"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-center text-[#21242A]">John Doe</h4>
              <p className="text-center text-gray-500">Founder & CEO</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.x7X2oAehk5M9IvGwO_K0PgHaHa%26pid%3DApi&f=1&ipt=d08b31ef44412d017ee3ff7aeb6d61a25cb1f6ec4c2ad35c4eaebe302e69214e&ipo=images"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-center text-[#21242A]">Jane Smith</h4>
              <p className="text-center text-gray-500">Lead Developer</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.x7X2oAehk5M9IvGwO_K0PgHaHa%26pid%3DApi&f=1&ipt=d08b31ef44412d017ee3ff7aeb6d61a25cb1f6ec4c2ad35c4eaebe302e69214e&ipo=images"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-center text-[#21242A]">Michael Johnson</h4>
              <p className="text-center text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Button */}
      <div className="mt-8 flex justify-center">
        <button className="bg-[#0C821F] text-white py-2 px-4 rounded-lg hover:bg-[#0a6d1c] transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
