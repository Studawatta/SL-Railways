import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div className=" fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-[#f2f2f2] px-4 text-[12px] text-slate-500 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)] md:px-20 ">
      {/* NAV LEFT  */}
      <span>Sri Lanka Railways</span>
      {/* NAV RIGHT */}
      <div className="flex gap-4">
        <AnchorLink
          href="#home"
          className={`${
            currentPage === "home" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </AnchorLink>
        <AnchorLink
          href="#gallery"
          className={`${
            currentPage === "gallery" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("gallery")}
        >
          Gallery
        </AnchorLink>
        <AnchorLink
          href="#history"
          className={`${
            currentPage === "history" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("history")}
        >
          History
        </AnchorLink>
        <AnchorLink
          href="#our_services"
          className={`${
            currentPage === "services" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("services")}
        >
          Our services
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className={`${
            currentPage === "contact" ? "text-black" : ""
          } cursor-pointer`}
          onClick={() => setCurrentPage("contact")}
        >
          Contact
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
