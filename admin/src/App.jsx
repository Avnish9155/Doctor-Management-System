import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // 👈 Sidebar import

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="flex bg-[#F8F9FD]">
      <Sidebar />
      <div className="flex-1 ml-64">
        {" "}
        <ToastContainer />
        <Navbar />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mt-10">Welcome Admin</h2>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
