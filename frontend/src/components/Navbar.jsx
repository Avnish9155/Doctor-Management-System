import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="w-full bg-purple border-b border-gray-300 px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <span
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-blue-600 cursor-pointer"
      >
        Multi Care
      </span>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-6 text-sm text-gray-700">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/doctors">Doctors</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <>
            <span className="text-sm">{userData.name}</span>
            <button
              onClick={logout}
              className="px-3 py-1 text-sm bg-red-100 border border-red-400 text-red-600 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-3 py-1 text-sm bg-blue-100 border border-blue-400 text-blue-600 rounded"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
