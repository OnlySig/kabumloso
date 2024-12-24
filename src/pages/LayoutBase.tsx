import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const layoutBase = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default layoutBase;
