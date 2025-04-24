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
      <div className="container mx-auto p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          {/* Doctor Image */}
          <div className="bg-primary rounded-xl overflow-hidden w-full sm:max-w-72">
            <img
              className="w-full h-auto"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>

          {/* Doctor Details */}
          <div className="flex-1 border border-gray-300 rounded-xl p-6 bg-white">
            <p className="text-2xl font-semibold flex items-center gap-2">
              {docInfo.name}
              <img
                src={assets.verified_icon}
                alt="Verified"
                className="w-5 h-5"
              />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full bg-gray-100">
                {docInfo.experience}
              </button>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About{" "}
                <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
              </p>
              <p className="text-gray-500 max-w-[700px] mt-1 leading-relaxed">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-600 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-700">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-gray-700">
          <p className="text-lg font-semibold">Booking Slots</p>

          {/* Day Selector */}
          <div className="flex gap-4 items-center overflow-x-auto mt-5 pb-2 scrollbar-hide">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center px-4 py-3 min-w-[60px] rounded-full cursor-pointer transition-all duration-300
                    ${
                      slotIndex === index
                        ? "bg-primary text-white font-semibold shadow"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <p>
                    {item.length > 0 &&
                      dayOfWeek[item[0].datetime.getDay()].toUpperCase()}
                  </p>
                  <p className="text-sm">
                    {item.length > 0 && item[0].datetime.getDate()}
                  </p>
                </div>
              ))}
          </div>

          {/* Time Slot Selector */}
          <div className="flex flex-wrap gap-3 w-full mt-6">
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm px-5 py-2 rounded-full cursor-pointer transition-all duration-200
                    ${
                      item.time === slotTime
                        ? "bg-primary text-white font-medium shadow"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          {/* Book Button */}
          <button
            onClick={() => navigate(`/appointment/${docId}`)}
            className="bg-primary hover:bg-blue-700 text-white text-sm font-semibold px-10 py-3 rounded-full mt-6 transition-colors duration-300"
          >
            Book an appointment
          </button>
        </div>
      </div>
    )
  );
};

export default Appointment;
