import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: "57th Cross, Richmond Circle, Church Road, London",
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white text-gray-800 rounded-2xl shadow-lg">
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-28 h-28 rounded-full border-4 border-gray-200 object-cover"
          src={userData.image}
          alt="Profile"
        />
        {isEdit ? (
          <input
            name="name"
            type="text"
            value={userData.name}
            onChange={handleChange}
            className="mt-2 text-lg font-semibold text-center border-b focus:outline-none"
          />
        ) : (
          <p className="mt-2 text-xl font-semibold">{userData.name}</p>
        )}
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">
          Contact Information
        </h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Email:</span> {userData.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span>{" "}
            {isEdit ? (
              <input
                name="phone"
                type="text"
                value={userData.phone}
                onChange={handleChange}
                className="border-b focus:outline-none w-full"
              />
            ) : (
              userData.phone
            )}
          </p>
          <p>
            <span className="font-medium">Address:</span>{" "}
            {isEdit ? (
              <input
                name="address"
                type="text"
                value={userData.address}
                onChange={handleChange}
                className="border-b focus:outline-none w-full"
              />
            ) : (
              userData.address
            )}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">
          Basic Information
        </h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Gender:</span>{" "}
            {isEdit ? (
              <select
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                className="border-b focus:outline-none"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              userData.gender
            )}
          </p>
          <p>
            <span className="font-medium">Birthday:</span>{" "}
            {isEdit ? (
              <input
                name="dob"
                type="date"
                value={userData.dob}
                onChange={handleChange}
                className="border-b focus:outline-none"
              />
            ) : (
              userData.dob
            )}
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold"
        >
          {isEdit ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
