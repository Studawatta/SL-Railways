import React, { useState } from "react";
import { r1, r2, r3, r4, r5, r6 } from "../../assets";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const Gallery = (props) => {
  const [viewImage, setViewImage] = useState(false);
  const [curr, setCurr] = useState(0);

  const pictures = [r1, r2, r3, r4, r5, r6];

  return (
    <>
      <div id="gallery" className="mx-auto w-[70%] pt-16 ">
        <h1 className=" text-[48px] font-thin">Gallery</h1>
        <div className=" mx-auto mt-2 flex w-full flex-wrap justify-between gap-x-2 gap-y-6    ">
          {pictures.map((img, index) => (
            <img
              src={img}
              key={index}
              className="h-48 w-full cursor-pointer md:w-[330px]"
              onClick={() => {
                setViewImage(true);
                setCurr(index);
              }}
            />
          ))}
        </div>

        {viewImage && (
          <div className="fixed left-0 top-[56px] z-20 h-[calc(100vh-56px)] w-screen bg-gray-900">
            <div className="flex">
              <span
                className="ml-auto mr-8 w-fit cursor-pointer text-[60px] text-gray-300"
                onClick={() => setViewImage(false)}
              >
                X
              </span>
            </div>
            <div className="m-auto flex h-[75%] w-[70%]  items-center">
              <AiOutlineLeft
                className="cursor-pointer rounded-full bg-slate-500 p-2 text-[56px] text-slate-300"
                onClick={() => {
                  if (curr > 0) {
                    setCurr(curr - 1);
                  }
                }}
              />
              <div className="m-auto flex h-full w-[85%] overflow-hidden bg-white">
                <div
                  className=" flex transition-transform duration-[1000ms] ease-in-out"
                  style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                  {pictures.map((img, i) => (
                    <img src={img} alt="img" className="h-full min-w-full" />
                  ))}
                </div>
              </div>
              <AiOutlineRight
                className="cursor-pointer rounded-full bg-slate-500 p-2 text-[56px] text-slate-300"
                onClick={() => {
                  if (curr < pictures.length - 1) {
                    setCurr(curr + 1);
                  }
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
