import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          CONTACT <span className="text-indigo-600">US</span>
        </h2>
        <p className="mt-2 text-gray-500">
          We’d love to hear from you. Reach out to us anytime!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-md rounded-xl shadow-md"
          src={assets.contact_image}
          alt="Contact Us"
        />

        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Office
          </h3>
          <p className="text-gray-600 mb-4">
            360020 Bhaktinagar, Rajkot
            <br />
            Gujarat, India
          </p>

          <h4 className="text-md font-semibold text-gray-700">Contact Info</h4>
          <p className="text-gray-600 mb-6">
            Mobile: +91 91556 24110
            <br />
            Email: abhisinghh05@gmail.com
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Careers at <span className="text-indigo-600">Medi Home</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Learn more about our teams and job openings.
          </p>

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all duration-300">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
