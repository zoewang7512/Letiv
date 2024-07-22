import React, { useState } from "react";
//icons
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <section className="container w-full m-auto pt-24 md:py-24">
      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-700 `}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => {
            return <img key={slide} src={slide} alt="" />;
          })}
        </div>
        {/* button */}
        <div className="top-0 absolute h-full w-full justify-between flex items-center text-white px-3 text-2xl">
          <button onClick={prevSlide}>
            <FaChevronCircleLeft />
          </button>
          <button onClick={nextSlide}>
            <FaChevronCircleRight />
          </button>
        </div>
        {/* bottom circle */}
        <div className="absolute bottom-0 py-4  flex justify-center gap-1 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => setCurrent(i)}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 cursor-pointer ${
                  i === current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
