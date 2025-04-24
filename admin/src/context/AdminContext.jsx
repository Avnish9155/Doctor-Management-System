import { createContext, useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  const [doctors, setDoctors] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = useCallback(async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/all-doctors", {
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });

      console.log("Data from API in Context:", data);

      if (data.success) {
        setDoctors(data.doctors);
        console.log("Doctors state updated in Context:", data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [aToken, backendUrl]); // useCallback के लिए dependencies

  const changeAvailability = useCallback(
    async (doctorId) => {
      try {
        const { data } = await axios.put(
          `${backendUrl}/api/admin/doctor/${doctorId}/availability`,
          {},
          {
            headers: {
              Authorization: `Bearer ${aToken}`, // यहाँ भी Bearer जोड़ें
            },
          }
        );

        if (data.success) {
          toast.success(data.message);
          getAllDoctors(); // Re-fetch doctors to update the UI
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
    [aToken, getAllDoctors, backendUrl]
  );

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
