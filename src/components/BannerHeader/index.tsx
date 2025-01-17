/* eslint-disable indent */
import { useEffect, useState } from "react";
import imgBanner1 from "../../assets/banner-header1.png";
import imgBanner2 from "../../assets/banner-header2.png";

const BannerHeader = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const imgSrc = (currentImg: number) => {
    switch (currentImg) {
      case 1:
        return imgBanner1;
      case 2:
        return imgBanner2;
      default:
        return imgBanner1;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === 1 ? 2 : 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative">
      <img
        src={imgSrc(currentImg)}
        alt="banner do site bonitão xddddd"
        className="w-full lg:h-[400px] xl:h-[440px] 2xl:h-[500px]"
      />
      <div className="flex justify-center gap-2 text-center absolute bottom-6 w-full">
        <span
          className={`${
            currentImg === 1 ? "opacity-100" : "opacity-50"
          } w-3 h-3 bg-white  rounded-full cursor-pointer`}
          onClick={() => setCurrentImg(1)}
        ></span>
        <span
          className={`${
            currentImg === 1 ? "opacity-50" : "opacity-100"
          } w-3 h-3 bg-white rounded-full cursor-pointer`}
          onClick={() => setCurrentImg(2)}
        ></span>
      </div>
    </header>
  );
};

export default BannerHeader;
