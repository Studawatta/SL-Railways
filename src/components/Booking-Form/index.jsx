import React, { useEffect, useRef, useState } from "react";
import DropDownStationList from "../DropDownStationList";
import useMediaQuary from "../../hooks/useMediaQuary";

const BookingForm = () => {
  const isAboveMediumScreens = useMediaQuary("(min-width:1060px)");
  const [showDropDownFrom, setShowDropDownFrom] = useState(false);
  const [showDropDownTo, setShowDropDownTo] = useState(false);

  const [showReturn, setShowReturn] = useState(false);
  const input_Container_Style = "flex h-fit flex-col bg-white";
  const input_Style =
    "mt-1 rounded-md border-2 border-slate-500 px-2 py-1 w-[100%]";

  const stations = [
    "Ahangama",
    "Aluthgama",
    "Ambalangoda",
    "Badulla",
    "Beliatta",
    "Bentota",
    "Colombo Fort",
    "Demodara-Ella",
    "Ella",
    "Eraur",
    "Galle",
    "Gampaha",
    "Habarana",
    "Hatton",
    "Hikkaduwa",
    "Jaffna",
    "Kandy",
  ];

  const dropDownRefFrom = useRef();
  const dropDownRefTo = useRef();
  const useOutSideClick = (ref) => {
    useEffect(() => {
      const handleClickOutSide = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setShowDropDownFrom(false);
          setShowDropDownTo(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutSide);
      return () => {
        document.removeEventListener("mousedown", handleClickOutSide);
      };
    }, [ref]);
  };

  useOutSideClick(dropDownRefFrom);
  useOutSideClick(dropDownRefTo);

  return (
    <div
      id="booking-form"
      className={`absolute left-0 right-0  mx-auto h-fit w-[70%] bg-white shadow-xl ${
        isAboveMediumScreens ? "top-[90%] flex" : " top-[236%]"
      }`}
    >
      {/* BOOKING FORM LEFT */}

      <div className="flex-[1] bg-blue-400">
        <p className="ml-[7%] text-[32px] font-thin text-white">
          Book Your Seat{" "}
        </p>
        <p className="ml-[7%]  text-[16px] text-white">
          You can book both ways
        </p>
      </div>

      {/* BOOKING FORM RIGHT */}

      <div className="flex flex-[3] items-center justify-center   py-4 ">
        <div className="flex  w-[90%] flex-col gap-4">
          {/* FORM CONTIANER */}

          <div
            className={` w-full   ${
              isAboveMediumScreens
                ? "grid grid-cols-3  gap-x-8 gap-y-4"
                : "flex flex-col gap-2"
            }`}
          >
            {/* FROM INPUT */}

            <div ref={dropDownRefFrom} className="relative w-full">
              <label>From</label>
              <input
                className="mt-1 w-full rounded-md border-2 border-slate-500 px-2 py-1"
                placeholder="Choose station"
                onFocus={() => setShowDropDownFrom(true)}
              />
              {showDropDownFrom ? (
                <div className=" absolute mt-1 flex h-56 w-full flex-col gap-2 overflow-auto rounded-md border-2 border-slate-400 bg-white p-1">
                  {stations.map((station, index) => (
                    <span
                      key={index}
                      className=" cursor-pointer pl-4 hover:bg-slate-200"
                    >
                      {station}
                    </span>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            {/* TO INPUT */}

            <div ref={dropDownRefTo} className="relative w-full">
              <label>To</label>
              <input
                className="mt-1 w-full rounded-md border-2 border-slate-500 px-2 py-1"
                placeholder="Choose station"
                onFocus={() => setShowDropDownTo(true)}
              />
              {showDropDownTo ? (
                <div className=" absolute mt-1 flex h-56 w-full flex-col gap-2 overflow-auto rounded-md border-2 border-slate-400 bg-white p-1">
                  {stations.map((station, index) => (
                    <span
                      key={index}
                      className=" cursor-pointer pl-4 hover:bg-slate-200"
                    >
                      {station}
                    </span>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            {/* DATE INPUT */}

            <div className={input_Container_Style}>
              <label>Date</label>
              <input className={input_Style} type="date" placeholder="Date" />
            </div>

            {/* PASSENGERS COUNT INPUT */}

            <div className={input_Container_Style}>
              <input
                className={input_Style}
                placeholder="No of Passengers"
                type="number"
                min="1"
                max="5"
              />
            </div>

            {/* SHOW RETURN BUTTON AND RETURN DATE INPUT */}

            <div className="flex items-center gap-8">
              <div
                className={`${
                  showReturn ? "bg-blue-400" : "bg-slate-300"
                } flex h-7 w-12 cursor-pointer items-center rounded-2xl  px-1`}
                onClick={() => setShowReturn(!showReturn)}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white ${
                    showReturn
                      ? " translate-x-5 duration-500"
                      : "translate-x-0 duration-500"
                  }`}
                ></div>
              </div>
              <span className="text-[18px] text-slate-400">Return</span>
            </div>
            {showReturn ? (
              <div className={input_Container_Style}>
                <input
                  className={input_Style}
                  placeholder="Date"
                  type="text"
                  onfocus="(this.type='date')"
                  onblur="(this.type='text')"
                />
              </div>
            ) : (
              ""
            )}
          </div>

          {/* BUTTON CONTAINER */}

          <div className="ml-auto flex h-[30%] w-fit items-center gap-2  ">
            <button className="h-fit rounded-lg border-2 border-slate-400 px-3 py-2 hover:bg-blue-400">
              Search
            </button>
            <button className="h-fit rounded-lg border-2 border-slate-400 px-3 py-2 hover:bg-slate-300">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
