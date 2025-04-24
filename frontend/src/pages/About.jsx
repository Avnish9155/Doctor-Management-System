import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* About Us Heading */}
      <div className="text-center text-2xl font-bold text-gray-800 mb-8">
        <p>About Us</p>
      </div>

      {/* Image and About Text */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <img
          className="w-full md:max-w-[300px] rounded border"
          src={assets.about_image}
          alt="About"
        />
        <div className="md:w-2/3 text-base text-gray-700 space-y-4">
          <p>
            We aim to make healthcare simpler by connecting patients to the
            right doctors. Our platform allows you to search, compare, and book
            appointments with ease.
          </p>
          <p>
            We believe in accessible and personalized healthcare services for
            everyone, backed by modern technology and a user-friendly interface.
          </p>

          <div>
            <b className="text-gray-900">Our Vision</b>
            <p>
              To provide a reliable and simple healthcare system that empowers
              people to take care of their health better.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Heading */}
      <div className="text-xl font-semibold text-center text-gray-800 mb-6">
        <p>Why Choose Us</p>
      </div>

      {/* Choose Us Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 text-base">
        <div className="bg-white border rounded p-4">
          <b>Efficiency</b>
          <p className="mt-2 text-sm">
            Easy and quick appointment booking in just a few steps.
          </p>
        </div>
        <div className="bg-white border rounded p-4">
          <b>Convenience</b>
          <p className="mt-2 text-sm">
            Access doctors nearby without long wait times.
          </p>
        </div>
        <div className="bg-white border rounded p-4">
          <b>Personalization</b>
          <p className="mt-2 text-sm">
            Get health tips and suggestions based on your activity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
