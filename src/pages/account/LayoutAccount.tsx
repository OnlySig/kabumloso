import { Outlet } from "react-router-dom";
import testTemplate from "../../assets/sebrae-rs-moda-online.webp";

const LayoutAccount = () => {
  return (
    <section className="flex">
      <img
        src={testTemplate}
        alt="test dahora"
        className="w-1/2 h-screen object-cover"
      />
      <div className="w-1/2 p-3 my-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default LayoutAccount;
