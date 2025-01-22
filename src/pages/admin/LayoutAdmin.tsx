import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <section className="2xl:h-screen">
      <Outlet />
    </section>
  );
};

export default LayoutAdmin;
