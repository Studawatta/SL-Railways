import React from "react";
import { r1, r2, r3, r4 } from "../../assets";
import { BookingForm, Carousel } from "../../components";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Landing = () => {
  const slides = [r1, r2, r3, r4];
  return (
    <div>
      <div className="relative top-[56px] h-[780px] w-full ">
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
        <div className="absolute top-[244px] ml-20 flex h-[180px] flex-col justify-center ">
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
