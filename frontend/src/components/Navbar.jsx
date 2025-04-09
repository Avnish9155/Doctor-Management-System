import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ALL DOCTORS", path: "/doctors" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 px-6">
      {/* Logo */}
      <Link
        to="/"
        className="medi-home text-primary font-semibold pb-1 text-lg"
      >
        MEDI HOME
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {navLinks.map(({ name, path }, index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-gray-700 hover:text-primary transition duration-300"
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative group cursor-pointer">
            <img
              onClick={() => navigate("/my-profile")}
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

            {/* Dropdown Menu */}
            <div className="absolute top-10 right-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-3 w-48 z-20">
              <p
                onClick={() => navigate("/my-profile")}
                className="hover:text-black cursor-pointer py-2"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate("/my-appointments")}
                className="hover:text-black cursor-pointer py-2"
              >
                My Appointments
              </p>
              <p
                onClick={() => setToken(false)}
                className="hover:text-red-600 cursor-pointer py-2"
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Button */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-start pt-10 shadow-lg 
                    transition-transform duration-300 ${
                      showMenu ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        <div className="flex items-center justify-between w-full px-6">
          <img className="w-36" src={assets.logo} alt="Logo" />
          <img
            className="w-7 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium w-full">
          {navLinks.map(({ name, path }, index) => (
            <NavLink
              key={index}
              to={path}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `px-6 py-2 w-full text-center rounded-md transition ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "hover:bg-gray-200 text-black"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
