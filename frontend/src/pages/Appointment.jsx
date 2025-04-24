import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const navigate = useNavigate();

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    if (doctors) {
      const foundDoc = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoc);
    }
  }, [docId, doctors]);

  useEffect(() => {
    if (!docInfo) return;

    const generateAvailableSlots = () => {
      const today = new Date();
      const slots = [];

      for (let i = 1; i < 8; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);

        if (
          today.getDate() === currentDate.getDate() &&
          today.getMonth() === currentDate.getMonth() &&
          today.getFullYear() === currentDate.getFullYear()
        ) {
          currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }

        let timeSlots = [];
        while (currentDate < endTime) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: currentDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
        slots.push(timeSlots);
      }

      setDocSlots(slots);
    };

    generateAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="container mx-auto px-4 py-10 bg-gray-50 min-h-screen">
        {/* Doctor Section */}
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Doctor Image */}
          <div className="w-full sm:max-w-[280px] rounded-xl overflow-hidden bg-white shadow">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 bg-white rounded-xl p-6 shadow">
            <div className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
              {docInfo.name}
              <img
                src={assets.verified_icon}
                alt="Verified"
                className="w-5 h-5"
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <p className="inline-block text-xs mt-2 px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
              {docInfo.experience}
            </p>

            <div className="mt-6">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-700">
                About{" "}
                <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
              </p>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {docInfo.about}
              </p>
            </div>

            <p className="mt-4 font-medium text-gray-700">
              Appointment Fee:{" "}
              <span className="text-gray-900 font-semibold">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Slots Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Booking Slots
          </h2>

          {/* Date Selectors */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
            {docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`px-4 py-3 min-w-[60px] text-center rounded-full cursor-pointer
                  ${
                    slotIndex === index
                      ? "bg-blue-600 text-white shadow font-semibold"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <p>{dayOfWeek[item[0]?.datetime.getDay()]}</p>
                <p className="text-sm">{item[0]?.datetime.getDate()}</p>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="flex flex-wrap gap-3 mt-6">
            {docSlots[slotIndex]?.map((item, index) => (
              <button
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`px-5 py-2 rounded-full text-sm cursor-pointer transition-all
                  ${
                    slotTime === item.time
                      ? "bg-blue-600 text-white font-medium shadow"
                      : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {item.time.toLowerCase()}
              </button>
            ))}
          </div>

          {/* Book Button */}
          <div className="mt-8">
            <button
              onClick={() => navigate(`/appointment/${docId}`)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
