import React from "react";

const ImageSlider = (props) => {
  return (
    <div className=" h-screen w-full bg-black">
      <div
        onClick={() => props.show(false)}
        className=" ml-auto mr-4 w-fit cursor-pointer text-[32px] font-bold text-white"
      >
        X
      </div>
    </div>
  );
};

export default ImageSlider;
