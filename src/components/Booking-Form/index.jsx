import React, { useEffect, useRef, useState } from "react";
import DropDownStationList from "../DropDownStationList";

const BookingForm = () => {
  const [showReturn, setShowReturn] = useState(false);
  const input_Container_Style = "flex h-fit w-fit flex-col bg-white";
  const input_Style =
    "mt-1 rounded-md border-2 border-slate-500 px-2 py-1 w-[200px]";

  return (
    <div
      id="booking-form"
      className=" absolute left-0 right-0 top-[90%] mx-auto flex h-[200px] w-[70%] shadow-xl"
    >
      <div className="flex-[1] bg-blue-400">
        <p className="ml-8 text-[32px] font-thin text-white">Book Your Seat </p>
        <span className="ml-8 text-[16px] text-white">
          You can book both ways
        </span>
      </div>
      <div className="flex flex-[3] items-center justify-center bg-white">
        <div className="h-[90%] w-[95%] ">
          <div className="grid h-[70%] w-full grid-cols-3 px-4">
            <div className={input_Container_Style}>
              <label>From</label>

              <DropDownStationList />
            </div>

            <div className={input_Container_Style}>
              <label>To</label>
              <DropDownStationList />
            </div>
            <div className={input_Container_Style}>
              <label>Date</label>
              <input className={input_Style} type="date" placeholder="Date" />
            </div>
            <div className={input_Container_Style}>
              <input
                className={input_Style}
                placeholder="No of Passengers"
                type="number"
                min="1"
                max="5"
              />
            </div>
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
                      ? " translate-x-4 duration-500"
                      : "translate-x-0 duration-500"
                  }`}
                ></div>
              </div>
              <span className="text-[18px] text-slate-400">Return</span>
            </div>
            {showReturn ? (
              <div>
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
          <div className="ml-auto flex h-[30%] w-fit items-center gap-2 ">
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