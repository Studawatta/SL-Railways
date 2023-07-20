import React, { useState } from "react";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div className=" flex h-14 w-full items-center justify-between bg-[#f2f2f2] px-20 text-[12px] text-slate-500 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)] ">
      {/* NAV LEFT  */}
      <span>Sri Lanka Railways</span>
      {/* NAV RIGHT */}
      <div className="flex gap-4">
        <span
          className={`${
            currentPage === "home" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </span>
        <span
          className={`${
            currentPage === "gallery" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("gallery")}
        >
          Gallery
        </span>
        <span
          className={`${
            currentPage === "history" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("history")}
        >
          History
        </span>
        <span
          className={`${
            currentPage === "services" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("services")}
        >
          Our services
        </span>
        <span
          className={`${
            currentPage === "contact" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("contact")}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default Navbar;
