import React from "react";
import { r1, r2, r3, r4 } from "../../assets";
import { Carousel } from "../../components";

const Landing = () => {
  const slides = [r1, r2, r3, r4];
  return (
    <div>
      <div className="relative h-[780px] w-full ">
        <div className=" w-full">
          <Carousel autoSlide={true}>
            {slides.map((r) => (
              <img src={r} className=" h-[780px] min-w-full  object-cover" />
            ))}
          </Carousel>
        </div>
        <div className="absolute top-[300px] ml-20 flex h-[180px] flex-col justify-center ">
          <h1 className="text-[40px] font-semibold text-white drop-shadow-[0_8px_2px_black]">
            Welcome to Sri Lanka Railways
          </h1>
          <p className="text-[24px] text-white drop-shadow-[0_8px_2px_black]">
            Online Advance Train Seats Reservation
          </p>
          <a
            href="#booking-form"
            className="mt-4 w-fit cursor-pointer rounded-[30px] border-2 px-4 py-3 text-[18px] font-semibold text-white drop-shadow-[0_8px_2px_black] hover:bg-white hover:text-black hover:drop-shadow-none"
          >
            Book Your Seat
          </a>
        </div>
        <div
          id="booking-form"
          className=" absolute left-0 right-0 top-[90%] mx-auto flex h-[200px] w-[70%] shadow-xl"
        >
          <div className="flex-[1] bg-blue-400">
            <p className="ml-8 text-[32px] font-thin text-white">
              Book Your Seat{" "}
            </p>
            <span className="ml-8 text-[16px] text-white">
              You can book both ways
            </span>
          </div>
          <div className="flex flex-[3] items-center justify-center bg-white">
            <div className="h-[90%] w-[95%] bg-slate-400">
              <div className="grid h-[70%] w-full grid-cols-3 gap-4 bg-black p-4">
                <input className="h-8 w-[230px]" />
                <input className="h-8 w-[230px]" />
                <input className="h-8 w-[230px]" />
                <input className="h-8 w-[230px]" />
                <input className="h-8 w-[230px]" />
                <input className="h-8 w-[230px]" />
              </div>
              <div className="ml-auto h-[30%] w-32 bg-green-300"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40 w-full"></div>
    </div>
  );
};

export default Landing;
