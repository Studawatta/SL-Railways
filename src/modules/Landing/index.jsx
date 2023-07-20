import React from "react";
import { r1, r2, r3, r4 } from "../../assets";
import { Carousel } from "../../components";

const Landing = () => {
  const slides = [r1, r2, r3, r4];
  return (
    <div>
      <div className="h-[600px] w-full bg-red-200">
        {/* <div>
          <h1>Welcome to Sri Lanka Railways</h1>
          <p>Online Advance Train Seats Reservation</p>
        </div> */}
        {/* <img src={r4} className=" h-[600px] w-full object-cover" /> */}
        <div className="w-full">
          <Carousel>
            {slides.map((r) => (
              <img src={r} className=" h-[600px] w-[30%] object-cover" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Landing;
