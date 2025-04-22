import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10">
      <h1 className="text-4xl font-bold text-center">Top Doctors to Book</h1>
      <p className="sm:w-1/2 text-center text-lg">
        These are the top doctors in the area based on reviews.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)} // Corrected doctor ID access
            className="border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            key={index}
          >
            <img
              className="bg-blue-50 w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo(0, 0);
        }}
        className="bg-blue-600 text-white px-12 py-3 rounded-full mt-10 hover:bg-blue-700 transition duration-300"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
