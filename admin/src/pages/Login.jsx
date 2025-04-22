import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAToken, backendUrl } = useContext(AdminContext);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrorMsg("");

    try {
      const endpoint =
        state === "Admin" ? "/api/admin/login" : "/api/doctor/login";

      const { data } = await axios.post(backendUrl + endpoint, {
        email,
        password,
      });

      if (data.success) {
        localStorage.setItem("aToken", data.token);
        setAToken(data.token);
        console.log(`${state} login successful`);
      } else {
        setErrorMsg("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold mt-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        {errorMsg && <p className="text-red-500 text-sm w-full">{errorMsg}</p>}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
