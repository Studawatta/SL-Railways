import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BookingForm, Carousel } from "../../components";
import useMediaQuary from "../../hooks/useMediaQuary";
const Landing = () => {
  const isAboveMediumScreens = useMediaQuary("(min-width:1060px)");

  return (
    <div id="home">
      <div className={` relative  w-full  `}>
        <div className=" w-full">
          <Carousel />
        </div>
        <div
          className={`absolute top-[244px]  flex h-[180px] w-fit flex-col justify-center  ${
            isAboveMediumScreens ? "ml-20" : "ml-2"
          }`}
        >
          <h1 className="text-[40px] font-semibold text-white drop-shadow-[0_8px_2px_black]">
            Welcome to Sri Lanka Railways
          </h1>
          <p className="text-[24px] text-white drop-shadow-[0_8px_2px_black]">
            Online Advance Train Seats Reservation
          </p>
          <AnchorLink
            href="#booking-form"
            className="mt-4 w-fit cursor-pointer rounded-[30px] border-2 px-4 py-3 text-[18px] font-semibold text-white drop-shadow-[0_8px_2px_black] hover:bg-white hover:text-black hover:drop-shadow-none"
          >
            Book Your Seat
          </AnchorLink>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default Landing;
