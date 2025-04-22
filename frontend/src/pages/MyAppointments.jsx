import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b text-lg">
        My appointments
      </p>
      <div className="mt-4">
        {doctors.slice(0, 3).map((doctor, index) => (
          <div
            className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b"
            key={index}
          >
            {/* Doctor Image */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-lg shadow-sm"
                src={doctor.image}
                alt={doctor.name}
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{doctor.name}</p>
              <p>{doctor.speciality}</p>
              <p className="text-zinc-700 font-medium mt-2">Address:</p>
              <p className="text-xs">{doctor.address.line1}</p>
              <p className="text-xs">{doctor.address.line2}</p>
              <p className="text-xs mt-2">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time:
                </span>{" "}
                25, July, 2024 | 8:30 PM
              </p>
            </div>
            <div></div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
