import React, { useEffect, useRef, useState } from "react";

const DropDownStationList = () => {
  const [showDropDown, setShowDropDown] = useState(false);
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
  const dropDownRef = useRef();
  const useOutSideClick = (ref) => {
    useEffect(() => {
      const handleClickOutSide = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutSide);
      return () => {
        document.removeEventListener("mousedown", handleClickOutSide);
      };
    }, [ref]);
  };
  useOutSideClick(dropDownRef);
  return (
    <div ref={dropDownRef}>
      <input
        className="mt-1 rounded-md border-2 border-slate-500 px-2 py-1"
        placeholder="Choose station"
        onFocus={() => setShowDropDown(true)}
      />
      {showDropDown ? (
        <div className=" absolute mt-1 flex h-56 w-[200px] flex-col gap-2 overflow-auto rounded-md border-2 border-slate-400 bg-white p-1">
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
  );
};

export default DropDownStationList;
