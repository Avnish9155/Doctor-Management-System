import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      id="speciality"
    >
      <h1 className="text-4xl font-bold">Find by Speciality</h1>
      <p className="sm:w-1/2 text-center text-lg">
        Simply browse through our extensive list of trusted doctors and schedule
        your appointment.
      </p>
      <div className="flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-lg"
            key={index}
            to={`/doctors/${item.speciality}`} // Corrected to prop
          >
            <img
              className="w-20 sm:w-28 mb-3 rounded-full border-2 border-white"
              src={item.image}
              alt={item.speciality}
            />
            <p className="font-semibold">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
