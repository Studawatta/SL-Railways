import React, { useState } from "react";
import { r1, r2, r3, r4, r5, r6 } from "../../assets";

const Gallery = (props) => {
  const pictures = [r1, r2, r3, r4, r5, r6];
  return (
    <>
      <div className="mx-auto mt-72 h-60 w-[70%] ">
        <h1 className="text-[48px] font-thin">Gallery</h1>
        <div className="grid w-full grid-cols-3 gap-6">
          {pictures.map((i) => (
            <img
              className="h-40 w-96 cursor-pointer"
              key={i}
              src={i}
              onClick={() => props.show(true)}
            />
          ))}
        </div>
        <div className="h-40 w-full "></div>
      </div>
      {/* {viewImage ? (
        <div className="absolute z-40 h-screen w-full bg-black"></div>
      ) : (
        ""
      )} */}
    </>
  );
};

export default Gallery;
