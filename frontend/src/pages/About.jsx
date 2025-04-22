import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 sm:px-12 py-10">
      {/* About Us Heading */}
      <div className="text-center text-3xl font-semibold text-gray-600 mb-10">
        <p>
          ABOUT <span className="text-gray-800">US</span>
        </p>
      </div>

      {/* Image and About Text */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-md"
          src={assets.about_image}
          alt="About"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-[15px] text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            facere consequatur, eum a sapiente nihil consectetur enim eveniet
            dolor repellendus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
            beatae quaerat, animi voluptatum adipisci nulla inventore
            consequuntur accusantium rem incidunt, repellat ipsum distinctio
            velit aut.
          </p>

          <b className="text-gray-800 text-base">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            culpa asperiores doloribus, consectetur mollitia ut autem
            praesentium hic?
          </p>
        </div>
      </div>

      {/* Why Choose Us Heading */}
      <div className="text-xl font-semibold text-center text-gray-700 mb-8">
        <p>
          WHY <span className="text-primary">CHOOSE US</span>
        </p>
      </div>

      {/* Choose Us Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-20">
        <div className="border border-gray-300 px-8 py-10 rounded-lg shadow hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer flex-1">
          <b className="text-lg">Efficiency:</b>
          <p className="mt-2">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        <div className="border border-gray-300 px-8 py-10 rounded-lg shadow hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer flex-1">
          <b className="text-lg">Convenience:</b>
          <p className="mt-2">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        <div className="border border-gray-300 px-8 py-10 rounded-lg shadow hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer flex-1">
          <b className="text-lg">Personalization:</b>
          <p className="mt-2">
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
