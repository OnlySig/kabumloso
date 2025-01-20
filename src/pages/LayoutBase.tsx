import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const layoutBase = () => {
  return (
    <>
      <div className="bg-primarycolor500">
        <NavBar />
      </div>
      <section className="max-w-[1490px] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default layoutBase;
