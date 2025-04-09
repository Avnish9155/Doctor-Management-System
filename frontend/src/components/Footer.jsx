import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-20 pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-12 mb-12 text-sm">
        {/* Left Section */}
        <div>
          <p className="max-w-md leading-6 text-gray-700">
            Prescripto is your smart companion for healthcare, connecting
            doctors and patients seamlessly. Your health, our priority.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            GET IN TOUCH
          </h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>📞 +91 91556 24110</li>
            <li>📧 abhisinghh08@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300" />

      <p className="pt-6 text-center text-sm text-gray-500">
        © 2025 <span className="font-semibold text-gray-800">Medi Home</span> —
        All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
