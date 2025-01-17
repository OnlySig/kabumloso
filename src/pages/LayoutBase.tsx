import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const layoutBase = () => {
  return (
    <>
      <div className="bg-primarycolor500">
        <NavBar />
      </div>
      <section className="max-w-[1490px] mx-auto">
        <Outlet />
      </section>
    </>
  );
};

export default layoutBase;
