import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import MoveUpOnRender from "../../components/MoveUpOnRender";

const DoctorsList = () => {
  const {
    doctors: contextDoctors,
    aToken,
    getAllDoctors,
    changeAvailability,
  } = useContext(AdminContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [doctorsToDisplay, setDoctorsToDisplay] = useState([]);

  console.log("DoctorsList component rendered");

  useEffect(() => {
    console.log("DoctorsList component useEffect triggered");
    console.log("aToken in DoctorsList useEffect:", aToken);
    if (aToken) {
      console.log("aToken is available, fetching doctors...");
      setLoading(true);
      setError(null);
      getAllDoctors()
        .then(() => setLoading(false))
        .catch((err) => {
          setError(err.message || "Failed to fetch doctors.");
          setLoading(false);
        });
    } else {
      console.log("aToken is not available");
      setLoading(false);
    }
  }, [aToken, getAllDoctors]);

  useEffect(() => {
    console.log("Context Doctors updated:", contextDoctors);
    setDoctorsToDisplay(contextDoctors);
  }, [contextDoctors]);

  console.log("DoctorsList - Doctors state before return:", doctorsToDisplay);
  console.log("Doctors state in render:", doctorsToDisplay);

  if (loading) {
    return <p>Loading doctors...</p>;
  }

  if (error) {
    return <p>Error loading doctors: {error}</p>;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl m-5 max-h-[90vh] overflow-y-scroll">
        <MoveUpOnRender id="admin-doctorlist">
          <h1 className="text-lg font-medium">All Doctors</h1>
          <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
            {doctorsToDisplay && doctorsToDisplay.length > 0 ? (
              doctorsToDisplay.map((item, index) => (
                <div
                  className="border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group"
                  key={index}
                >
                  <img
                    className="bg-indigo-50 group-hover:bg-primary transition-all duration-300"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="p-4 ">
                    <p className="text-neutral-800 text-lg font-medium">
                      {item.name}
                    </p>
                    <p className="text-zinc-600 text-sm ">{item.speciality}</p>
                    <div className="mt-5 flex items-center gap-1 text-sm">
                      <input
                        onChange={() => changeAvailability(item._id)}
                        type="checkbox"
                        checked={item.available}
                      />
                      <p>Available</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No doctors available.</p>
            )}
          </div>
        </MoveUpOnRender>
      </div>
    </div>
  );
};

export default DoctorsList;
