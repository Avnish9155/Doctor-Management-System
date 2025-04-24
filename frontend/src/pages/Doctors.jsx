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
    <div className="min-h-screen bg-blue-50 py-10 px-4 sm:px-12">
      <p className="text-gray-800 text-2xl font-semibold mb-8 text-center">
        Browse through the doctor specialists.
      </p>

      {/* Doctors List */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterDoc.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="flex items-center gap-4 border border-gray-200 rounded-xl overflow-hidden cursor-pointer bg-white p-4 shadow-sm"
          >
            <img
              className="bg-blue-100 w-32 h-32 object-cover rounded-xl"
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

      {filterDoc.length === 0 && (
        <div className="text-center text-gray-500 mt-20 text-lg">
          No doctors found for this speciality.
        </div>
      )}
    </div>
  );
};

export default Doctors;
