import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const value = {};

  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};

export default DoctorContextProvider;
