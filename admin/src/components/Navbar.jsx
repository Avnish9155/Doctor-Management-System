import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom"; // 🔁 navigate करने के लिए

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const Logout = () => {
    if (aToken) {
      setAToken("");
      localStorage.removeItem("aToken");
      navigate("/"); // ✅ लॉगिन पेज पर redirect
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="flex items-center gap-4">
        <img src={assets.admin_logo} alt="Logo" className="h-10" />
        <p className="text-lg font-semibold">{aToken ? "Admin" : "Doctor"}</p>
      </div>
      <button
        onClick={Logout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
