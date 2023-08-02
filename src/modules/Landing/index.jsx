import React from "react";
import { r1, r2, r3, r4 } from "../../assets";
import { BookingForm, Carousel } from "../../components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuary from "../../hooks/useMediaQuary";
const Landing = () => {
  const isAboveMediumScreens = useMediaQuary("(min-width:1060px)");
  const slides = [r1, r2, r3, r4];
  return (
    <div>
      <div
        className={`relative top-[56px]  w-full ${
          isAboveMediumScreens ? "h-[780px]" : "h-[300px]"
        } `}
      >
        <div className=" w-full">
          <Carousel autoSlide={true}>
            {slides.map((r) => (
              <img
                key={r}
                src={r}
                className=" h-[780px] min-w-full  object-cover"
              />
            ))}
          </Carousel>
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
      <div className="h-[400px] w-full"></div>
    </div>
  );
};

export default Landing;
