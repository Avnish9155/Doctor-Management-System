// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
      <ul className="space-y-4">
        <li>Dashboard</li>
        <li>Appointments</li>
        <li>Doctors</li>
        <li>Patients</li>
      </ul>
    </div>
  );
};

export default Sidebar;
