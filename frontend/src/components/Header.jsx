import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="bg-blue-100 py-16 text-center">
      <h2 className="text-2xl font-bold">Book an Appointment</h2>
      <p className="text-gray-700 mt-2">
        Find trusted doctors and schedule your visit easily.
      </p>
      <img src="..." alt="" className="mx-auto mt-6" />

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={assets.header_img}
          alt="Doctor"
          className="w-48 h-auto rounded"
        />
      </div>
    </div>
  );
};

export default Header;
