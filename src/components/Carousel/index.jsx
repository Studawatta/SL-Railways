import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div className=" relative w-full">
      <div className=" flex ">{slides}</div>
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
    </div>
  );
};

export default Carousel;
