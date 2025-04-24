import { useEffect } from "react";

const MoveUpOnRender = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default MoveUpOnRender;
