import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className=" relative w-full overflow-hidden">
      <div
        className=" flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className=" absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full border-none bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <AiOutlineLeft size={40} />
        </button>
        <button
          onClick={next}
          className="rounded-full border-none bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <AiOutlineRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`h-3 w-3 rounded-full bg-white transition-all ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
