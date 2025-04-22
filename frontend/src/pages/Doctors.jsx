import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors) {
      setFilterDoc(
        speciality
          ? doctors.filter((doc) => doc.speciality === speciality)
          : doctors
      );
    }
  }, [doctors, speciality]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 px-4 sm:px-12">
      <p className="text-gray-700 text-xl font-semibold mb-6 text-center">
        Browse through the doctor specialists.
      </p>

      {/* Doctors List */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterDoc.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="flex items-center gap-4 border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl p-4 bg-white"
          >
            <img
              className="bg-blue-50 w-32 h-32 object-cover rounded-l-xl"
              src={item.image}
              alt={item.name}
            />
            <div>
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
