import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const layoutBase = () => {
  return (
    <>
      <NavBar />
      <section className="max-w-[1490px] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default layoutBase;
