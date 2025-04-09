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
      const currentDay = today.getDay(); // 0 (Sunday) to 6 (Saturday)
      const daysUntilMonday = currentDay === 0 ? 1 : 8 - currentDay; // Calculate days to next Monday
      const mondayDate = new Date(today);
      mondayDate.setDate(today.getDate() + daysUntilMonday - 7); // Calculate the date of the previous Monday

      const slots = [];

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(mondayDate);
        currentDate.setDate(mondayDate.getDate() + i);

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
          {/* Doctor's Image */}
          <div className="bg-primary rounded-lg overflow-hidden w-full sm:max-w-72">
            <img
              className="w-full h-auto"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>

          {/* Doctor's Details */}
          <div className="flex-1 border border-gray-400 rounded-lg p-6 bg-white mx-2 sm:mx-0">
            <p className="text-xl font-semibold flex items-center gap-2">
              {docInfo.name}{" "}
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
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* About Section */}
            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About{" "}
                <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
              </p>
              <p className="text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>
                    {item.length > 0 && dayOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p>{item.length > 0 && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots[slotIndex]?.map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button
            onClick={() => navigate(`/appointment/${docId}`)}
            className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
          >
            Book an appointment
          </button>
        </div>
      </div>
    )
  );
};

export default Appointment;
