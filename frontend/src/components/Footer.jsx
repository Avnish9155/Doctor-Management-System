import React from "react";

const Footer = () => {
  return (
    <div className="px-4 py-10 bg-gray-100 text-sm text-gray-700">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
        {/* Left Section */}
        <div className="md:w-1/2">
          <p>
            Multi Care is your simple companion for healthcare, helping connect
            doctors and patients. Your health matters to us.
          </p>
        </div>

        {/* Right Section - Company Links */}
        <div>
          <p className="font-semibold mb-2 text-gray-800">Company</p>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
          <p className="font-semibold mb-2 text-gray-800">Get in Touch</p>
          <ul className="space-y-1">
            <li>📞 +91 91556 24110</li>
            <li>📧 abhisinghh08@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300" />

      <p className="text-center text-xs text-gray-500 mt-4">
        © 2025 Multi Care — All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
