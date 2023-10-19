import React from "react";
import {
  mobitel_logo,
  EmblemSL,
  Sri_lanka_Railway_logo,
  apple_en,
  google_en,
} from "../../assets";
const Footer = () => {
  return (
    <div className=" mt-14 w-full items-center justify-center bg-gray-900 py-8">
      <div className="mx-auto w-[70%] text-white ">
        {/* TOP */}
        <div className="flex flex-col  justify-between gap-4  text-center md:flex-row md:text-left">
          {/* TOP_LEFT */}
          <div>
            2022 Sril Lanka Railways (SLR).All rights Reserved Sri Lanka
            Railways
            <p className="mt-2 leading-loose">
              Sri Lanka Railways
              <br />
              Sri Lanka Railways Headqwarters
              <br />
              Colombo 10, Sri Lanka <br />
              Telephones: +94 11 4 600 111
            </p>
          </div>
          {/* TOP_RIGHT */}
          <div>
            {/* TOP_RIGHT_TOP */}
            <div className="flex flex-col gap-4 md:flex-row md:gap-2">
              <span>Technology partner</span>
              <div className="flex justify-between">
                <img
                  src={mobitel_logo}
                  alt="mobitel_logo"
                  className="mx-2 h-12 w-28"
                />
                <img
                  src={EmblemSL}
                  alt="emblemSL"
                  className="mx-4 h-12  w-12"
                />
                <img
                  src={Sri_lanka_Railway_logo}
                  alt="Sri_lanka_Railway_logo"
                  className="h-12 w-12"
                />
              </div>
            </div>
            {/* TOP_RIGHT_BOTTOM */}
            <div className="mt-8 flex justify-between">
              <img src={apple_en} alt="app_store" />
              <img src={google_en} alt="google_play" />
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className=" mt-6 flex flex-col justify-between gap-2  font-bold md:mt-12 md:w-[80%] md:flex-row md:gap-0">
          <span className=" cursor-pointer">FAQ</span>
          <span className=" cursor-pointer">About us</span>
          <span className=" cursor-pointer">Privacy Policy</span>
          <span className=" cursor-pointer">Train timetable</span>
          <span className=" cursor-pointer">Ticket printing locations</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
