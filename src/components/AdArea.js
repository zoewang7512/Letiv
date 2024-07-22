import React from "react";

//assets
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";

const AdArea = () => {
  return (
    <section className="container px-5 py-6 mx-auto">
      <div className="flex flex-wrap -m-4 ">
        <div className="p-4 lg:w-1/2">
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center cursor-pointer">
            <img
              alt="banner1"
              src={banner1}
              className=" rounded-lg sm:mb-0 mb-4"
            />
          </div>
        </div>

        <div className="p-4 lg:w-1/2">
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center cursor-pointer">
            <img
              alt="banner2"
              src={banner2}
              className=" rounded-lg sm:mb-0 mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdArea;
