import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom"; // Step 1: Import Link

const Header = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-blue-300 text-gray-800 px-6 md:px-16 py-16 rounded-3xl shadow-2xl">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Book an Appointment
        </h1>
        <p className="text-lg text-gray-700">
          Find trusted doctors and schedule your appointment with ease.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          className="w-64 md:w-80 drop-shadow-xl"
          src={assets.header_img}
          alt="Doctor"
        />
      </div>
    </div>
  );
};

export default Header;
